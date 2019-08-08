import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { tryParseComponent } from './ComponentParser';
import { tryParseNativeModule } from './NativeModuleParser';

export function typeScriptToCodeSchema(fileName: string): cs.SchemaType {
    const program = ts.createProgram([fileName], {});
    const errors = ts.getPreEmitDiagnostics(program).filter((value: ts.Diagnostic) => value.category === ts.DiagnosticCategory.Error);
    if (errors.length > 0) {
        throw new Error('Please ensure that the input TypeScript source file compiles.');
    }

    let component: { [name: string]: cs.ComponentShape };
    let nativeModule: { [name: string]: cs.NativeModuleShape };
    program.getSourceFiles().forEach((sourceFile: ts.SourceFile) => {
        sourceFile.forEachChild((node: ts.Node) => {
            const currentComponent = tryParseComponent(program, sourceFile, node);
            const currentNativeModule = tryParseNativeModule(program, sourceFile, node);

            if (currentComponent !== undefined || currentNativeModule !== undefined) {
                if (component !== undefined || nativeModule !== undefined) {
                    throw new Error('A TypeScript source file should only container either one component or one native module.');
                }
                component = currentComponent;
                nativeModule = currentNativeModule;
            }
        });
    });

    if (component !== undefined) {
        return {
            modules: { Module: { components: component } }
        };
    }

    if (nativeModule !== undefined) {
        return {
            modules: { Module: { nativeModules: nativeModule } }
        };
    }

    throw new Error('Cannot find any component or native module.');
}
