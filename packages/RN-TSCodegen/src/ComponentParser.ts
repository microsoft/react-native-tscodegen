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

    mappedType.getProperties().forEach((propSymbol: ts.Symbol) => {
        if (propSymbol.declarations.length !== 1) {
            throw new Error(`Member ${propSymbol.name} in type ${info.typeNode.getText()} is expected to be a property.`);
        }
        const propDecl = propSymbol.declarations[0];
        if (!ts.isPropertySignature(propDecl)) {
            throw new Error(`Member ${propSymbol.name} in type ${info.typeNode.getText()} is expected to be a property.`);
        }
        if (propDecl.type === undefined) {
            throw new Error(`Member ${propSymbol.name} in type ${info.typeNode.getText()} is expected to be a property.`);
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
