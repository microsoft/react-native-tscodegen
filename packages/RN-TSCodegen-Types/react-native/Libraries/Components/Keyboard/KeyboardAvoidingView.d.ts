import $2 from "react";
import { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { ViewProps } from "../View/ViewPropTypes";
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & {
  /**
  * Specify how to react to the presence of the keyboard.
  */
  behavior?: null | undefined | ("height" | "position" | "padding");

  /**
  * Style of the content container when `behavior` is 'position'.
  */
  contentContainerStyle?: null | undefined | ViewStyleProp;

  /**
  * Controls whether this `KeyboardAvoidingView` instance should take effect.
  * This is useful when more than one is on the screen. Defaults to true.
  */
  enabled?: null | undefined | boolean;

  /**
  * Distance between the top of the user screen and the React Native view. This
  * may be non-zero in some cases. Defaults to 0.
  */
  keyboardVerticalOffset: number;
}>;
declare type State =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  bottom: number;
};
declare class KeyboardAvoidingView extends $2.Component<Props, State> {
  static defaultProps:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    enabled: boolean;
    keyboardVerticalOffset: number;
  };
  viewRef: {
    current: $2.ElementRef<any> | null;
  };
  constructor(props: Props);
  componentDidMount(): void;
  componentWillUnmount(): void;
  render(): $2.Node;
}
export default KeyboardAvoidingView;