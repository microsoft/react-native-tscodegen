// @flow
declare type Options = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  date?: null | undefined | (Date | number);
  minDate?: null | undefined | (Date | number);
  maxDate?: null | undefined | (Date | number);
  mode?: null | undefined | ("calendar" | "spinner" | "default");
}>;
declare type DatePickerOpenAction =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  action: "dateSetAction";
  year: number;
  month: number;
  day: number;
} |
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  action: "dismissedAction";
  year: void;
  month: void;
  day: void;
};
export type { Options };
export type { DatePickerOpenAction };