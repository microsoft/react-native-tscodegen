import $2 from "./AnimatedNode";
import $3 from "./AnimatedWithChildren";
declare type ExtrapolateType = "extend" | "identity" | "clamp";
declare type InterpolationConfigType = {
  inputRange: ReadonlyArray<number>;
  outputRange: ReadonlyArray<number> | ReadonlyArray<string>;
  easing?: (input: number) => number;
  extrapolate?: ExtrapolateType;
  extrapolateLeft?: ExtrapolateType;
  extrapolateRight?: ExtrapolateType;
};
declare class AnimatedInterpolation extends $3 {
  static __createInterpolation(config: InterpolationConfigType): (input: number) => number | string;
  constructor(parent: $2, config: InterpolationConfigType);
  __makeNative(): void;
  __getValue(): number | string;
  interpolate(config: InterpolationConfigType): AnimatedInterpolation;
  __attach(): void;
  __detach(): void;
  __transformDataType(range: any[]): any[];
  __getNativeConfig(): any;
}
export type { InterpolationConfigType };
export default AnimatedInterpolation;