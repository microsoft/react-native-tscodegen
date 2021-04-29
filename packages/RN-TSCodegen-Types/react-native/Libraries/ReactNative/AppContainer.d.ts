import { React$PropType$Primitive } from "flow2dts-flow-types-polyfill";
import $2 from "react";
declare type Context = {
  rootTag: number;
};
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  children?: $2.Node;
  fabric?: boolean;
  rootTag: number;
  showArchitectureIndicator?: boolean;
  WrapperComponent?: null | undefined | $2.ComponentType<any>;
  internal_excludeLogBox?: null | undefined | boolean;
}>;
declare type State =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  inspector?: null | undefined | $2.Node;
  mainKey: number;
  hasError: boolean;
};
declare class AppContainer extends $2.Component<Props, State> {
  state: State;
  static getDerivedStateFromError: any;
  static childContextTypes: any |
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    rootTag: React$PropType$Primitive<number>;
  };
  getChildContext(): Context;
  componentDidMount(): void;
  componentWillUnmount(): void;
  render(): $2.Node;
}
export default AppContainer;