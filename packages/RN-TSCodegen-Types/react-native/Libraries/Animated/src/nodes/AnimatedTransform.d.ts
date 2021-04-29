import $2 from "./AnimatedWithChildren";
declare class AnimatedTransform extends $2 {
  constructor(transforms: ReadonlyArray<Object>);
  __makeNative(): void;
  __getValue(): ReadonlyArray<Object>;
  __getAnimatedValue(): ReadonlyArray<Object>;
  __attach(): void;
  __detach(): void;
  __getNativeConfig(): any;
}
export default AnimatedTransform;