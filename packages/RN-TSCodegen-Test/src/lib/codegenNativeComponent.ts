// \react-native\Libraries\Utilities\codegenNativeComponent.js

type Options = Readonly<{
  interfaceOnly?: boolean;
  paperComponentName?: string;
  paperComponentNameDeprecated?: string;
  deprecatedViewConfigName?: string;
}>;

export type NativeComponent<T> = {};

export default function codegenNativeComponent<T>(componentName: string, optios?: Options): NativeComponent<T> {
  throw 'Not implemented';
};