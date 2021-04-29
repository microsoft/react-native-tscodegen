import $1 from "../../Animated/src/AnimatedImplementation";
import $2 from "react";
import { LayoutEvent } from "../../Types/CoreEventTypes";
declare type Props = {
  children?: $2.Element<any>;
  nextHeaderLayoutY?: null | undefined | number;
  onLayout: (event: LayoutEvent) => void;
  scrollAnimatedValue: typeof $1.Value;
  // Will cause sticky headers to stick at the bottom of the ScrollView instead
  // of the top.
  inverted?: null | undefined | boolean;
  // The height of the parent ScrollView. Currently only set when inverted.
  scrollViewHeight?: null | undefined | number;
};
declare type State = {
  measured: boolean;
  layoutY: number;
  layoutHeight: number;
  nextHeaderLayoutY?: null | undefined | number;
};
declare class ScrollViewStickyHeader extends $2.Component<Props, State> {
  state: State;
  setNextHeaderY(y: number): void;
  render(): $2.Node;
}
export type { Props };
export default ScrollViewStickyHeader;