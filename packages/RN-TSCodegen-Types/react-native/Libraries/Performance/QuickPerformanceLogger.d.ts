// @flow
declare var QuickPerformanceLogger:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  markerStart: (markerId: number, instanceKey?: number, timestamp?: number) => void;
  markerEnd: (markerId: number, actionId: number, instanceKey?: number, timestamp?: number) => void;
  markerTag: (markerId: number, tag: string, instanceKey?: number) => void;
  markerAnnotate: (markerId: number, annotationKey: string, annotationValue: string, instanceKey?: number) => void;
  markerCancel: (markerId: number, instanceKey?: number) => void;
  markerPoint: (markerId: number, name: string, instanceKey?: number, timestamp?: number) => void;
  markerDrop: (markerId: number, instanceKey?: number) => void;
  currentTimestamp: () => number;
};
declare const $f2tExportDefault: typeof QuickPerformanceLogger;
export default $f2tExportDefault;