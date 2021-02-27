// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as path from 'path';
import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { processComponent } from './ComponentParser';
import * as ep from './ExportParser';
import { NativeModuleAliases, processNativeModule } from './NativeModuleParser';
import { WritableObjectType } from './RNRawType';
import { typeToRNRawType } from './TypeChecker';

function messageChainToString(chain: ts.DiagnosticMessageChain, indent: string): string {
    let message = '';
    message += `${indent}${chain.messageText}`;
    if (chain.next !== undefined) {
        message += ` {`;
        const newIndent = `${indent}  `;
        for (const subChain of chain.next) {
            message += `\r\n${messageChainToString(subChain, newIndent)}`;
        }
        message += `${indent}\r\n}`;
    }
    return message;
}

function errorToString(error: ts.Diagnostic): string {
    let message = `${ts.DiagnosticCategory[error.category]}:`;
    if (error.source !== undefined) {
        message += `\r\n    source  : ${error.source}`;
    }
    if (error.file !== undefined) {
        message += `\r\n    file    : ${error.file.fileName}`;
    }
    if (typeof error.messageText === 'string') {
        message += `\r\n    message : ${error.messageText}`;
    } else {
        message += `\r\n    message {`;
        message += `\r\n${messageChainToString(error.messageText, '  ')}`;
        message += `\r\n}`;
    }
    return message;
}

export function typeScriptToCodeSchema(fileName: string, moduleName: string, targetName?: string): cs.SchemaType {
    const program = ts.createProgram(
        [fileName],
        {
            strictNullChecks: true,
            skipLibCheck: true
        });
    const errors = ts.getPreEmitDiagnostics(program).filter((value: ts.Diagnostic) => value.category === ts.DiagnosticCategory.Error);
    if (errors.length > 0) {
        let errorMessage = 'Please ensure that the input TypeScript source file compiles.';
        for (const error of errors) {
            errorMessage += `\r\n${errorToString(error)}`;
        }
        throw new Error(errorMessage);
    }

    const nativeModuleInfos: ep.ExportNativeModuleInfo[] = [];
    const componentInfos: ep.ExportComponentInfo[] = [];
    const commandInfos: ep.ExportCommandInfo[] = [];
    program.getSourceFiles().forEach((sourceFile: ts.SourceFile) => {
        if (path.basename(fileName) === path.basename(sourceFile.fileName)) {
            sourceFile.statements.forEach((node: ts.Node) => {
                const currentNativeModuleInfo = ep.tryParseExportNativeModule(program, sourceFile, node);
                const currentComponentInfo = ep.tryParseExportComponent(program, sourceFile, node);
                const currentCommandInfo = ep.tryParseExportCommand(program, sourceFile, node);

                if (currentNativeModuleInfo !== undefined) {
                    nativeModuleInfos.push(currentNativeModuleInfo);
                }
                if (currentComponentInfo !== undefined) {
                    componentInfos.push(currentComponentInfo);
                }
                if (currentCommandInfo !== undefined) {
                    commandInfos.push(currentCommandInfo);
                }
            });
        }
    });

    if (nativeModuleInfos.length + componentInfos.length === 0) {
        throw new Error('Cannot find any component or native module.');
    }
    if (nativeModuleInfos.length + componentInfos.length > 1) {
        throw new Error('A TypeScript source file should only container either one component or one native module.');
    }

    if (nativeModuleInfos.length === 1) {
        if (commandInfos.length > 0) {
            throw new Error('Command list should not be exported in a TypeScript source file that exports a native module.');
        }

        // find out all type aliases in this file
        const aliases: NativeModuleAliases = { aliases: {} };
        const knownAliases: string[] = [];
        program.getSourceFiles().forEach((sourceFile: ts.SourceFile) => {
            if (path.basename(fileName) === path.basename(sourceFile.fileName)) {
                sourceFile.statements.forEach((node: ts.Node) => {
                    if (ts.isTypeAliasDeclaration(node)) {
                        if (node.typeParameters === undefined || node.typeParameters.length === 0) {
                            const rnRawType = typeToRNRawType(node.type, sourceFile, { allowObject: true, knownAliases });
                            if (rnRawType.kind === 'Object') {
                                const aliasName = node.name.text;
                                aliases.aliases[aliasName] = rnRawType;
                                knownAliases.push(aliasName);
                            }
                        }
                    }
                });
            }
        });

        const info = nativeModuleInfos[0];
        const result: WritableObjectType<cs.SchemaType> = { modules: {} };
        result.modules[moduleName] = <WritableObjectType<cs.NativeModuleSchema>>processNativeModule(info, aliases);
        return result;
    } else {
        if (commandInfos.length > 1) {
            throw new Error('A TypeScript source file should not export more than one command list.');
        }

        const info = componentInfos[0];
        const result: WritableObjectType<cs.SchemaType> = { modules: {} };
        result.modules[info.name] = <WritableObjectType<cs.ComponentSchema>>processComponent(info, commandInfos[0]);
        return result;
    }
}

export * from './CodegenSchema';

import * as rncodegen from './ExportRNCodegen';

export namespace generator {
    export import generate = rncodegen.generate;
    export import Config = rncodegen.Config;
    export import Generators = rncodegen.Generators;
    export import Options = rncodegen.Options;
}
