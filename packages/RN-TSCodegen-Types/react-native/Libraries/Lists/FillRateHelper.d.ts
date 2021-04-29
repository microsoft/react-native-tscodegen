// @flow
declare type FillRateInfo = Info;
declare class Info {
  any_blank_count: number;
  any_blank_ms: number;
  any_blank_speed_sum: number;
  mostly_blank_count: number;
  mostly_blank_ms: number;
  pixels_blank: number;
  pixels_sampled: number;
  pixels_scrolled: number;
  total_time_spent: number;
  sample_count: number;
}
declare type FrameMetrics = {
  inLayout?: boolean;
  length: number;
  offset: number;
};
declare class FillRateHelper {
  static addListener(callback: ($f2t1: FillRateInfo) => void): {
    remove: () => void;
  };
  static setSampleRate(sampleRate: number): void;
  static setMinSampleCount(minSampleCount: number): void;
  constructor(getFrameMetrics: (index: number) => null | undefined | FrameMetrics);
  activate(): void;
  deactivateAndFlush(): void;
  computeBlankness(props: {
    data: any;
    getItemCount: (data: any) => number;
    initialNumToRender: number;
  }, state: {
    first: number;
    last: number;
  }, scrollMetrics: {
    dOffset: number;
    offset: number;
    velocity: number;
    visibleLength: number;
  }): number;
  enabled(): boolean;
}
export type { FillRateInfo };
export default FillRateHelper;