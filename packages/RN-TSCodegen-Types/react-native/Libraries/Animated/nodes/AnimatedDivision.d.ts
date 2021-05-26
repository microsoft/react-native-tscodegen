import $2 from "./AnimatedInterpolation";
import $3 from "./AnimatedNode";
import $4 from "./AnimatedWithChildren";
import { InterpolationConfigType } from "./AnimatedInterpolation";
declare class AnimatedDivision extends $4 {
  constructor(a: $3 | number, b: $3 | number);
  __makeNative(): void;
  __getValue(): number;
  interpolate(config: InterpolationConfigType): $2;
  __attach(): void;
  __detach(): void;
  __getNativeConfig(): any;
}
export default AnimatedDivision;