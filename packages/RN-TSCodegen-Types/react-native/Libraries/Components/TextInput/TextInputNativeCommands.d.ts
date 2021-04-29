// @flow
import * as React from "react";
import { Int32 } from "../../Types/CodegenTypes";
interface TextInputNativeCommands<T extends React.ForwardRefExoticComponent<any> | {
  new (props: any): React.Component<any>;
} | ((props: any, context?: any) => React.ReactElement | null) | keyof JSX.IntrinsicElements> {
  readonly focus: (viewRef: React.ElementRef<T>) => void;
  readonly blur: (viewRef: React.ElementRef<T>) => void;
  readonly setTextAndSelection: (viewRef: React.ElementRef<T>, mostRecentEventCount: Int32, value: null | undefined | string, start: Int32, end: Int32) => void;
}
declare var supportedCommands: (string | string | string)[];
export type { TextInputNativeCommands };
declare const $f2tExportDefault: typeof supportedCommands;
export default $f2tExportDefault;