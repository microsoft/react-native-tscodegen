import $2 from "./AnimatedWithChildren";
declare class AnimatedStyle extends $2 {
  constructor(style: any);
  __getValue(): Object;
  __getAnimatedValue(): Object;
  __attach(): void;
  __detach(): void;
  __makeNative(): void;
  __getNativeConfig(): Object;
}
export default AnimatedStyle;