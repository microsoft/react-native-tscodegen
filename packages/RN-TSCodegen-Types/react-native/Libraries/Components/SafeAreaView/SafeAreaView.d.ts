import $1 from "react";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & {
  emulateUnlessSupported?: boolean;
}>;
declare var exported: $1.AbstractComponent<Props, $1.ElementRef<HostComponent<{}>>>;
declare const $f2tExportDefault: typeof exported;
export default $f2tExportDefault;