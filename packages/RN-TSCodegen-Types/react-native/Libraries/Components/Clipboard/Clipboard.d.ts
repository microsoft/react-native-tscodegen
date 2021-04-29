declare const $f2d_getString: () => Promise<string>;
declare const $f2d_setString: (content: string) => void;
export { $f2d_getString as getString, $f2d_setString as setString };
// @flow
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
   * Get content of string type, this method returns a `Promise`, so you can use following code to get clipboard content
   * ```javascript
   * async _getContent() {
   *   var content = await Clipboard.getString();
   * }
   * ```
   */
  getString: () => Promise<string>;

  /**
   * Set content of string type. You can use following code to set clipboard content
   * ```javascript
   * _setContent() {
   *   Clipboard.setString('hello world');
   * }
   * ```
   * @param the content to be stored in the clipboard.
   */
  setString: (content: string) => void;
};
export default $f2tExportDefault;