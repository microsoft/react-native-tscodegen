// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as cs from 'react-native-tscodegen';
import * as ts from 'typescript';
import { parseCommands } from './ComponentCommandParser';
import { checkEventType, parseEvent } from './ComponentEventParser';
import { parseProperty } from './ComponentPropertyParser';
import { ExportCommandInfo, ExportComponentInfo, getMembersFromType } from './ExportParser';
import { WritableObjectType } from './RNRawType';

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

export function processComponent(info: ExportComponentInfo, commandsInfo?: ExportCommandInfo): cs.ComponentSchema {
    const extendsProps: cs.ExtendsPropsShape[] = [];
    const events: cs.EventTypeShape[] = [];
    const props: cs.NamedShape<cs.PropTypeAnnotation>[] = [];
    let state: cs.NamedShape<cs.StateTypeAnnotation>[] | undefined;
    let commands: cs.NamedShape<cs.CommandTypeAnnotation>[] = [];

    commands = parseCommands(commandsInfo);

    const validMembers = getMembersFromType(info.typeNode, info.sourceFile);
    if (validMembers === undefined) {
        throw new Error(`Type ${info.typeNode.getText()} to define a component should be a interface type defined in the same source file.`);
    }

    for (const propDecl of validMembers) {
        if (propDecl.name !== undefined) {
            const propertyName = propDecl.name.getText();
            if (ts.isPropertySignature(propDecl) || ts.isPropertyDeclaration(propDecl)) {
                const eventInfo = checkEventType(<ts.TypeNode>propDecl.type, info, propDecl);
                if (eventInfo === undefined) {
                    props.push(parseProperty(info, propDecl));
                } else {
                    events.push(parseEvent(info, propDecl, eventInfo));
                }
            } else {
                throw new Error(`Member ${propertyName} in type ${info.typeNode.getText()} is expected to be a property.`);
            }
        }
    }

    if (importExists(info.sourceFile, 'ViewProps')) {
        extendsProps.push({ knownTypeName: 'ReactNativeCoreViewProps', type: 'ReactNativeBuiltInType' });
    }

    if (info.stateNode !== undefined) {
        state = [];
        for (const propDecl of info.stateNode.members) {
            if (propDecl.name !== undefined) {
                const propertyName = propDecl.name.getText();
                if (ts.isPropertySignature(propDecl) || ts.isPropertyDeclaration(propDecl)) {
                    const eventInfo = checkEventType(<ts.TypeNode>propDecl.type, info, propDecl);
                    if (eventInfo === undefined) {
                        state.push(parseProperty(info, propDecl));
                        continue;
                    }
                }
                throw new Error(`Member ${propertyName} in type ${info.stateNode.name.getText()} is expected to be a state property.`);
            }
        }
    }

    const shape: cs.ComponentShape = {
        extendsProps,
        events,
        props,
        state,
        commands
    };

    if (state === undefined) {
        delete (<WritableObjectType<cs.ComponentShape>>shape).state;
    }

    Object.getOwnPropertyNames(info.options).forEach((key: string) => {
        shape[key] = info.options[key];
    });

    return { type: 'Component', components: { [info.name]: shape } };
}
