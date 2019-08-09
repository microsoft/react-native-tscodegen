// \react-native\Libraries\Types\CodegenTypes.js

import { SyntheticEvent } from './CoreEventTypes';

class FloatNotExported { };
class IntNotExported { };

// because XNotExported is not exported, so the only possible value it could be assigned to outside of this module is T
// if I don't write the code in this way, the TypeScript type checker won't give me the alias information
export type Float = number | FloatNotExported;
export type Int32 = number | IntNotExported;

export type BubblingEventHandler<T, PaperName extends string | {} = {}> = (event: SyntheticEvent<T>) => void | Promise<void>;
export type DirectEventHandler<T, PaperName extends string | {} = {}> = (event: SyntheticEvent<T>) => void | Promise<void>;
export type NotString = {};
export type Stringish = string;
export type WithDefault<T, V> = null | undefined | T;
