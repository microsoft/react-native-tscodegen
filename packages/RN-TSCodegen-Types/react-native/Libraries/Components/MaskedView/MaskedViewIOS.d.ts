import $2 from "react";
import { ViewProps } from "../View/ViewPropTypes";
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & {
  children: $2.Node;

  /**
  * Should be a React element to be rendered and applied as the
  * mask for the child element.
  */
  maskElement: $2.Element<any>;
}>;
declare class MaskedViewIOS extends $2.Component<Props> {
  render(): $2.Node;
}
export default MaskedViewIOS;