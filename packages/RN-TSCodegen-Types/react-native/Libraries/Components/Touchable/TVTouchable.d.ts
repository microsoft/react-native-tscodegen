// @flow
import { BlurEvent } from "../../Types/CoreEventTypes";
import { FocusEvent } from "../../Types/CoreEventTypes";
import { PressEvent } from "../../Types/CoreEventTypes";
declare type TVTouchableConfig = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  getDisabled: () => boolean;
  onBlur: (event: BlurEvent) => unknown;
  onFocus: (event: FocusEvent) => unknown;
  onPress: (event: PressEvent) => unknown;
}>;
declare class TVTouchable {
  constructor(component: any, config: TVTouchableConfig);
  destroy(): void;
}
export { TVTouchable as default };