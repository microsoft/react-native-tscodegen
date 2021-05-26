import { React$PropType$Primitive } from "flow2dts-flow-types-polyfill";
import $3 from "prop-types";
declare var ImageURISourcePropType: {
  uri: typeof $3.string;
  bundle: typeof $3.string;
  method: typeof $3.string;
  headers: {
    [key: string]: string;
  };
  body: typeof $3.string;
  cache: React$PropType$Primitive<"default" | "reload" | "force-cache" | "only-if-cached">;
  width: typeof $3.number;
  height: typeof $3.number;
  scale: typeof $3.number;
};
declare var ImageSourcePropType: React$PropType$Primitive<typeof ImageURISourcePropType | typeof $3.number | typeof ImageURISourcePropType[]>;
declare const $f2tExportDefault: typeof ImageSourcePropType;
export default $f2tExportDefault;