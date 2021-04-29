// @flow
declare type HermesStackLocationNative =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  readonly type: "NATIVE";
};
declare type HermesStackLocationSource =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  readonly type: "SOURCE";
  readonly sourceUrl: string;
  readonly line1Based: number;
  readonly column1Based: number;
};
declare type HermesStackLocationBytecode =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  readonly type: "BYTECODE";
  readonly sourceUrl: string;
  readonly line1Based: number;
  readonly virtualOffset0Based: number;
};
declare type HermesStackLocation = HermesStackLocationNative | HermesStackLocationSource | HermesStackLocationBytecode;
declare type HermesStackEntryFrame =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  readonly type: "FRAME";
  readonly location: HermesStackLocation;
  readonly functionName: string;
};
declare type HermesStackEntrySkipped =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  readonly type: "SKIPPED";
  readonly count: number;
};
declare type HermesStackEntry = HermesStackEntryFrame | HermesStackEntrySkipped;
declare type HermesParsedStack =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  readonly message: string;
  readonly entries: ReadonlyArray<HermesStackEntry>;
};
export type { HermesParsedStack };
declare const $f2tExportDefault: (stack: string) => HermesParsedStack;
export default $f2tExportDefault;