// @flow
declare type Scene = {
  name: string;
};
declare var SceneTracker:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  setActiveScene: (scene: Scene) => void;
  getActiveScene: () => Scene;
  addActiveSceneChangedListener: (callback: (scene: Scene) => void) => {
    remove: () => void;
  };
};
export type { Scene };
declare const $f2tExportDefault: typeof SceneTracker;
export default $f2tExportDefault;