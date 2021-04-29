import $1 from "./AnimatedInterpolation";
import $2 from "./AnimatedNode";
import $4 from "./AnimatedWithChildren";
import { InterpolationConfigType } from "./AnimatedInterpolation";
declare class AnimatedSubtraction extends $4 {
  constructor(a: $2 | number, b: $2 | number);
  __makeNative(): void;
  __getValue(): number;
  interpolate(config: InterpolationConfigType): $1;
  __attach(): void;
  __detach(): void;
  __getNativeConfig(): any;
}
export default AnimatedSubtraction;