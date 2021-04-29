// @flow
import AnimatedValue from "../nodes/AnimatedValue";
declare type EndResult = {
  finished: boolean;
};
declare type EndCallback = (result: EndResult) => void;
declare type AnimationConfig = {
  isInteraction?: boolean;
  useNativeDriver: boolean;
  onComplete?: null | undefined | EndCallback;
  iterations?: number;
};
declare class Animation {
  __active: boolean;
  __isInteraction: boolean;
  __nativeId: number;
  __onEnd?: null | undefined | EndCallback;
  __iterations: number;
  start(fromValue: number, onUpdate: (value: number) => void, onEnd: null | undefined | EndCallback, previousAnimation: null | undefined | Animation, animatedValue: AnimatedValue): void;
  stop(): void;
  __getNativeAnimationConfig(): any;
  // Helper function for subclasses to make sure onEnd is only called once.
  __debouncedOnEnd(result: EndResult): void;
  __startNativeAnimation(animatedValue: AnimatedValue): void;
}
export type { EndResult };
export type { EndCallback };
export type { AnimationConfig };
export default Animation;