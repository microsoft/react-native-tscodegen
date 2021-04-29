import { Stringish } from "flow2dts-flow-types-polyfill";
import $2 from "react";
import { TextStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ProcessedColorValue } from "../../StyleSheet/processColor";
import { SyntheticEvent } from "../../Types/CoreEventTypes";
import { ViewProps } from "../View/ViewPropTypes";
declare type PickerIOSChangeEvent = SyntheticEvent<Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  newValue: number | string;
  newIndex: number;
}>>;
declare type RCTPickerIOSItemType = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  label?: null | undefined | Label;
  value?: null | undefined | (number | string);
  textColor?: null | undefined | ProcessedColorValue;
}>;
declare type Label = Stringish | number;
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & {
  children: $2.ChildrenArray<$2.Element<typeof PickerIOSItem>>;
  itemStyle?: null | undefined | TextStyleProp;
  onChange?: null | undefined | ((event: PickerIOSChangeEvent) => unknown);
  onValueChange?: null | undefined | ((itemValue: string | number, itemIndex: number) => unknown);
  selectedValue?: null | undefined | (number | string);
  accessibilityLabel?: null | undefined | string;
}>;
declare type State =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  selectedIndex: number;
  items: ReadonlyArray<RCTPickerIOSItemType>;
};
declare type ItemProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  label?: null | undefined | Label;
  value?: null | undefined | (number | string);
  color?: null | undefined | ColorValue;
}>;
declare var PickerIOSItem: (props: ItemProps) => null;
declare class PickerIOS extends $2.Component<Props, State> {
  state: State;
  static Item(props: ItemProps): null;
  static getDerivedStateFromProps(props: Props): State;
  render(): $2.Node;
  componentDidUpdate(): void;
}
export default PickerIOS;