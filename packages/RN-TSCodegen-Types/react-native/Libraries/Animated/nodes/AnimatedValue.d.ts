import $1 from "./AnimatedInterpolation";
import $3 from "./AnimatedWithChildren";
import { EndCallback } from "../animations/Animation";
import Animation from "../animations/Animation";
import { InterpolationConfigType } from "./AnimatedInterpolation";
import AnimatedTracking from "./AnimatedTracking";
declare class AnimatedValue extends $3 {
  constructor(value: number);
  __detach(): void;
  __getValue(): number;

  /**
   * Directly set the value.  This will stop any animations running on the value
   * and update all the bound properties.
   *
   * See https://reactnative.dev/docs/animatedvalue.html#setvalue
   */
  setValue(value: number): void;

  /**
   * Sets an offset that is applied on top of whatever value is set, whether via
   * `setValue`, an animation, or `Animated.event`.  Useful for compensating
   * things like the start of a pan gesture.
   *
   * See https://reactnative.dev/docs/animatedvalue.html#setoffset
   */
  setOffset(offset: number): void;

  /**
   * Merges the offset value into the base value and resets the offset to zero.
   * The final output of the value is unchanged.
   *
   * See https://reactnative.dev/docs/animatedvalue.html#flattenoffset
   */
  flattenOffset(): void;

  /**
   * Sets the offset value to the base value, and resets the base value to zero.
   * The final output of the value is unchanged.
   *
   * See https://reactnative.dev/docs/animatedvalue.html#extractoffset
   */
  extractOffset(): void;

  /**
   * Stops any running animation or tracking. `callback` is invoked with the
   * final value after stopping the animation, which is useful for updating
   * state to match the animation position with layout.
   *
   * See https://reactnative.dev/docs/animatedvalue.html#stopanimation
   */
  stopAnimation(callback?: null | undefined | ((value: number) => void)): void;

  /**
   * Stops any animation and resets the value to its original.
   *
   * See https://reactnative.dev/docs/animatedvalue.html#resetanimation
   */
  resetAnimation(callback?: null | undefined | ((value: number) => void)): void;

  /**
   * Interpolates the value before updating the property, e.g. mapping 0-1 to
   * 0-10.
   */
  interpolate(config: InterpolationConfigType): $1;

  /**
   * Typically only used internally, but could be used by a custom Animation
   * class.
   *
   * See https://reactnative.dev/docs/animatedvalue.html#animate
   */
  animate(animation: Animation, callback?: null | undefined | EndCallback): void;

  /**
   * Typically only used internally.
   */
  stopTracking(): void;

  /**
   * Typically only used internally.
   */
  track(tracking: AnimatedTracking): void;
  __getNativeConfig(): Object;
}
export default AnimatedValue;