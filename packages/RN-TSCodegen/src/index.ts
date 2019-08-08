import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { processComponent } from './ComponentParser';
import * as ep from './ExportParser';
import { processNativeModule } from './NativeModuleParser';

export function typeScriptToCodeSchema(fileName: string): cs.SchemaType {
    const program = ts.createProgram([fileName], {});
    const errors = ts.getPreEmitDiagnostics(program).filter((value: ts.Diagnostic) => value.category === ts.DiagnosticCategory.Error);
    if (errors.length > 0) {
        throw new Error('Please ensure that the input TypeScript source file compiles.');
    }

    const nativeModuleInfos: ep.ExportNativeModuleInfo[] = [];
    const componentInfos: ep.ExportComponentInfo[] = [];
    const commandInfos: ep.ExportCommandInfo[] = [];
    program.getSourceFiles().forEach((sourceFile: ts.SourceFile) => {
        sourceFile.forEachChild((node: ts.Node) => {
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
        const result = {};
        result[info.name] = processNativeModule(info);
        return { modules: { Module: { nativeModules: result } } };
    } else {
        if (commandInfos.length > 1) {
            throw new Error('A TypeScript source file should not export more than one command list.');
        }

        const info = componentInfos[0];
        const result = {};
        result[info.name] = processComponent(info, commandInfos[0]);
        return { modules: { Module: { components: result } } };
    }
}
