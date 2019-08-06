// \react-native\Libraries\Types\CodegenTypes.js

import { SyntheticEvent } from './CoreEventTypes';

export type BubblingEventHandler<T, PaperName extends string | {}={}> = (event: SyntheticEvent<T>) => void | Promise<void>;
export type DirectEventHandler<T, PaperName extends string | {}={}> = (event: SyntheticEvent<T>) => void | Promise<void>;
export type Float = number;
export type Int32 = number;
export type NotString = {};
export type Stringish = string;
export type WithDefault<T, V extends T> = null | undefined | T;
