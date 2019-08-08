import * as cs from './CodegenSchema';
import { ExportCommandInfo, ExportComponentInfo } from './ExportParser';

/*
function parseComponent(program: ts.Program, sourceFile: ts.SourceFile, componentTypeNode: ts.TypeNode): cs.ComponentShape {
    const componentShape: cs.ComponentShape = {
        extendsProps: [{ knownTypeName: 'ReactNativeCoreViewProps', type: 'ReactNativeBuiltInType' }],
        events: [],
        props: [],
        commands: []
    };

    const typeChecker = program.getTypeChecker();
    const interfaceType = typeChecker.getTypeFromTypeNode(componentTypeNode);
    if (interfaceType.flags !== ts.TypeFlags.Object) {
        throw new Error(`${componentTypeNode.getText(sourceFile)} is expected to be an interface type.`);
    }

    console.log(ts.SymbolFlags[interfaceType.symbol.flags]);
    console.log(ts.SyntaxKind[interfaceType.symbol.declarations[0].kind]);

    return componentShape;
}
*/

export function processComponent(info: ExportComponentInfo, commandsInfo: ExportCommandInfo | undefined): cs.ComponentShape {
    const componentShape: cs.ComponentShape = {
        extendsProps: [{ knownTypeName: 'ReactNativeCoreViewProps', type: 'ReactNativeBuiltInType' }],
        events: [],
        props: [],
        commands: []
    };
    if (commandsInfo !== undefined) {
        // do nothing;
    }
    return componentShape;
}
