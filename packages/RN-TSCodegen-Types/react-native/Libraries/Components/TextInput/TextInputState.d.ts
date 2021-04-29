import $1 from "react";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
declare type ComponentRef = $1.ElementRef<HostComponent<{}>>;
declare function currentlyFocusedInput(): null | undefined | ComponentRef;
declare function currentlyFocusedField(): null | undefined | number;
declare function focusInput(textField?: null | undefined | ComponentRef): void;
declare function blurInput(textField?: null | undefined | ComponentRef): void;
declare function focusField(textFieldID?: null | undefined | number): void;
declare function blurField(textFieldID?: null | undefined | number): void;
declare function focusTextInput(textField?: null | undefined | ComponentRef): void;
declare function blurTextInput(textField?: null | undefined | ComponentRef): void;
declare function registerInput(textField: ComponentRef): void;
declare function unregisterInput(textField: ComponentRef): void;
declare function isTextInput(textField: ComponentRef): boolean;
export { currentlyFocusedInput, focusInput, blurInput, currentlyFocusedField, focusField, blurField, focusTextInput, blurTextInput, registerInput, unregisterInput, isTextInput };
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  currentlyFocusedInput: typeof currentlyFocusedInput;
  focusInput: typeof focusInput;
  blurInput: typeof blurInput;
  currentlyFocusedField: typeof currentlyFocusedField;
  focusField: typeof focusField;
  blurField: typeof blurField;
  focusTextInput: typeof focusTextInput;
  blurTextInput: typeof blurTextInput;
  registerInput: typeof registerInput;
  unregisterInput: typeof unregisterInput;
  isTextInput: typeof isTextInput;
};
export default $f2tExportDefault;