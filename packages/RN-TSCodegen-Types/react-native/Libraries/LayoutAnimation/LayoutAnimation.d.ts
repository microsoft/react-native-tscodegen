// @flow
declare type Type = "spring" | "linear" | "easeInEaseOut" | "easeIn" | "easeOut" | "keyboard";
declare type Property = "opacity" | "scaleX" | "scaleY" | "scaleXY";
declare type AnimationConfig = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  duration?: number;
  delay?: number;
  springDamping?: number;
  initialVelocity?: number;
  type?: Type;
  property?: Property;
}>;
declare type LayoutAnimationConfig = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  duration: number;
  create?: AnimationConfig;
  update?: AnimationConfig;
  delete?: AnimationConfig;
}>;
declare function configureNext(config: LayoutAnimationConfig, onAnimationDidEnd?: Function): void;
declare function create(duration: number, type: Type, property: Property): LayoutAnimationConfig;
declare var Presets:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  easeInEaseOut: LayoutAnimationConfig;
  linear: LayoutAnimationConfig;
  spring:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    duration: number;
    create:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      type: string;
      property: string;
    };
    update:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      type: string;
      springDamping: number;
    };
    delete:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      type: string;
      property: string;
    };
  };
};
declare var LayoutAnimation:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
   * Schedules an animation to happen on the next layout.
   *
   * @param config Specifies animation properties:
   *
   *   - `duration` in milliseconds
   *   - `create`, `AnimationConfig` for animating in new views
   *   - `update`, `AnimationConfig` for animating views that have been updated
   *
   * @param onAnimationDidEnd Called when the animation finished.
   * Only supported on iOS.
   * @param onError Called on error. Only supported on iOS.
   */
  configureNext: typeof configureNext;

  /**
   * Helper for creating a config for `configureNext`.
   */
  create: typeof create;
  Types:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    spring: string;
    linear: string;
    easeInEaseOut: string;
    easeIn: string;
    easeOut: string;
    keyboard: string;
  };
  Properties:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    opacity: string;
    scaleX: string;
    scaleY: string;
    scaleXY: string;
  };
  checkConfig: (...args: unknown[]) => void;
  Presets: typeof Presets;
  easeInEaseOut: (onAnimationDidEnd?: any) => void;
  linear: (onAnimationDidEnd?: any) => void;
  spring: (onAnimationDidEnd?: any) => void;
};
export type { LayoutAnimationConfig };
declare const $f2tExportDefault: typeof LayoutAnimation;
export default $f2tExportDefault;