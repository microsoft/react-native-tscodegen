// @flow
import { SyntheticEvent } from "./CoreEventTypes";
declare type BubblingEventHandler<T, PaperName extends string | never = never> = (event: SyntheticEvent<T>) => void | Promise<void>;
declare type DirectEventHandler<T, PaperName extends string | never = never> = (event: SyntheticEvent<T>) => void | Promise<void>;
declare type Double = number;
declare type Float = number;
declare type Int32 = number;
declare type DefaultTypes = number | boolean | string | ReadonlyArray<string>;
declare type WithDefault<Type extends DefaultTypes, Value extends (null | undefined | Type) | string> = null | undefined | Type;
export type { BubblingEventHandler };
export type { DirectEventHandler };
export type { Double };
export type { Float };
export type { Int32 };
export type { WithDefault };