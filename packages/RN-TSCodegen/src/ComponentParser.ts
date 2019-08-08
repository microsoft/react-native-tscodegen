import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportCommandInfo, ExportComponentInfo } from './ExportParser';

function parseCommands(info: ExportCommandInfo): cs.CommandTypeShape[] {
    const typeChecker = info.program.getTypeChecker();
    const mappedType = typeChecker.getTypeFromTypeNode(info.typeNode);
    if (mappedType.flags !== ts.TypeFlags.Object || mappedType.symbol.members === undefined) {
        throw new Error(`${info.typeNode.getText()} is expected to be an interface type.`);
    }

    const commands: cs.CommandTypeShape[] = [];
    for (const commandName of info.supportedCommands) {
        const methodSymbol = mappedType.symbol.members.get(<ts.__String>commandName);
        if (methodSymbol === undefined) {
            throw new Error(`Unable to find command ${commandName} in type ${info.typeNode.getText()}.`);
        }
        if (methodSymbol.declarations.length !== 1 || !ts.isFunctionDeclaration(methodSymbol.declarations[0])) {
            throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should be a function.`);
        }

        const funcDecl = <ts.FunctionDeclaration>methodSymbol.declarations[0];
        if (funcDecl.type === undefined || funcDecl.type.kind !== ts.SyntaxKind.VoidKeyword) {
            throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should return void.`);
        }
        if (funcDecl.typeParameters !== undefined && funcDecl.typeParameters.length !== 0) {
            throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should not be generic.`);
        }
        if (funcDecl.parameters.length === 0) {
            throw new Error(`Command ${commandName} in type ${info.typeNode.getText()} should have at least one parameter.`);
        }

        const viewRefType = funcDecl.parameters[0].type;
        if (!ts.isTypeReferenceNode(viewRefType) || (
            viewRefType.typeName.getText() !== 'React.Ref' &&
            viewRefType.typeArguments !== undefined &&
            viewRefType.typeArguments.length === 1 &&
            ts.isStringLiteral(viewRefType.typeArguments[0])
        )) {
            throw new Error(`The first parameter in command ${commandName} in type ${info.typeNode.getText()} should be React.Ref<'NAME'>.`);
        }
    }
    return commands;
}

export function processComponent(info: ExportComponentInfo, commandsInfo: ExportCommandInfo | undefined): cs.ComponentShape {
    const events: cs.EventTypeShape[] = [];
    const props: cs.PropTypeShape[] = [];
    let commands: cs.CommandTypeShape[] = [];
    if (commandsInfo !== undefined) {
        commands = parseCommands(commandsInfo);
    }

    return {
        extendsProps: [{ knownTypeName: 'ReactNativeCoreViewProps', type: 'ReactNativeBuiltInType' }],
        events,
        props,
        commands
    };
}
