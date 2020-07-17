// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as ts from 'typescript';

export interface ExportNativeModuleInfo {
    program: ts.Program;
    sourceFile: ts.SourceFile;
    typeNode: ts.TypeNode;
    name: string;
}

export interface ExportComponentInfo {
    program: ts.Program;
    sourceFile: ts.SourceFile;
    typeNode: ts.TypeNode;
    name: string;
    options: { [key: string]: boolean | string };
}

export interface ExportCommandInfo {
    program: ts.Program;
    sourceFile: ts.SourceFile;
    typeNode: ts.TypeNode;
    supportedCommands: string[];
}

type ExportInfo = [ts.TypeNode, ts.Expression, ts.Expression];

export function getMembersFromType(typeNode: ts.TypeNode, sourceFile: ts.SourceFile): readonly ts.TypeElement[] | undefined {
    if (ts.isParenthesizedTypeNode(typeNode)) {
        return getMembersFromType(typeNode.type, sourceFile);
    } else if (ts.isTypeLiteralNode(typeNode)) {
        return typeNode.members;
    } else if (ts.isIntersectionTypeNode(typeNode)) {
        const validMembers = typeNode.types
            .map((itemType: ts.TypeNode) => getMembersFromType(itemType, sourceFile))
            .filter((members: readonly ts.TypeElement[] | undefined) => members !== undefined);
        if (validMembers.length === 0) {
            return undefined;
        } else {
            return validMembers.reduce((a: ts.TypeElement[], b: ts.TypeElement[]) => a.concat(b));
        }
    } else if (ts.isTypeReferenceNode(typeNode)) {
        switch (typeNode.typeName.getText()) {
            case 'Readonly': {
                if (typeNode.typeArguments !== undefined && typeNode.typeArguments.length > 0) {
                    return getMembersFromType(typeNode.typeArguments[0], sourceFile);
                }
                break;
            }
            case 'ViewProps': return undefined;
            default: {
                for (const stat of sourceFile.statements) {
                    if (ts.isInterfaceDeclaration(stat) && stat.name.getText() === typeNode.typeName.getText()) {
                        return stat.members;
                    } else if (ts.isTypeAliasDeclaration(stat) && stat.name.getText() === typeNode.typeName.getText()) {
                        return getMembersFromType(stat.type, sourceFile);
                    }
                }
            }
        }
    }
    return undefined;
}

export function tryParseExportedCallExpression(callExpression: ts.Expression, functionName: string): ExportInfo | undefined {
    // the export statement may be "export default (CALL-EXPRESSION as Type)"
    while (ts.isParenthesizedExpression(callExpression) || ts.isTypeAssertion(callExpression) || ts.isAsExpression(callExpression)) {
        // tslint:disable-next-line:no-parameter-reassignment
        callExpression = callExpression.expression;
    }

    // ensure that the export statement is exporting the result of a function call to the specified function
    if (!ts.isCallExpression(callExpression)) {
        return undefined;
    }
    if (ts.isIdentifier(callExpression.expression)) {
        if (callExpression.expression.text !== functionName) {
            return undefined;
        }
    } else if (ts.isQualifiedName(callExpression.expression)) {
        if (callExpression.expression.getText() !== functionName) {
            return undefined;
        }
    } else if (ts.isPropertyAccessExpression(callExpression.expression)) {
        if (callExpression.expression.getText() !== functionName) {
            return undefined;
        }
    } else {
        return undefined;
    }

    if (callExpression.typeArguments === undefined || callExpression.typeArguments.length !== 1) {
        throw new Error(`The call to function ${functionName} should have one type argument.`);
    }
    if (!ts.isTypeNode(callExpression.typeArguments[0])) {
        throw new Error(`The call to function ${functionName} should have one type argument.`);
    }
    if (callExpression.arguments.length === 0) {
        throw new Error(`The call to function ${functionName} should have one at least one argument.`);
    }

    return [callExpression.typeArguments[0], callExpression.arguments[0], callExpression.arguments[1]];
}

