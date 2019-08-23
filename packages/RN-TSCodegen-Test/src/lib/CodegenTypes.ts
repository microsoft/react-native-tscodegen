// \react-native\Libraries\Types\CodegenTypes.js

import { SyntheticEvent } from './CoreEventTypes';

// because it has a private constructor, so the only possible value it could be assigned to outside of this module is T
// if I don't write the code in this way, the TypeScript type checker won't give me the alias information
export class RNTag<T extends
    | 'Null'
    | 'Int32'
    | 'Float'
    | 'Double'
    | 'ImageSource'
    | 'ColorValue'
    > {
    private constructor() {
        // nothing
    }
}

export class WithDefaultRNTag<T>{ private constructor() { } };

export type Float = number | RNTag<'Float'>;
export type Double = number | RNTag<'Double'>;
export type Int32 = number | RNTag<'Int32'>;

export type BubblingEventHandler<T, PaperName extends string | {} = {}> = (event: SyntheticEvent<T>) => void | Promise<void>;
export type DirectEventHandler<T, PaperName extends string | {} = {}> = (event: SyntheticEvent<T>) => void | Promise<void>;
export type NotString = {};
export type Stringish = string;

export type ReactNull = RNTag<'Null'> | null | undefined;
export type WithDefault<T, V> = ReactNull | T | WithDefaultRNTag<V>;
