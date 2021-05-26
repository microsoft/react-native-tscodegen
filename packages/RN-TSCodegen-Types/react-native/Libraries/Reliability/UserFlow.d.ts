import { $Shape } from "utility-types";
// @flow
declare type FlowId = {
  markerId: number;
  instanceKey: number;
};
declare type PointData = $Shape<{
  string?: null | undefined | {
    [$f2tKey: string]: string;
  };
  int?: null | undefined | {
    [$f2tKey: string]: number;
  };
  double?: null | undefined | {
    [$f2tKey: string]: number;
  };
  bool?: null | undefined | {
    [$f2tKey: string]: boolean;
  };
  string_array?: null | undefined | {
    [$f2tKey: string]: ReadonlyArray<string>;
  };
  int_array?: null | undefined | {
    [$f2tKey: string]: ReadonlyArray<number>;
  };
  double_array?: null | undefined | {
    [$f2tKey: string]: ReadonlyArray<number>;
  };
  bool_array?: null | undefined | {
    [$f2tKey: string]: ReadonlyArray<boolean>;
  };
}>;
declare var UserFlow:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
   * Creates FlowId from markerId and instanceKey.
   * You will pass FlowId in every other method of UserFlow API.
   *
   * By default, instanceKey will generate unique instance every time you call userFlowGetId with markerId only.
   */
  newFlowId: (markerId: number, instanceKey?: number) => FlowId;
  start: (flowId: FlowId, triggerSource: string) => void;
  addAnnotation: (flowId: FlowId, annotationName: string, annotationValue: string | boolean) => void;
  addPoint: (flowId: FlowId, pointName: string, data?: null | undefined | PointData) => void;
  endSuccess: (flowId: FlowId) => void;
  endFailure: (flowId: FlowId, errorName: string, debugInfo?: null | undefined | string) => void;
  endCancel: (flowId: FlowId, cancelReason: string) => void;
};
export type { FlowId };
export type { PointData };
declare const $f2tExportDefault: typeof UserFlow;
export default $f2tExportDefault;