import $1 from "react";
declare type AnimatedComponentType<Props extends {}, Instance> = $1.AbstractComponent<
/*[FLOW2DTS - Warning] This type was a $ObjMap type in the original Flow source.*/
{ [K in keyof Props]: ReturnType<() => any> }, Instance>;
declare function createAnimatedComponent<Props extends {}, Instance>(Component: $1.AbstractComponent<Props, Instance>): AnimatedComponentType<Props, Instance>;
export type { AnimatedComponentType };
declare const $f2tExportDefault: typeof createAnimatedComponent;
export default $f2tExportDefault;