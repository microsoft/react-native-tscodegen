// @flow
import { EventHandlers } from "./Pressability";
import { PressabilityConfig } from "./Pressability";
declare function usePressability(config?: null | undefined | PressabilityConfig): null | undefined | EventHandlers;
export { usePressability as default };