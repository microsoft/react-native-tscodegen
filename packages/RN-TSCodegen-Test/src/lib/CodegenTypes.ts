// \react-native\Libraries\Types\CodegenTypes.js

import { SyntheticEvent } from './CoreEventTypes';

// because has a private constructor, so the only possible value it could be assigned to outside of this module is T
// if I don't write the code in this way, the TypeScript type checker won't give me the alias information
export class FloatRNTag { private constructor() { } };
export class DoubleRNTag { private constructor() { } };
export class Int32RNTag { private constructor() { } };
export class WithDefaultRNTag<T>{ private constructor() { } };

export type Float = number | FloatRNTag;
export type Double = number | DoubleRNTag;
export type Int32 = number | Int32RNTag;

export type BubblingEventHandler<T, PaperName extends string | {} = {}> = (event: SyntheticEvent<T>) => void | Promise<void>;
export type DirectEventHandler<T, PaperName extends string | {} = {}> = (event: SyntheticEvent<T>) => void | Promise<void>;
export type NotString = {};
export type Stringish = string;

export class ReactNull { private constructor() { } }
export type WithDefault<T, V> = ReactNull | T | WithDefaultRNTag<V>;
