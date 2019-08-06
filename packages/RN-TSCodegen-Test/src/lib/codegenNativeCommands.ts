// \react-native\Libraries\Utilities\codegenNativeCommands.js

type Options<T = string> = Readonly<{
  supportedCommands: ReadonlyArray<T>;
}>;

export = function codegenNativeCommands<T extends {}>(options?: Options<keyof T>): T {
  throw 'Not implemented';
}