import * as ts from 'typescript';
import * as cs from './CodegenSchema';

function parseComponent(program: ts.Program, sourceFile: ts.SourceFile, componentTypeNode: ts.Node): cs.ComponentShape {
    return {
        extendsProps: [{ knownTypeName: 'ReactNativeCoreViewProps', type: 'ReactNativeBuiltInType' }],
        events: [],
        props: [],
        commands: []
    };
}

export function tryParseComponent(program: ts.Program, sourceFile: ts.SourceFile, node: ts.Node): { [name: string]: cs.ComponentShape } {
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

    // process the component using the first type argument
    const result = {};
    result[componentNameNode.text] = parseComponent(program, sourceFile, callExpression.typeArguments[0]);
    return result;
}
