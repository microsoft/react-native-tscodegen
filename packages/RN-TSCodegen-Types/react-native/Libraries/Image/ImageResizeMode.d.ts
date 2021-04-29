// @flow
declare type ImageResizeMode = // Resize by scaling down such that it is completely visible, if bigger than
// the area of the view. The image will not be scaled up.
"center" // Resize such that it will be completely visible, contained within the frame
// of the View.
| "contain" // Resize such that the entire area of the view is covered by the image,
// potentially clipping parts of the image.
| "cover" // Resize by repeating to cover the frame of the View. The image will keep its
// size and aspect ratio.
| "repeat" // Resize by stretching it to fill the entire frame of the view without
// clipping. This may change the aspect ratio of the image, distorting it.
| "stretch";
export type { ImageResizeMode };