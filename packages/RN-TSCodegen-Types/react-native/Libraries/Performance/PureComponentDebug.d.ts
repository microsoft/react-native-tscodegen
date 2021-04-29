import $2 from "react";

/*[FLOW2DTS - Warning] This type alias was opaque in the original Flow source.*/
declare type DoNotCommitUsageOfPureComponentDebug = {};
declare class PureComponentDebug<P extends DoNotCommitUsageOfPureComponentDebug, S extends null | undefined | Object = undefined> extends $2.Component<P, S> {
  shouldComponentUpdate(nextProps: P, nextState: S): boolean;
}
export default PureComponentDebug;