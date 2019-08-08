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

export function tryParseExportNativeModule(program: ts.Program, sourceFile: ts.SourceFile, node: ts.Node): ExportNativeModuleInfo {
    return undefined;
}

export function tryParseExportComponent(program: ts.Program, sourceFile: ts.SourceFile, node: ts.Node): ExportComponentInfo {
    // find export default codegenNativeComponent<TYPE>('NAME');

    if (!ts.isExportAssignment(node) || node.isExportEquals) {
        return undefined;
    }
    if (!ts.isCallExpression(node.expression)) {
        return undefined;
    }

    const callExpression = node.expression;
    if (callExpression.typeArguments === undefined || callExpression.typeArguments.length !== 1) {
        return undefined;
    }
    if (!ts.isTypeNode(callExpression.typeArguments[0])) {
        return undefined;
    }
    if (callExpression.arguments.length === 0) {
        return undefined;
    }

    if (!ts.isIdentifier(callExpression.expression)) {
        return undefined;
    }
    if (callExpression.expression.text !== 'codegenNativeComponent') {
        return undefined;
    }

    const componentNameNode = callExpression.arguments[0];
    if (!ts.isStringLiteral(componentNameNode)) {
        return undefined;
    }

    return {
        program,
        sourceFile,
        typeNode: callExpression.typeArguments[0],
        name: componentNameNode.text
    };
}

export function tryParseExportCommand(program: ts.Program, sourceFile: ts.SourceFile, node: ts.Node): ExportCommandInfo {
    return undefined;
}