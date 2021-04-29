import $1 from "../../EventEmitter/NativeEventEmitter";
declare var KeyboardEventEmitter: $1;
declare type KeyboardEventName = "keyboardWillShow" | "keyboardDidShow" | "keyboardWillHide" | "keyboardDidHide" | "keyboardWillChangeFrame" | "keyboardDidChangeFrame";
declare type KeyboardEventEasing = "easeIn" | "easeInEaseOut" | "easeOut" | "linear" | "keyboard";
declare type KeyboardEventCoordinates = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  screenX: number;
  screenY: number;
  width: number;
  height: number;
}>;
declare type KeyboardEvent = AndroidKeyboardEvent | IOSKeyboardEvent;
declare type BaseKeyboardEvent =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  duration: number;
  easing: KeyboardEventEasing;
  endCoordinates: KeyboardEventCoordinates;
};
declare type AndroidKeyboardEvent = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
BaseKeyboardEvent & {
  duration: 0;
  easing: "keyboard";
}>;
declare type IOSKeyboardEvent = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
BaseKeyboardEvent & {
  startCoordinates: KeyboardEventCoordinates;
  isEventFromThisApp: boolean;
}>;
export type { KeyboardEventName };
export type { KeyboardEventEasing };
export type { KeyboardEventCoordinates };
export type { KeyboardEvent };
export type { AndroidKeyboardEvent };
export type { IOSKeyboardEvent };
declare const $f2tExportDefault: typeof KeyboardEventEmitter;
export default $f2tExportDefault;