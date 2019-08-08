import * as ts from 'typescript';
import * as cs from './CodegenSchema';

export function tryParseNativeModule(program: ts.Program, sourceFile: ts.SourceFile, node: ts.Node): { [name: string]: cs.NativeModuleShape } {
    return undefined;
}
