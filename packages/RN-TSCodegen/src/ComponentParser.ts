// import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { parseCommands } from './ComponentCommandParser';
import { ExportCommandInfo, ExportComponentInfo } from './ExportParser';

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
