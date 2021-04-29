// @flow
declare type Rect = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  bottom?: null | undefined | number;
  left?: null | undefined | number;
  right?: null | undefined | number;
  top?: null | undefined | number;
}>;
declare type RectOrSize = Rect | number;
declare function createSquare(size: number): Rect;
declare function normalizeRect(rectOrSize?: null | undefined | RectOrSize): null | undefined | Rect;
export type { Rect };
export type { RectOrSize };
export { createSquare };
export { normalizeRect };