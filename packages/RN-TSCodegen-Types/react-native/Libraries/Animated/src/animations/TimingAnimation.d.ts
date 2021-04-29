import $2 from "../nodes/AnimatedValue";
import $3 from "../nodes/AnimatedValueXY";
import $1 from "../nodes/AnimatedInterpolation";
import $4 from "./Animation";
import { AnimationConfig } from "./Animation";
import { EndCallback } from "./Animation";
declare type TimingAnimationConfig = AnimationConfig & {
  toValue: number | $2 | {
    x: number;
    y: number;
  } | $3 | $1;
  easing?: (value: number) => number;
  duration?: number;
  delay?: number;
};
declare type TimingAnimationConfigSingle = AnimationConfig & {
  toValue: number | $2 | $1;
  easing?: (value: number) => number;
  duration?: number;
  delay?: number;
};
declare class TimingAnimation extends $4 {
  constructor(config: TimingAnimationConfigSingle);
  __getNativeAnimationConfig(): any;
  start(fromValue: number, onUpdate: (value: number) => void, onEnd: null | undefined | EndCallback, previousAnimation: null | undefined | $4, animatedValue: $2): void;
  onUpdate(): void;
  stop(): void;
}
export type { TimingAnimationConfig };
export type { TimingAnimationConfigSingle };
export default TimingAnimation;