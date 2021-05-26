import $2 from "react";
import { ViewProps } from "../Components/View/ViewPropTypes";
import { RootTag } from "../ReactNative/RootTag";
import { DirectEventHandler } from "../Types/CodegenTypes";
declare type OrientationChangeEvent = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  orientation: "portrait" | "landscape";
}>;
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & {
  /**
  * The `animationType` prop controls how the modal animates.
  *
  * See https://reactnative.dev/docs/modal.html#animationtype
  */
  animationType?: null | undefined | ("none" | "slide" | "fade");

  /**
  * The `presentationStyle` prop controls how the modal appears.
  *
  * See https://reactnative.dev/docs/modal.html#presentationstyle
  */
  presentationStyle?: null | undefined | ("fullScreen" | "pageSheet" | "formSheet" | "overFullScreen");

  /**
  * The `transparent` prop determines whether your modal will fill the
  * entire view.
  *
  * See https://reactnative.dev/docs/modal.html#transparent
  */
  transparent?: null | undefined | boolean;

  /**
  * The `statusBarTranslucent` prop determines whether your modal should go under
  * the system statusbar.
  *
  * See https://reactnative.dev/docs/modal.html#transparent
  */
  statusBarTranslucent?: null | undefined | boolean;

  /**
  * The `hardwareAccelerated` prop controls whether to force hardware
  * acceleration for the underlying window.
  *
  * This prop works only on Android.
  *
  * See https://reactnative.dev/docs/modal.html#hardwareaccelerated
  */
  hardwareAccelerated?: null | undefined | boolean;

  /**
  * The `visible` prop determines whether your modal is visible.
  *
  * See https://reactnative.dev/docs/modal.html#visible
  */
  visible?: null | undefined | boolean;

  /**
  * The `onRequestClose` callback is called when the user taps the hardware
  * back button on Android or the menu button on Apple TV.
  *
  * This is required on Apple TV and Android.
  *
  * See https://reactnative.dev/docs/modal.html#onrequestclose
  */
  onRequestClose?: null | undefined | DirectEventHandler<null>;

  /**
  * The `onShow` prop allows passing a function that will be called once the
  * modal has been shown.
  *
  * See https://reactnative.dev/docs/modal.html#onshow
  */
  onShow?: null | undefined | DirectEventHandler<null>;

  /**
  * The `onDismiss` prop allows passing a function that will be called once
  * the modal has been dismissed.
  *
  * See https://reactnative.dev/docs/modal.html#ondismiss
  */
  onDismiss?: null | undefined | (() => unknown);

  /**
  * The `supportedOrientations` prop allows the modal to be rotated to any of the specified orientations.
  *
  * See https://reactnative.dev/docs/modal.html#supportedorientations
  */
  supportedOrientations?: null | undefined | ReadonlyArray<"portrait" | "portrait-upside-down" | "landscape" | "landscape-left" | "landscape-right">;

  /**
  * The `onOrientationChange` callback is called when the orientation changes while the modal is being displayed.
  *
  * See https://reactnative.dev/docs/modal.html#onorientationchange
  */
  onOrientationChange?: null | undefined | DirectEventHandler<OrientationChangeEvent>;
}>;
declare class Modal extends $2.Component<Props> {
  static defaultProps:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    hardwareAccelerated: boolean;
    visible: boolean;
  };
  static contextType: $2.Context<RootTag>;
  constructor(props: Props);
  componentDidMount(): void;
  componentWillUnmount(): void;
  UNSAFE_componentWillReceiveProps(nextProps: Props): void;
  render(): $2.Node;
}
export type { Props };
export default Modal;