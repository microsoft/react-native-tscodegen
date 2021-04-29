// @flow
declare type SpringConfigType = {
  stiffness: number;
  damping: number;
};
declare function fromOrigamiTensionAndFriction(tension: number, friction: number): SpringConfigType;
declare function fromBouncinessAndSpeed(bounciness: number, speed: number): SpringConfigType;
export { fromOrigamiTensionAndFriction, fromBouncinessAndSpeed };
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  fromOrigamiTensionAndFriction: typeof fromOrigamiTensionAndFriction;
  fromBouncinessAndSpeed: typeof fromBouncinessAndSpeed;
};
export default $f2tExportDefault;