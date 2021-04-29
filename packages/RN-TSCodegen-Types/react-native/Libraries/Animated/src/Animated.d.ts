export * from "./AnimatedMock";
export * from "../../../TypeScriptSupplementals/Animated";
import $3 from "../../Components/View/View";
import $2 from "react";
import { AnimatedComponentType } from "./createAnimatedComponent";
import $1 from "./AnimatedMock";
export {};
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
typeof $1 & {
  FlatList: any;
  Image: any;
  ScrollView: any;
  SectionList: any;
  Text: any;
  View: AnimatedComponentType<$2.ElementConfig<typeof $3>, $2.ElementRef<typeof $3>>;
};
export default $f2tExportDefault;