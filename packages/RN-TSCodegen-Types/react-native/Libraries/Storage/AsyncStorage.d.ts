// @flow
declare var AsyncStorage:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  _getRequests: any[];
  _getKeys: string[];
  _immediate?: null | undefined | number;

  /**
   * Fetches an item for a `key` and invokes a callback upon completion.
   *
   * See https://reactnative.dev/docs/asyncstorage.html#getitem
   */
  getItem: (key: string, callback?: null | undefined | ((error?: null | undefined | Error, result?: null | undefined | string) => void)) => Promise<void>;

  /**
   * Sets the value for a `key` and invokes a callback upon completion.
   *
   * See https://reactnative.dev/docs/asyncstorage.html#setitem
   */
  setItem: (key: string, value: string, callback?: null | undefined | ((error?: null | undefined | Error) => void)) => Promise<void>;

  /**
   * Removes an item for a `key` and invokes a callback upon completion.
   *
   * See https://reactnative.dev/docs/asyncstorage.html#removeitem
   */
  removeItem: (key: string, callback?: null | undefined | ((error?: null | undefined | Error) => void)) => Promise<void>;

  /**
   * Merges an existing `key` value with an input value, assuming both values
   * are stringified JSON.
   *
   * **NOTE:** This is not supported by all native implementations.
   *
   * See https://reactnative.dev/docs/asyncstorage.html#mergeitem
   */
  mergeItem: (key: string, value: string, callback?: null | undefined | ((error?: null | undefined | Error) => void)) => Promise<void>;

  /**
   * Erases *all* `AsyncStorage` for all clients, libraries, etc. You probably
   * don't want to call this; use `removeItem` or `multiRemove` to clear only
   * your app's keys.
   *
   * See https://reactnative.dev/docs/asyncstorage.html#clear
   */
  clear: (callback?: null | undefined | ((error?: null | undefined | Error) => void)) => Promise<void>;

  /**
   * Gets *all* keys known to your app; for all callers, libraries, etc.
   *
   * See https://reactnative.dev/docs/asyncstorage.html#getallkeys
   */
  getAllKeys: (callback?: null | undefined | ((error?: null | undefined | Error, keys?: null | undefined | string[]) => void)) => Promise<void>;

  /**
   * The following batched functions are useful for executing a lot of
   * operations at once, allowing for native optimizations and provide the
   * convenience of a single callback after all operations are complete.
   *
   * These functions return arrays of errors, potentially one for every key.
   * For key-specific errors, the Error object will have a key property to
   * indicate which key caused the error.
   */

  /**
   * Flushes any pending requests using a single batch call to get the data.
   *
   * See https://reactnative.dev/docs/asyncstorage.html#flushgetrequests
   * */
  flushGetRequests: () => void;

  /**
   * This allows you to batch the fetching of items given an array of `key`
   * inputs. Your callback will be invoked with an array of corresponding
   * key-value pairs found.
   *
   * See https://reactnative.dev/docs/asyncstorage.html#multiget
   */
  multiGet: (keys: string[], callback?: null | undefined | ((errors?: null | undefined | Error[], result?: null | undefined | string[][]) => void)) => Promise<void>;

  /**
   * Use this as a batch operation for storing multiple key-value pairs. When
   * the operation completes you'll get a single callback with any errors.
   *
   * See https://reactnative.dev/docs/asyncstorage.html#multiset
   */
  multiSet: (keyValuePairs: string[][], callback?: null | undefined | ((errors?: null | undefined | Error[]) => void)) => Promise<void>;

  /**
   * Call this to batch the deletion of all keys in the `keys` array.
   *
   * See https://reactnative.dev/docs/asyncstorage.html#multiremove
   */
  multiRemove: (keys: string[], callback?: null | undefined | ((errors?: null | undefined | Error[]) => void)) => Promise<void>;

  /**
   * Batch operation to merge in existing and new values for a given set of
   * keys. This assumes that the values are stringified JSON.
   *
   * **NOTE**: This is not supported by all native implementations.
   *
   * See https://reactnative.dev/docs/asyncstorage.html#multimerge
   */
  multiMerge: (keyValuePairs: string[][], callback?: null | undefined | ((errors?: null | undefined | Error[]) => void)) => Promise<void>;
};
declare const $f2tExportDefault: typeof AsyncStorage;
export default $f2tExportDefault;