export function tryParseExport(program: ts.Program, sourceFile: ts.SourceFile, node: ts.Node, functionName: string): ExportInfo | undefined {
    // export default FUNCTION_NAME<TYPE>(ARGUMENT)
    // export something = FUNCTION_NAME<TYPE>(ARGUMENT)

    if (ts.isExportAssignment(node)) {
        if (node.isExportEquals !== undefined && node.isExportEquals) {
            // unexpected: export = something;
            return undefined;
        }
        return tryParseExportedCallExpression(node.expression, functionName);
    } else if (ts.isVariableStatement(node)) {
        // unexpected: unexported variable declaration
        const typeChecker = program.getTypeChecker();
        const exportSymbols = typeChecker.getExportsOfModule(<ts.Symbol>typeChecker.getSymbolAtLocation(sourceFile));
        for (const varDecl of node.declarationList.declarations) {
            if (varDecl.initializer !== undefined) {
                const exportedSymbol = <ts.Symbol>typeChecker.getSymbolAtLocation(varDecl.name);
                if (exportSymbols.indexOf(exportedSymbol) !== -1) {
                    const exportInfo = tryParseExportedCallExpression(varDecl.initializer, functionName);
                    if (exportInfo !== undefined) {
                        if (node.declarationList.declarations.length !== 1) {
                            throw new Error(`The call of function ${functionName} should be exported independently.`);
                        }
                        return exportInfo;
                    }
                }
            }
        }
        return undefined;
    } else {
        return undefined;
    }

}

export function tryParseExportNativeModule(program: ts.Program, sourceFile: ts.SourceFile, node: ts.Node): ExportNativeModuleInfo | undefined {
    const exportInfo = tryParseExport(program, sourceFile, node, 'TurboModuleRegistry.getEnforcing');
    if (exportInfo === undefined) {
        return undefined;
    }

    const [typeNode, moduleNameNode] = exportInfo;
    if (!ts.isStringLiteral(moduleNameNode)) {
        return undefined;
    }
    return {
        program,
        sourceFile,
        name: moduleNameNode.text,
        typeNode
    };
}

export function tryParseExportComponent(program: ts.Program, sourceFile: ts.SourceFile, node: ts.Node): ExportComponentInfo | undefined {
    const exportInfo = tryParseExport(program, sourceFile, node, 'codegenNativeComponent');
    if (exportInfo === undefined) {
        return undefined;
    }

    const [typeNode, componentNameNode, optionsNode] = exportInfo;
    if (!ts.isStringLiteral(componentNameNode)) {
        return undefined;
    }

    const result: ExportComponentInfo = {
        program,
        sourceFile,
        typeNode,
        name: componentNameNode.text,
        options: {}
    };

    if (optionsNode !== undefined && ts.isObjectLiteralExpression(optionsNode)) {
        optionsNode.properties.forEach((optionItem: ts.ObjectLiteralElementLike) => {
            if (ts.isPropertyAssignment(optionItem) && optionItem.initializer !== undefined) {
                if (ts.isStringLiteral(optionItem.initializer)) {
                    result.options[optionItem.name.getText()] = optionItem.initializer.text;
                } else if (optionItem.initializer.kind === ts.SyntaxKind.TrueKeyword) {
                    result.options[optionItem.name.getText()] = true;
                } else if (optionItem.initializer.kind === ts.SyntaxKind.FalseKeyword) {
                    result.options[optionItem.name.getText()] = false;
                }
            }
        });
    }
    return result;
}

export function tryParseExportCommand(program: ts.Program, sourceFile: ts.SourceFile, node: ts.Node): ExportCommandInfo | undefined {
    const exportInfo = tryParseExport(program, sourceFile, node, 'codegenNativeCommands');
    if (exportInfo === undefined) {
        return undefined;
    }

    const [typeNode, componentNameNode] = exportInfo;
    const commandNameError = new Error(`The first argument to codegenNativeCommands is expected to be {supportedCommands:ARRAY-OF-STRING-LITERALS}, instead of ${componentNameNode.getText()}.`);

    if (!ts.isObjectLiteralExpression(componentNameNode)) {
        throw commandNameError;
    }
    if (componentNameNode.properties.length !== 1) {
        throw commandNameError;
    }

    const commandNameProp = componentNameNode.properties[0];
    if (!ts.isPropertyAssignment(commandNameProp)) {
        throw commandNameError;
    }
    if (!ts.isIdentifier(commandNameProp.name) && !ts.isStringLiteral(commandNameProp.name)) {
        throw commandNameError;
    }
    if (commandNameProp.name.text !== 'supportedCommands') {
        throw commandNameError;
    }

    const commandNameArray = commandNameProp.initializer;
    if (!ts.isArrayLiteralExpression(commandNameArray)) {
        throw commandNameError;
    }

    return {
        program,
        sourceFile,
        typeNode,
        supportedCommands: commandNameArray.elements.map((value: ts.Expression) => {
            if (!ts.isStringLiteral(value)) {
                throw commandNameError;
            }
            return value.text;
        })
    };
}
