import { React$PropType$Primitive } from "flow2dts-flow-types-polyfill";
// @flow
import * as React from "react";
declare type Context = {
  rootTag: number;
};
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  children?: React.Node;
  fabric?: boolean;
  rootTag: number;
  initialProps?: {};
  showArchitectureIndicator?: boolean;
  WrapperComponent?: null | undefined | React.ComponentType<any>;
  internal_excludeLogBox?: null | undefined | boolean;
}>;
declare type State =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  inspector?: null | undefined | React.Node;
  mainKey: number;
  hasError: boolean;
};
declare class AppContainer extends React.Component<Props, State> {
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
  render(): React.Node;
}
export default AppContainer;