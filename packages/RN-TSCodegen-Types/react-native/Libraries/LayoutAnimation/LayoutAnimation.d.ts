// @flow
import { LayoutAnimationType } from "../Renderer/shims/ReactNativeTypes";
import { LayoutAnimationProperty } from "../Renderer/shims/ReactNativeTypes";
import { LayoutAnimationConfig as LayoutAnimationConfig_ } from "../Renderer/shims/ReactNativeTypes";
declare type LayoutAnimationConfig = LayoutAnimationConfig_;
declare type OnAnimationDidEndCallback = () => void;
declare type OnAnimationDidFailCallback = () => void;
declare function configureNext(config: LayoutAnimationConfig, onAnimationDidEnd?: OnAnimationDidEndCallback, onAnimationDidFail?: OnAnimationDidFailCallback): void;
declare function create(duration: number, type: LayoutAnimationType, property: LayoutAnimationProperty): LayoutAnimationConfig;
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
  easeInEaseOut: (onAnimationDidEnd?: OnAnimationDidEndCallback) => void;
  linear: (onAnimationDidEnd?: OnAnimationDidEndCallback) => void;
  spring: (onAnimationDidEnd?: OnAnimationDidEndCallback) => void;
};
export type { LayoutAnimationConfig };
declare const $f2tExportDefault: typeof LayoutAnimation;
export default $f2tExportDefault;