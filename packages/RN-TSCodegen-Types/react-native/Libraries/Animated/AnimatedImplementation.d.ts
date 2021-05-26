import * as $14 from "./AnimatedEvent";
import * as $4 from "./AnimatedEvent";
import $1 from "./nodes/AnimatedAddition";
import $2 from "./nodes/AnimatedDiffClamp";
import $3 from "./nodes/AnimatedDivision";
import $6 from "./nodes/AnimatedInterpolation";
import $7 from "./nodes/AnimatedModulo";
import $8 from "./nodes/AnimatedMultiplication";
import $9 from "./nodes/AnimatedNode";
import $10 from "./nodes/AnimatedProps";
import $11 from "./nodes/AnimatedSubtraction";
import $12 from "./nodes/AnimatedValue";
import $13 from "./nodes/AnimatedValueXY";
import $16 from "./createAnimatedComponent";
import { EndCallback } from "./animations/Animation";
import { TimingAnimationConfig } from "./animations/TimingAnimation";
import { DecayAnimationConfig } from "./animations/DecayAnimation";
import { SpringAnimationConfig } from "./animations/SpringAnimation";
import { Mapping } from "./AnimatedEvent";
import { EventConfig } from "./AnimatedEvent";
declare type CompositeAnimation = {
  start: (callback?: null | undefined | EndCallback) => void;
  stop: () => void;
  reset: () => void;
  _startNativeLoop: (iterations?: number) => void;
  _isUsingNativeDriver: () => boolean;
};
declare var add: (a: $9 | number, b: $9 | number) => $1;
declare var subtract: (a: $9 | number, b: $9 | number) => $11;
declare var divide: (a: $9 | number, b: $9 | number) => $3;
declare var multiply: (a: $9 | number, b: $9 | number) => $8;
declare var modulo: (a: $9, modulus: number) => $7;
declare var diffClamp: (a: $9, min: number, max: number) => $2;
declare var spring: (value: $12 | $13, config: SpringAnimationConfig) => CompositeAnimation;
declare var timing: (value: $12 | $13, config: TimingAnimationConfig) => CompositeAnimation;
declare var decay: (value: $12 | $13, config: DecayAnimationConfig) => CompositeAnimation;
declare var sequence: (animations: CompositeAnimation[]) => CompositeAnimation;
declare type ParallelConfig = {
  // If one is stopped, stop all.  default: true
  stopTogether?: boolean;
};
declare var parallel: (animations: CompositeAnimation[], config?: null | undefined | ParallelConfig) => CompositeAnimation;
declare var delay: (time: number) => CompositeAnimation;
declare var stagger: (time: number, animations: CompositeAnimation[]) => CompositeAnimation;
declare type LoopAnimationConfig = {
  iterations: number;
  resetBeforeIteration?: boolean;
};
declare var loop: (animation: CompositeAnimation, _?: LoopAnimationConfig) => CompositeAnimation;
declare function forkEvent(event: (null | undefined | typeof $4.AnimatedEvent) | (null | undefined | Function), listener: Function): typeof $4.AnimatedEvent | Function;
declare function unforkEvent(event: (null | undefined | typeof $4.AnimatedEvent) | (null | undefined | Function), listener: Function): void;
declare var event: (argMapping: ReadonlyArray<null | undefined | Mapping>, config: EventConfig) => any;
export type { CompositeAnimation };
declare const $f2d_Value: typeof $12;
declare const $f2d_ValueXY: typeof $13;
declare const $f2d_Interpolation: typeof $6;
declare const $f2d_Node: typeof $9;
declare const $f2d_createAnimatedComponent: typeof $16;
declare const $f2d_attachNativeEvent: typeof $14.attachNativeEvent;
declare const $f2d_Event: typeof $4.AnimatedEvent;
declare const $f2d___PropsOnlyForTests: typeof $10;
export { $f2d_Value as Value, $f2d_ValueXY as ValueXY, $f2d_Interpolation as Interpolation, $f2d_Node as Node, decay, timing, spring, add, subtract, divide, multiply, modulo, diffClamp, delay, sequence, parallel, stagger, loop, event, $f2d_createAnimatedComponent as createAnimatedComponent, $f2d_attachNativeEvent as attachNativeEvent, forkEvent, unforkEvent, $f2d_Event as Event, $f2d___PropsOnlyForTests as __PropsOnlyForTests };
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
   * Standard value class for driving animations.  Typically initialized with
   * `new Animated.Value(0);`
   *
   * See https://reactnative.dev/docs/animated.html#value
   */
  Value: typeof $12;

  /**
   * 2D value class for driving 2D animations, such as pan gestures.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html
   */
  ValueXY: typeof $13;

  /**
   * Exported to use the Interpolation type in flow.
   *
   * See https://reactnative.dev/docs/animated.html#interpolation
   */
  Interpolation: typeof $6;

  /**
   * Exported for ease of type checking. All animated values derive from this
   * class.
   *
   * See https://reactnative.dev/docs/animated.html#node
   */
  Node: typeof $9;

  /**
   * Animates a value from an initial velocity to zero based on a decay
   * coefficient.
   *
   * See https://reactnative.dev/docs/animated.html#decay
   */
  decay: typeof decay;

  /**
   * Animates a value along a timed easing curve. The Easing module has tons of
   * predefined curves, or you can use your own function.
   *
   * See https://reactnative.dev/docs/animated.html#timing
   */
  timing: typeof timing;

  /**
   * Animates a value according to an analytical spring model based on
   * damped harmonic oscillation.
   *
   * See https://reactnative.dev/docs/animated.html#spring
   */
  spring: typeof spring;

  /**
   * Creates a new Animated value composed from two Animated values added
   * together.
   *
   * See https://reactnative.dev/docs/animated.html#add
   */
  add: typeof add;

  /**
   * Creates a new Animated value composed by subtracting the second Animated
   * value from the first Animated value.
   *
   * See https://reactnative.dev/docs/animated.html#subtract
   */
  subtract: typeof subtract;

  /**
   * Creates a new Animated value composed by dividing the first Animated value
   * by the second Animated value.
   *
   * See https://reactnative.dev/docs/animated.html#divide
   */
  divide: typeof divide;

  /**
   * Creates a new Animated value composed from two Animated values multiplied
   * together.
   *
   * See https://reactnative.dev/docs/animated.html#multiply
   */
  multiply: typeof multiply;

  /**
   * Creates a new Animated value that is the (non-negative) modulo of the
   * provided Animated value.
   *
   * See https://reactnative.dev/docs/animated.html#modulo
   */
  modulo: typeof modulo;

  /**
   * Create a new Animated value that is limited between 2 values. It uses the
   * difference between the last value so even if the value is far from the
   * bounds it will start changing when the value starts getting closer again.
   *
   * See https://reactnative.dev/docs/animated.html#diffclamp
   */
  diffClamp: typeof diffClamp;

  /**
   * Starts an animation after the given delay.
   *
   * See https://reactnative.dev/docs/animated.html#delay
   */
  delay: typeof delay;

  /**
   * Starts an array of animations in order, waiting for each to complete
   * before starting the next. If the current running animation is stopped, no
   * following animations will be started.
   *
   * See https://reactnative.dev/docs/animated.html#sequence
   */
  sequence: typeof sequence;

  /**
   * Starts an array of animations all at the same time. By default, if one
   * of the animations is stopped, they will all be stopped. You can override
   * this with the `stopTogether` flag.
   *
   * See https://reactnative.dev/docs/animated.html#parallel
   */
  parallel: typeof parallel;

  /**
   * Array of animations may run in parallel (overlap), but are started in
   * sequence with successive delays.  Nice for doing trailing effects.
   *
   * See https://reactnative.dev/docs/animated.html#stagger
   */
  stagger: typeof stagger;

  /**
   * Loops a given animation continuously, so that each time it reaches the
   * end, it resets and begins again from the start.
   *
   * See https://reactnative.dev/docs/animated.html#loop
   */
  loop: typeof loop;

  /**
   * Takes an array of mappings and extracts values from each arg accordingly,
   * then calls `setValue` on the mapped outputs.
   *
   * See https://reactnative.dev/docs/animated.html#event
   */
  event: typeof event;

  /**
   * Make any React component Animatable.  Used to create `Animated.View`, etc.
   *
   * See https://reactnative.dev/docs/animated.html#createanimatedcomponent
   */
  createAnimatedComponent: typeof $16;

  /**
   * Imperative API to attach an animated value to an event on a view. Prefer
   * using `Animated.event` with `useNativeDrive: true` if possible.
   *
   * See https://reactnative.dev/docs/animated.html#attachnativeevent
   */
  attachNativeEvent: typeof $14.attachNativeEvent;

  /**
   * Advanced imperative API for snooping on animated events that are passed in
   * through props. Use values directly where possible.
   *
   * See https://reactnative.dev/docs/animated.html#forkevent
   */
  forkEvent: typeof forkEvent;
  unforkEvent: typeof unforkEvent;

  /**
   * Expose Event class, so it can be used as a type for type checkers.
   */
  Event: typeof $4.AnimatedEvent;
  __PropsOnlyForTests: typeof $10;
};
export default $f2tExportDefault;