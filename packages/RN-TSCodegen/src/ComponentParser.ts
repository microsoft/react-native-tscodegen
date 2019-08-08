import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { parseCommands } from './ComponentCommandParser';
import { tryParseEvent } from './ComponentEventParser';
import { parseProperty } from './ComponentPropertyParser';
import { ExportCommandInfo, ExportComponentInfo } from './ExportParser';

export function processComponent(info: ExportComponentInfo, commandsInfo: ExportCommandInfo | undefined): cs.ComponentShape {
    const events: cs.EventTypeShape[] = [];
    const props: cs.PropTypeShape[] = [];
    let commands: cs.CommandTypeShape[] = [];

    if (commandsInfo !== undefined) {
        commands = parseCommands(commandsInfo);
    }

    const typeChecker = info.program.getTypeChecker();
    const mappedType = typeChecker.getTypeFromTypeNode(info.typeNode);
    if (mappedType.symbol.members === undefined) {
        throw new Error(`${info.typeNode.getText()} is expected to be an interface type.`);
    }

    mappedType.symbol.members.forEach((propSymbol: ts.Symbol) => {
        if (propSymbol.declarations.length !== 1 || !ts.isPropertyDeclaration(propSymbol.declarations[0])) {
            throw new Error(`Member ${propSymbol.name} in type ${info.typeNode.getText()} should not be generic.`);
        }
        const propDecl = <ts.PropertyDeclaration>propSymbol.declarations[0];
        if (propDecl.type === undefined) {
            throw new Error(`Member ${propSymbol.name} in type ${info.typeNode.getText()} is not a property or an event.`);
        }

        const eventShape = tryParseEvent(info, propDecl);
        if (eventShape !== undefined) {
            events.push(eventShape);
        } else {
            props.push(parseProperty(info, propDecl));
        }
    });

    return {
        extendsProps: [{ knownTypeName: 'ReactNativeCoreViewProps', type: 'ReactNativeBuiltInType' }],
        events,
        props,
        commands
    };
}
