import { $Diff, $PropertyType } from "utility-types";
import $1 from "react";
import $3 from "./VirtualizedSectionList";
import { ScrollResponderType } from "../Components/ScrollView/ScrollView";
import { ScrollToLocationParamsType } from "./VirtualizedSectionList";
import { SectionBase as _SectionBase } from "./VirtualizedSectionList";
import { Props as VirtualizedSectionListProps } from "./VirtualizedSectionList";
declare type Item = any;
declare type SectionBase<SectionItemT> = _SectionBase<SectionItemT>;
declare type RequiredProps<SectionT extends SectionBase<any>> =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
   * The actual data to render, akin to the `data` prop in [`<FlatList>`](https://reactnative.dev/docs/flatlist.html).
   *
   * General shape:
   *
   *     sections: $ReadOnlyArray<{
   *       data: $ReadOnlyArray<SectionItem>,
   *       renderItem?: ({item: SectionItem, ...}) => ?React.Element<*>,
   *       ItemSeparatorComponent?: ?ReactClass<{highlighted: boolean, ...}>,
   *     }>
   */
  sections: ReadonlyArray<SectionT>;
};
declare type OptionalProps<SectionT extends SectionBase<any>> =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
   * Default renderer for every item in every section. Can be over-ridden on a per-section basis.
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
   * A marker property for telling the list to re-render (since it implements `PureComponent`). If
   * any of your `renderItem`, Header, Footer, etc. functions depend on anything outside of the
   * `data` prop, stick it here and treat it immutably.
   */
  extraData?: any;

  /**
   * How many items to render in the initial batch. This should be enough to fill the screen but not
   * much more. Note these items will never be unmounted as part of the windowed rendering in order
   * to improve perceived performance of scroll-to-top actions.
   */
  initialNumToRender: number;

  /**
   * Reverses the direction of scroll. Uses scale transforms of -1.
   */
  inverted?: null | undefined | boolean;

  /**
   * Used to extract a unique key for a given item at the specified index. Key is used for caching
   * and as the react key to track item re-ordering. The default extractor checks item.key, then
   * falls back to using the index, like react does. Note that this sets keys for each item, but
   * each overall section still needs its own key.
   */
  keyExtractor: (item: Item, index: number) => string;

  /**
   * Called once when the scroll position gets within `onEndReachedThreshold` of the rendered
   * content.
   */
  onEndReached?: null | undefined | ((info: {
    distanceFromEnd: number;
  }) => void);

  /**
   * Note: may have bugs (missing content) in some circumstances - use at your own risk.
   *
   * This may improve scroll performance for large lists.
   */
  removeClippedSubviews?: boolean;
};
declare type Props<SectionT extends SectionBase<any>> =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
$Diff<VirtualizedSectionListProps<SectionT>, {
  getItem: $PropertyType<VirtualizedSectionListProps<SectionT>, "getItem">;
  getItemCount: $PropertyType<VirtualizedSectionListProps<SectionT>, "getItemCount">;
  renderItem: $PropertyType<VirtualizedSectionListProps<SectionT>, "renderItem">;
}> & RequiredProps<SectionT> & OptionalProps<SectionT> & {};
declare var defaultProps:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
typeof $3.defaultProps & {
  stickySectionHeadersEnabled: boolean;
};
declare type DefaultProps = typeof defaultProps;
declare class SectionList<SectionT extends SectionBase<any>> extends $1.PureComponent<Props<SectionT>, {}> {
  props: Props<SectionT>;
  static defaultProps: DefaultProps;

  /**
   * Scrolls to the item at the specified `sectionIndex` and `itemIndex` (within the section)
   * positioned in the viewable area such that `viewPosition` 0 places it at the top (and may be
   * covered by a sticky header), 1 at the bottom, and 0.5 centered in the middle. `viewOffset` is a
   * fixed number of pixels to offset the final target position, e.g. to compensate for sticky
   * headers.
   *
   * Note: cannot scroll to locations outside the render window without specifying the
   * `getItemLayout` prop.
   */
  scrollToLocation(params: ScrollToLocationParamsType): void;

  /**
   * Tells the list an interaction has occurred, which should trigger viewability calculations, e.g.
   * if `waitForInteractions` is true and the user has not scrolled. This is typically called by
   * taps on items or by navigation actions.
   */
  recordInteraction(): void;

  /**
   * Displays the scroll indicators momentarily.
   *
   * @platform ios
   */
  flashScrollIndicators(): void;

  /**
   * Provides a handle to the underlying scroll responder.
   */
  getScrollResponder(): null | undefined | ScrollResponderType;
  getScrollableNode(): any;
  setNativeProps(props: Object): void;
  render(): $1.Node;
}
export type { SectionBase };
export type { Props };
export default SectionList;