import $1 from "./AnimatedValue";
import $3 from "./AnimatedWithChildren";
declare type ValueXYListenerCallback = (value: {
  x: number;
  y: number;
}) => unknown;
declare class AnimatedValueXY extends $3 {
  x: $1;
  y: $1;
  constructor(valueIn?: null | undefined | {
    readonly x: number | $1;
    readonly y: number | $1;
  });

  /**
   * Directly set the value. This will stop any animations running on the value
   * and update all the bound properties.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#setvalue
   */
  setValue(value: {
    x: number;
    y: number;
  }): void;

  /**
   * Sets an offset that is applied on top of whatever value is set, whether
   * via `setValue`, an animation, or `Animated.event`. Useful for compensating
   * things like the start of a pan gesture.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#setoffset
   */
  setOffset(offset: {
    x: number;
    y: number;
  }): void;

  /**
   * Merges the offset value into the base value and resets the offset to zero.
   * The final output of the value is unchanged.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#flattenoffset
   */
  flattenOffset(): void;

  /**
   * Sets the offset value to the base value, and resets the base value to
   * zero. The final output of the value is unchanged.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#extractoffset
   */
  extractOffset(): void;
  __getValue(): {
    x: number;
    y: number;
  };

  /**
   * Stops any animation and resets the value to its original.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#resetanimation
   */
  resetAnimation(callback?: (value: {
    x: number;
    y: number;
  }) => void): void;

  /**
   * Stops any running animation or tracking. `callback` is invoked with the
   * final value after stopping the animation, which is useful for updating
   * state to match the animation position with layout.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#stopanimation
   */
  stopAnimation(callback?: (value: {
    x: number;
    y: number;
  }) => void): void;

  /**
   * Adds an asynchronous listener to the value so you can observe updates from
   * animations.  This is useful because there is no way to synchronously read
   * the value because it might be driven natively.
   *
   * Returns a string that serves as an identifier for the listener.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#addlistener
   */
  addListener(callback: ValueXYListenerCallback): string;

  /**
   * Unregister a listener. The `id` param shall match the identifier
   * previously returned by `addListener()`.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#removelistener
   */
  removeListener(id: string): void;

  /**
   * Remove all registered listeners.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#removealllisteners
   */
  removeAllListeners(): void;

  /**
   * Converts `{x, y}` into `{left, top}` for use in style.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#getlayout
   */
  getLayout(): {
    [key: string]: $1;
  };

  /**
   * Converts `{x, y}` into a useable translation transform.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#gettranslatetransform
   */
  getTranslateTransform(): {
    [key: string]: $1;
  }[];
}
export default AnimatedValueXY;