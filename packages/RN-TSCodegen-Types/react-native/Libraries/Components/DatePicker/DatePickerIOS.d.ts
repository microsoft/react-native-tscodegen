import $2 from "react";
import { SyntheticEvent } from "../../Types/CoreEventTypes";
import { ViewProps } from "../View/ViewPropTypes";
declare type Event = SyntheticEvent<Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  timestamp: number;
}>>;
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & {
  /**
  * The currently selected date.
  */
  date?: null | undefined | Date;

  /**
  * Provides an initial value that will change when the user starts selecting
  * a date. It is useful for simple use-cases where you do not want to deal
  * with listening to events and updating the date prop to keep the
  * controlled state in sync. The controlled state has known bugs which
  * causes it to go out of sync with native. The initialDate prop is intended
  * to allow you to have native be source of truth.
  */
  initialDate?: null | undefined | Date;

  /**
  * The date picker locale.
  */
  locale?: null | undefined | string;

  /**
  * Maximum date.
  *
  * Restricts the range of possible date/time values.
  */
  maximumDate?: null | undefined | Date;

  /**
  * Minimum date.
  *
  * Restricts the range of possible date/time values.
  */
  minimumDate?: null | undefined | Date;

  /**
  * The interval at which minutes can be selected.
  */
  minuteInterval?: null | undefined | (1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30);

  /**
  * The date picker mode.
  */
  mode?: null | undefined | ("date" | "time" | "datetime");

  /**
  * Date change handler.
  *
  * This is called when the user changes the date or time in the UI.
  * The first and only argument is an Event. For getting the date the picker
  * was changed to, use onDateChange instead.
  */
  onChange?: null | undefined | ((event: Event) => void);

  /**
  * Date change handler.
  *
  * This is called when the user changes the date or time in the UI.
  * The first and only argument is a Date object representing the new
  * date and time.
  */
  onDateChange: (date: Date) => void;

  /**
  * Timezone offset in minutes.
  *
  * By default, the date picker will use the device's timezone. With this
  * parameter, it is possible to force a certain timezone offset. For
  * instance, to show times in Pacific Standard Time, pass -7 * 60.
  */
  timeZoneOffsetInMinutes?: null | undefined | number;
}>;
declare class DatePickerIOS extends $2.Component<Props> {
  static DefaultProps:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    mode: string;
  };
  componentDidUpdate(): void;
  render(): $2.Node;
}
export default DatePickerIOS;