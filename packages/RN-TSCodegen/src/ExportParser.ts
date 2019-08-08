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
}

export interface ExportCommandInfo {
    program: ts.Program;
    sourceFile: ts.SourceFile;
    typeNode: ts.TypeNode;
    supportedCommands: string[];
}

type ExportInfo = [ts.TypeNode, ts.Expression];

export function tryParseExportedCallExpression(callExpression: ts.Expression, functionName: string): ExportInfo {
    // ensure that the export statement is exporting the result of a function call to the specified function
    if (!ts.isCallExpression(callExpression)) {
        return undefined;
    }
    if (ts.isIdentifier(callExpression.expression)) {
        if (callExpression.expression.text !== functionName) {
            return undefined;
        }
    } else if (ts.isQualifiedName(callExpression.expression)) {
        if (callExpression.expression.right.text !== functionName) {
            return undefined;
        }
    } else if (ts.isPropertyAccessExpression(callExpression.expression)) {
        if (callExpression.expression.name.text !== functionName) {
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

    return [callExpression.typeArguments[0], callExpression.arguments[0]];
}

export function tryParseExport(program: ts.Program, sourceFile: ts.SourceFile, node: ts.Node, functionName: string): ExportInfo {
    // export default FUNCTION_NAME<TYPE>(ARGUMENT)
    // export something = FUNCTION_NAME<TYPE>(ARGUMENT)

    if (ts.isExportAssignment(node)) {
        if (node.isExportEquals) {
            // unexpected: export = something;
            return undefined;
        }
        return tryParseExportedCallExpression(node.expression, functionName);
    } else if (ts.isVariableStatement(node)) {
        // unexpected: unexported variable declaration
        const typeChecker = program.getTypeChecker();
        const exportSymbols = typeChecker.getExportsOfModule(typeChecker.getSymbolAtLocation(sourceFile));
        for (const varDecl of node.declarationList.declarations) {
            if (varDecl.initializer !== undefined) {
                const exportedSymbol = typeChecker.getSymbolAtLocation(varDecl.name);
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

export function tryParseExportNativeModule(program: ts.Program, sourceFile: ts.SourceFile, node: ts.Node): ExportNativeModuleInfo {
    return undefined;
}

export function tryParseExportComponent(program: ts.Program, sourceFile: ts.SourceFile, node: ts.Node): ExportComponentInfo {
    const pair = tryParseExport(program, sourceFile, node, 'codegenNativeComponent');
    if (pair === undefined) {
        return undefined;
    }

    const [typeNode, componentNameNode] = pair;
    if (!ts.isStringLiteral(componentNameNode)) {
        return undefined;
    }

    return {
        program,
        sourceFile,
        typeNode,
        name: componentNameNode.text
    };
}

export function tryParseExportCommand(program: ts.Program, sourceFile: ts.SourceFile, node: ts.Node): ExportCommandInfo {
    return undefined;
}