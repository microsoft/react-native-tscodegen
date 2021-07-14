export {
  /**
   * @deprecate Use Interpolation
   */
  Interpolation as AnimatedInterpolation,
  /**
   * @deprecate Use Node
   */
  Node as Animated,
} from "../Libraries/Animated/AnimatedMock"

export { AnimationConfig } from "../Libraries/Animated/animations/Animation"
export { TimingAnimationConfig } from "../Libraries/Animated/animations/TimingAnimation"
export { DecayAnimationConfig } from "../Libraries/Animated/animations/DecayAnimation"
export { SpringAnimationConfig } from "../Libraries/Animated/animations/SpringAnimation"

/**
 * These should be pushed upstream from DT to Flow
 */

import * as React from "react"
import {
  Animated,
  View as _View,
  Image as _Image,
  Text as _Text,
  ScrollView as _ScrollView,
  FlatListProps,
} from "../index"
import { Props as SectionListProps, SectionBase } from "../Libraries/Lists/SectionList"

export type LegacyRef<C> = { getNode(): C }

type Nullable = undefined | null
type Primitive = string | number | boolean | symbol
type Builtin = Function | Date | Error | RegExp

interface WithAnimatedArray<P> extends Array<WithAnimatedValue<P>> {}
type WithAnimatedObject<T> = {
  [K in keyof T]: WithAnimatedValue<T[K]>
}

export type WithAnimatedValue<T> = T extends Builtin | Nullable
  ? T
  : T extends Primitive
  ? T | Animated["Value"] | Animated["AnimatedInterpolation"] // add `Value` and `AnimatedInterpolation` but also preserve original T
  : T extends Array<infer P>
  ? WithAnimatedArray<P>
  : T extends {}
  ? WithAnimatedObject<T>
  : T // in case it's something we don't yet know about (for .e.g bigint)

type NonAnimatedProps = "key" | "ref"

type TAugmentRef<T> = T extends React.Ref<infer R> ? React.Ref<R | LegacyRef<R>> : never

export type AnimatedProps<T> = {
  [key in keyof T]: key extends NonAnimatedProps
    ? key extends "ref"
      ? TAugmentRef<T[key]>
      : T[key]
    : WithAnimatedValue<T[key]>
}

export interface AnimatedComponent<T extends React.ComponentType<any>>
  extends React.FC<AnimatedProps<React.ComponentPropsWithRef<T>>> {}

// /**
//  * Make any React component Animatable.  Used to create `Animated.View`, etc.
//  */
// export function createAnimatedComponent<T extends React.ComponentType<any>>(component: T): AnimatedComponent<T>

/**
 * Animated variants of the basic native views. Accepts Animated.Value for
 * props and style.
 */
export const View: AnimatedComponent<_View>
export const Image: AnimatedComponent<_Image>
export const Text: AnimatedComponent<_Text>
export const ScrollView: AnimatedComponent<_ScrollView>

/**
 * FlatList and SectionList infer generic Type defined under their `data` and `section` props.
 */
export class FlatList<ItemT = any> extends React.Component<AnimatedProps<FlatListProps<ItemT>>> {}
export class SectionList<ItemT = any, SectionT extends SectionBase<ItemT> = any> extends React.Component<
  AnimatedProps<SectionListProps<SectionT>>
> {}
