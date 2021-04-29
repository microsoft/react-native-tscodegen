import { $FlowFixMe } from "flow2dts-flow-types-polyfill";
import $1 from "../DeprecatedPropTypes/DeprecatedImageStylePropTypes";
import $2 from "../DeprecatedPropTypes/DeprecatedTextStylePropTypes";
import $3 from "../DeprecatedPropTypes/DeprecatedViewStylePropTypes";
import $4 from "invariant";
declare var ReactPropTypesSecret: string;
declare class StyleSheetValidation {
  static validateStyleProp(prop: string, style: Object, caller: string): void;
  static validateStyle(name: string, styles: Object): void;
  static addValidStylePropTypes(stylePropTypes: $FlowFixMe): void;
}
declare var styleError: (message1: $FlowFixMe, style: $FlowFixMe, caller?: $FlowFixMe, message2?: $FlowFixMe) => void;
declare var allStylePropTypes: $FlowFixMe;
export default StyleSheetValidation;