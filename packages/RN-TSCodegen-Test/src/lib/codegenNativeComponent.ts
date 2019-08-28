// \react-native\Libraries\Utilities\codegenNativeComponent.js

type Options = Readonly<{
  interfaceOnly?: boolean;
  paperComponentName?: string;
  paperComponentNameDeprecated?: string;
  deprecatedViewConfigName?: string;
}>;

export type NativeComponent<T> = {};
export type NativeComponentType<T> = NativeComponent<T>;

export default function codegenNativeComponent<T>(componentName: string, optios?: Options): {} {
  throw 'Not implemented';
};