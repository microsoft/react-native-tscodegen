// @flow
declare type ExtraData = {
  [key: string]: string;
};
declare type SourceCallback = () => string;
declare type DebugData = {
  extras: ExtraData;
  files: ExtraData;
};
declare class BugReporting {
  static addSource(key: string, callback: SourceCallback): {
    remove: () => void;
  };
  static addFileSource(key: string, callback: SourceCallback): {
    remove: () => void;
  };
  static collectExtraData(): DebugData;
}
export default BugReporting;