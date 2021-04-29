// @flow
import { ReactNativeBaseComponentViewConfig } from "../Renderer/shims/ReactNativeTypes";
declare function verifyComponentAttributeEquivalence(componentName: string, config: ReactNativeBaseComponentViewConfig): void;
declare function lefthandObjectDiff(leftObj: Object, rightObj: Object): Object;
declare function getConfigWithoutViewProps(viewConfig: ReactNativeBaseComponentViewConfig, propName: string): {};
declare function stringifyViewConfig(viewConfig: any): string;
export { lefthandObjectDiff };
export { getConfigWithoutViewProps };
export { stringifyViewConfig };
declare const $f2tExportDefault: typeof verifyComponentAttributeEquivalence;
export default $f2tExportDefault;