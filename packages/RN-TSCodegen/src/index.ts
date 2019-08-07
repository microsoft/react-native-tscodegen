import * as ts from 'typescript';
import * as cs from './CodegenSchema';

export function typeScriptToCodeSchema(fileName: string): cs.SchemaType {
    const program = ts.createProgram([fileName], {});
    const errors = ts.getPreEmitDiagnostics(program).filter((value: ts.Diagnostic) => value.category === ts.DiagnosticCategory.Error);
    if (errors.length > 0) {
        throw new Error('Please ensure that the input TypeScript source file compiles.');
    }

    return {
        modules: {
        }
    };
}
