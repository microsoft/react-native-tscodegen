export * from "./AnimatedMock";
export * from "../../TypeScriptSupplementals/Animated";
// @flow
import AnimatedFlatList$f2tTypeof from "./components/AnimatedFlatList";
declare type AnimatedFlatList = typeof AnimatedFlatList$f2tTypeof;
import AnimatedImage$f2tTypeof from "./components/AnimatedImage";
declare type AnimatedImage = typeof AnimatedImage$f2tTypeof;
import AnimatedScrollView$f2tTypeof from "./components/AnimatedScrollView";
declare type AnimatedScrollView = typeof AnimatedScrollView$f2tTypeof;
import AnimatedSectionList$f2tTypeof from "./components/AnimatedSectionList";
declare type AnimatedSectionList = typeof AnimatedSectionList$f2tTypeof;
import AnimatedText$f2tTypeof from "./components/AnimatedText";
declare type AnimatedText = typeof AnimatedText$f2tTypeof;
import AnimatedView$f2tTypeof from "./components/AnimatedView";
declare type AnimatedView = typeof AnimatedView$f2tTypeof;
import $1 from "./AnimatedMock";
export type FlatList = AnimatedFlatList;
export type Image = AnimatedImage;
export type ScrollView = AnimatedScrollView;
export type SectionList = AnimatedSectionList;
export type Text = AnimatedText;
export type View = AnimatedView;
export { AnimatedFlatList$f2tTypeof as FlatList, AnimatedImage$f2tTypeof as Image, AnimatedScrollView$f2tTypeof as ScrollView, AnimatedSectionList$f2tTypeof as SectionList, AnimatedText$f2tTypeof as Text, AnimatedView$f2tTypeof as View };
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
typeof $1 & {
  FlatList: AnimatedFlatList;
  Image: AnimatedImage;
  ScrollView: AnimatedScrollView;
  SectionList: AnimatedSectionList;
  Text: AnimatedText;
  View: AnimatedView;
};
export default $f2tExportDefault;