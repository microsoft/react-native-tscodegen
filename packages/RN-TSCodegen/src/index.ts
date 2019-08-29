// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as path from 'path';
import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { processComponent } from './ComponentParser';
import * as ep from './ExportParser';
import { processNativeModule } from './NativeModuleParser';
import { WritableObjectType } from './TypeChecker';

export function typeScriptToCodeSchema(fileName: string, moduleName: string, targetName?: string): cs.SchemaType {
    const program = ts.createProgram([fileName], {});
    const errors = ts.getPreEmitDiagnostics(program).filter((value: ts.Diagnostic) => value.category === ts.DiagnosticCategory.Error);
    if (errors.length > 0) {
        throw new Error('Please ensure that the input TypeScript source file compiles.');
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

        const info = nativeModuleInfos[0];
        const result: WritableObjectType<cs.SchemaType> = { modules: {} };
        result.modules[moduleName] = { nativeModules: {} };
        (<{}>result.modules[moduleName].nativeModules)[targetName === undefined ? info.name : targetName] = <WritableObjectType<cs.NativeModuleShape>>processNativeModule(info);
        return result;
    } else {
        if (commandInfos.length > 1) {
            throw new Error('A TypeScript source file should not export more than one command list.');
        }

        const info = componentInfos[0];
        const result: WritableObjectType<cs.SchemaType> = { modules: {} };
        result.modules[moduleName] = { components: {} };
        (<{}>result.modules[moduleName].components)[targetName === undefined ? info.name : targetName] = <WritableObjectType<cs.ComponentShape>>processComponent(info, commandInfos[0]);
        return result;
    }
}
