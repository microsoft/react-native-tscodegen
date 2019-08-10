import * as cs from './CodegenSchema';
import { ExportNativeModuleInfo } from './ExportParser';
import { typeToRNRawType } from './TypeChecker';

export function processNativeModule(info: ExportNativeModuleInfo): cs.NativeModuleShape {
    typeToRNRawType(info.program.getTypeChecker().getTypeFromTypeNode(info.typeNode), info.program.getTypeChecker(), true);
    return {
        properties: []
    };
}
