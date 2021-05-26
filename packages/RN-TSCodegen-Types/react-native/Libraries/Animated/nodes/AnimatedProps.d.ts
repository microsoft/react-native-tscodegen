import $1 from "./AnimatedNode";
declare class AnimatedProps extends $1 {
  constructor(props: Object, callback: () => void);
  __getValue(): Object;
  __getAnimatedValue(): Object;
  __attach(): void;
  __detach(): void;
  update(): void;
  __makeNative(): void;
  setNativeView(animatedView: any): void;
  __connectAnimatedView(): void;
  __disconnectAnimatedView(): void;
  __restoreDefaultValues(): void;
  __getNativeConfig(): Object;
}
export default AnimatedProps;