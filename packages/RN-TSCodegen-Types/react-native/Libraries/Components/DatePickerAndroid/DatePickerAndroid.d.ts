// @flow
import { Options } from "./DatePickerAndroidTypes";
import { DatePickerOpenAction } from "./DatePickerAndroidTypes";
declare class DatePickerAndroid {
  static open(options?: null | undefined | Options): Promise<DatePickerOpenAction>;
  static readonly dateSetAction: "dateSetAction";
  static readonly dismissedAction: "dismissedAction";
}
export default DatePickerAndroid;