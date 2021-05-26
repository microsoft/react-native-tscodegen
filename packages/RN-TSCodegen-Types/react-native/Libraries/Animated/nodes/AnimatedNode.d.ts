// @flow
declare class AnimatedNode {
  __nativeAnimatedValueListener?: null | undefined | any;
  __attach(): void;
  __detach(): void;
  __getValue(): any;
  __getAnimatedValue(): any;
  __addChild(child: AnimatedNode): void;
  __removeChild(child: AnimatedNode): void;
  __getChildren(): AnimatedNode[];

  /* Methods and props used by native Animated impl */
  __isNative: boolean;
  __nativeTag?: null | undefined | number;
  __shouldUpdateListenersForNewNativeTag: boolean;
  constructor();
  __makeNative(): void;

  /**
   * Adds an asynchronous listener to the value so you can observe updates from
   * animations.  This is useful because there is no way to
   * synchronously read the value because it might be driven natively.
   *
   * See https://reactnative.dev/docs/animatedvalue.html#addlistener
   */
  addListener(callback: (value: any) => unknown): string;

  /**
   * Unregister a listener. The `id` param shall match the identifier
   * previously returned by `addListener()`.
   *
   * See https://reactnative.dev/docs/animatedvalue.html#removelistener
   */
  removeListener(id: string): void;

  /**
   * Remove all registered listeners.
   *
   * See https://reactnative.dev/docs/animatedvalue.html#removealllisteners
   */
  removeAllListeners(): void;
  hasListeners(): boolean;
  __callListeners(value: number): void;
  __getNativeTag(): number;
  __getNativeConfig(): Object;
  toJSON(): any;
}
export default AnimatedNode;