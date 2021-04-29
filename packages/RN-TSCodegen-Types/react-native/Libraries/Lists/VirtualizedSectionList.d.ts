import { $Diff, $PropertyType } from "utility-types";
import $1 from "react";
import $2 from "./VirtualizedList";
declare type Item = any;
declare type SectionBase<SectionItemT> = {
  /**
   * The data for rendering items in this section.
   */
  data: ReadonlyArray<SectionItemT>;

  /**
   * Optional key to keep track of section re-ordering. If you don't plan on re-ordering sections,
   * the array index will be used by default.
   */
  key?: string;
  // Optional props will override list-wide props just for this section.
  renderItem?: null | undefined | ((info: {
    item: SectionItemT;
    index: number;
    section: SectionBase<SectionItemT>;
    separators: {
      highlight: () => void;
      unhighlight: () => void;
      updateProps: (select: "leading" | "trailing", newProps: Object) => void;
    };
  }) => null | $1.Element<any>);
  ItemSeparatorComponent?: null | undefined | $1.ComponentType<any>;
  keyExtractor?: (item: SectionItemT, index?: null | undefined | number) => string;
};
declare type RequiredProps<SectionT extends SectionBase<any>> =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  sections: ReadonlyArray<SectionT>;
};
declare type OptionalProps<SectionT extends SectionBase<any>> =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
   * Default renderer for every item in every section.
   */
  renderItem?: (info: {
    item: Item;
    index: number;
    section: SectionT;
    separators: {
      highlight: () => void;
      unhighlight: () => void;
      updateProps: (select: "leading" | "trailing", newProps: Object) => void;
    };
  }) => null | $1.Element<any>;

  /**
   * Rendered at the top of each section. These stick to the top of the `ScrollView` by default on
   * iOS. See `stickySectionHeadersEnabled`.
   */
  renderSectionHeader?: null | undefined | ((info: {
    section: SectionT;
  }) => null | $1.Element<any>);

  /**
   * Rendered at the bottom of each section.
   */
  renderSectionFooter?: null | undefined | ((info: {
    section: SectionT;
  }) => null | $1.Element<any>);

  /**
   * Rendered at the top and bottom of each section (note this is different from
   * `ItemSeparatorComponent` which is only rendered between items). These are intended to separate
   * sections from the headers above and below and typically have the same highlight response as
   * `ItemSeparatorComponent`. Also receives `highlighted`, `[leading/trailing][Item/Separator]`,
   * and any custom props from `separators.updateProps`.
   */
  SectionSeparatorComponent?: null | undefined | $1.ComponentType<any>;

  /**
   * Makes section headers stick to the top of the screen until the next one pushes it off. Only
   * enabled by default on iOS because that is the platform standard there.
   */
  stickySectionHeadersEnabled?: boolean;
  onEndReached?: null | undefined | (($f2t1: {
    distanceFromEnd: number;
  }) => void);
};
declare type VirtualizedListProps = $1.ElementProps<typeof $2>;
declare type Props<SectionT extends SectionBase<any>> =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
RequiredProps<SectionT> & OptionalProps<SectionT> & $Diff<VirtualizedListProps, {
  renderItem: $PropertyType<VirtualizedListProps, "renderItem">;
}> & {};
declare type ScrollToLocationParamsType =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  animated?: null | undefined | boolean;
  itemIndex: number;
  sectionIndex: number;
  viewOffset?: number;
  viewPosition?: number;
};
declare type DefaultProps =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
typeof $2.defaultProps & {
  data: ReadonlyArray<Item>;
};
declare type State = {
  childProps: VirtualizedListProps;
};
declare class VirtualizedSectionList<SectionT extends SectionBase<any>> extends $1.PureComponent<Props<SectionT>, State> {
  static defaultProps: DefaultProps;
  scrollToLocation(params: ScrollToLocationParamsType): void;
  getListRef(): $2;
  constructor(props: Props<SectionT>, context: Object);
  UNSAFE_componentWillReceiveProps(nextProps: Props<SectionT>): void;
  render(): $1.Node;
}
export type { SectionBase };
export type { Props };
export type { ScrollToLocationParamsType };
export default VirtualizedSectionList;