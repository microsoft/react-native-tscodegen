// @flow
import * as React from "react";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { SyntheticEvent } from "../../Types/CoreEventTypes";
import { ViewProps } from "../View/ViewPropTypes";
declare type SwitchChangeEvent = SyntheticEvent<Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  value: boolean;
}>>;
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & {
  /**
  * Whether the switch is disabled. Defaults to false.
  */
  disabled?: null | undefined | boolean;

  /**
  * Boolean value of the switch. Defaults to false.
  */
  value?: null | undefined | boolean;

  /**
  * Custom color for the switch thumb.
  */
  thumbColor?: null | undefined | ColorValue;

  /**
  * Custom colors for the switch track.
  *
  * NOTE: On iOS when the switch value is false, the track shrinks into the
  * border. If you want to change the color of the background exposed by the
  * shrunken track, use `ios_backgroundColor`.
  */
  trackColor?: null | undefined | Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    false?: null | undefined | ColorValue;
    true?: null | undefined | ColorValue;
  }>;

  /**
  * On iOS, custom color for the background. This background color can be seen
  * either when the switch value is false or when the switch is disabled (and
  * the switch is translucent).
  */
  ios_backgroundColor?: null | undefined | ColorValue;

  /**
  * Called when the user tries to change the value of the switch.
  *
  * Receives the change event as an argument. If you want to only receive the
  * new value, use `onValueChange` instead.
  */
  onChange?: null | undefined | ((event: SwitchChangeEvent) => Promise<void> | void);

  /**
  * Called when the user tries to change the value of the switch.
  *
  * Receives the new value as an argument. If you want to instead receive an
  * event, use `onChange`.
  */
  onValueChange?: null | undefined | ((value: boolean) => Promise<void> | void);
}>;
declare class Switch extends React.Component<Props> {
  render(): React.Node;
  componentDidUpdate(): void;
}
export type { Props };
export default Switch;