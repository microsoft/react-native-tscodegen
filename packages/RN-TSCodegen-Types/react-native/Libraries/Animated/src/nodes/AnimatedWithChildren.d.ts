import $1 from "./AnimatedNode";
declare class AnimatedWithChildren extends $1 {
  constructor();
  __makeNative(): void;
  __addChild(child: $1): void;
  __removeChild(child: $1): void;
  __getChildren(): $1[];
  __callListeners(value: number): void;
}
export default AnimatedWithChildren;