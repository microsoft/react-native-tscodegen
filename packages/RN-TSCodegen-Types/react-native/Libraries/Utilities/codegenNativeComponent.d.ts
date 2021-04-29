// @flow
import { HostComponent } from "../../Libraries/Renderer/shims/ReactNativeTypes";
declare type Options = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  interfaceOnly?: boolean;
  paperComponentName?: string;
  paperComponentNameDeprecated?: string;
  excludedPlatform?: "iOS" | "android";
}>;
declare type NativeComponentType<T> = HostComponent<T>;
declare function codegenNativeComponent<Props>(componentName: string, options?: Options): NativeComponentType<Props>;
export type { NativeComponentType };
declare const $f2tExportDefault: typeof codegenNativeComponent;
export default $f2tExportDefault;