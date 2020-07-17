// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { parseCommands } from './ComponentCommandParser';
import { tryParseEvent } from './ComponentEventParser';
import { parseProperty } from './ComponentPropertyParser';
import { ExportCommandInfo, ExportComponentInfo, getMembersFromType } from './ExportParser';

function importExists(sourceFile: ts.SourceFile, name: string): boolean {
    const result = sourceFile.forEachChild((importNode: ts.Node) => {
        if (ts.isImportDeclaration(importNode)) {
            if (importNode.importClause !== undefined) {
                if (importNode.importClause.name !== undefined) {
                    if (importNode.importClause.name.getText() === name) {
                        return true;
                    }
                }
                if (importNode.importClause.namedBindings !== undefined && ts.isNamedImports(importNode.importClause.namedBindings)) {
                    for (const specifier of importNode.importClause.namedBindings.elements) {
                        if (specifier.name.getText() === name) {
                            return true;
                        }
                    }
                }
            }
            return undefined;
        }
    });
    return result === undefined ? false : result;
}

export function processComponent(info: ExportComponentInfo, commandsInfo: ExportCommandInfo | undefined): cs.ComponentShape {
    const events: cs.EventTypeShape[] = [];
    const props: cs.PropTypeShape[] = [];
    let commands: cs.CommandTypeShape[] = [];

    if (commandsInfo !== undefined) {
        commands = parseCommands(commandsInfo);
    }

    const validMembers = getMembersFromType(info.typeNode, info.sourceFile);
    if (validMembers === undefined) {
        throw new Error(`Type ${info.typeNode.getText()} to define a component should be a interface type defined in the same source file.`);
    }

    for (const propDecl of validMembers) {
        if (propDecl.name !== undefined) {
            const propertyName = propDecl.name.getText();
            if (ts.isPropertySignature(propDecl)) {
                try {
                    const eventShape = tryParseEvent(info, propDecl);
                    if (eventShape !== undefined) {
                        events.push(eventShape);
                    } else {
                        props.push(parseProperty(info, propDecl));
                    }
                } catch (err) {
                    if (err instanceof Error) {
                        err.message = `${propertyName}: ${err.message}`;
                    } else {
                        throw err;
                    }
                }
            } else {
                throw new Error(`Member ${propertyName} in type ${info.typeNode.getText()} is expected to be a property.`);
            }
        }
    }

    const result = {
        extendsProps: <cs.ExtendsPropsShape[]>[],
        events,
        props,
        commands
    };

    if (importExists(info.sourceFile, 'ViewProps')) {
        result.extendsProps.push({ knownTypeName: 'ReactNativeCoreViewProps', type: 'ReactNativeBuiltInType' });
    }
    Object.getOwnPropertyNames(info.options).forEach((key: string) => {
        result[key] = info.options[key];
    });

    return <cs.ComponentShape>result;
}
