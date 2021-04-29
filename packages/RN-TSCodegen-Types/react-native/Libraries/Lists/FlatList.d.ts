import { $Diff, $PropertyType } from "utility-types";
import $2 from "react";
import $3 from "../Components/View/View";
import $4 from "./VirtualizedList";
import { ScrollResponderType } from "../Components/ScrollView/ScrollView";
import { ScrollViewNativeComponentType } from "../Components/ScrollView/ScrollViewNativeComponentType.js";
import { ViewStyleProp } from "../StyleSheet/StyleSheet";
import { RenderItemType } from "./VirtualizedList";
declare type RequiredProps<ItemT> =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
   * For simplicity, data is just a plain array. If you want to use something else, like an
   * immutable list, use the underlying `VirtualizedList` directly.
   */
  data?: null | undefined | ReadonlyArray<ItemT>;
};
declare type OptionalProps<ItemT> =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
   * Takes an item from `data` and renders it into the list. Example usage:
   *
   *     <FlatList
   *       ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
   *         <View style={[style.separator, highlighted && {marginLeft: 0}]} />
   *       )}
   *       data={[{title: 'Title Text', key: 'item1'}]}
   *       renderItem={({item, separators}) => (
   *         <TouchableHighlight
   *           onPress={() => this._onPress(item)}
   *           onShowUnderlay={separators.highlight}
   *           onHideUnderlay={separators.unhighlight}>
   *           <View style={{backgroundColor: 'white'}}>
   *             <Text>{item.title}</Text>
   *           </View>
   *         </TouchableHighlight>
   *       )}
   *     />
   *
   * Provides additional metadata like `index` if you need it, as well as a more generic
   * `separators.updateProps` function which let's you set whatever props you want to change the
   * rendering of either the leading separator or trailing separator in case the more common
   * `highlight` and `unhighlight` (which set the `highlighted: boolean` prop) are insufficient for
   * your use-case.
   */
  renderItem?: null | undefined | RenderItemType<ItemT>;

  /**
   * Optional custom style for multi-item rows generated when numColumns > 1.
   */
  columnWrapperStyle?: ViewStyleProp;

  /**
   * A marker property for telling the list to re-render (since it implements `PureComponent`). If
   * any of your `renderItem`, Header, Footer, etc. functions depend on anything outside of the
   * `data` prop, stick it here and treat it immutably.
   */
  extraData?: any;

  /**
   * `getItemLayout` is an optional optimizations that let us skip measurement of dynamic content if
   * you know the height of items a priori. `getItemLayout` is the most efficient, and is easy to
   * use if you have fixed height items, for example:
   *
   *     getItemLayout={(data, index) => (
   *       {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
   *     )}
   *
   * Adding `getItemLayout` can be a great performance boost for lists of several hundred items.
   * Remember to include separator length (height or width) in your offset calculation if you
   * specify `ItemSeparatorComponent`.
   */
  getItemLayout?: (data: null | undefined | ItemT[], index: number) => {
    length: number;
    offset: number;
    index: number;
  };

  /**
   * If true, renders items next to each other horizontally instead of stacked vertically.
   */
  horizontal?: null | undefined | boolean;

  /**
   * How many items to render in the initial batch. This should be enough to fill the screen but not
   * much more. Note these items will never be unmounted as part of the windowed rendering in order
   * to improve perceived performance of scroll-to-top actions.
   */
  initialNumToRender?: number;

  /**
   * Instead of starting at the top with the first item, start at `initialScrollIndex`. This
   * disables the "scroll to top" optimization that keeps the first `initialNumToRender` items
   * always rendered and immediately renders the items starting at this initial index. Requires
   * `getItemLayout` to be implemented.
   */
  initialScrollIndex?: null | undefined | number;

  /**
   * Reverses the direction of scroll. Uses scale transforms of -1.
   */
  inverted?: null | undefined | boolean;

  /**
   * Used to extract a unique key for a given item at the specified index. Key is used for caching
   * and as the react key to track item re-ordering. The default extractor checks `item.key`, then
   * falls back to using the index, like React does.
   */
  keyExtractor?: (item: ItemT, index: number) => string;

  /**
   * Multiple columns can only be rendered with `horizontal={false}` and will zig-zag like a
   * `flexWrap` layout. Items should all be the same height - masonry layouts are not supported.
   */
  numColumns?: number;

  /**
   * See `ScrollView` for flow type and further documentation.
   */
  fadingEdgeLength?: null | undefined | number;
};
declare type FlatListProps<ItemT> =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
RequiredProps<ItemT> & OptionalProps<ItemT> & {};
declare type VirtualizedListProps = $2.ElementConfig<typeof $4>;
declare type Props<ItemT> = $Diff<VirtualizedListProps, {
  getItem: $PropertyType<VirtualizedListProps, "getItem">;
  getItemCount: $PropertyType<VirtualizedListProps, "getItemCount">;
  getItemLayout: $PropertyType<VirtualizedListProps, "getItemLayout">;
  renderItem: $PropertyType<VirtualizedListProps, "renderItem">;
  keyExtractor: $PropertyType<VirtualizedListProps, "keyExtractor">;
}> & FlatListProps<ItemT> & {};
declare var defaultProps:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
typeof $4.defaultProps & {
  numColumns: number;

  /**
   * Enabling this prop on Android greatly improves scrolling performance with no known issues.
   * The alternative is that scrolling on Android is unusably bad. Enabling it on iOS has a few
   * known issues.
   */
  removeClippedSubviews: boolean;
};
declare type DefaultProps = typeof defaultProps;
declare class FlatList<ItemT> extends $2.PureComponent<Props<ItemT>, {}> {
  static defaultProps: DefaultProps;
  props: Props<ItemT>;

  /**
   * Scrolls to the end of the content. May be janky without `getItemLayout` prop.
   */
  scrollToEnd(params?: null | undefined | {
    animated?: null | undefined | boolean;
  }): void;

  /**
   * Scrolls to the item at the specified index such that it is positioned in the viewable area
   * such that `viewPosition` 0 places it at the top, 1 at the bottom, and 0.5 centered in the
   * middle. `viewOffset` is a fixed number of pixels to offset the final target position.
   *
   * Note: cannot scroll to locations outside the render window without specifying the
   * `getItemLayout` prop.
   */
  scrollToIndex(params: {
    animated?: null | undefined | boolean;
    index: number;
    viewOffset?: number;
    viewPosition?: number;
  }): void;

  /**
   * Requires linear scan through data - use `scrollToIndex` instead if possible.
   *
   * Note: cannot scroll to locations outside the render window without specifying the
   * `getItemLayout` prop.
   */
  scrollToItem(params: {
    animated?: null | undefined | boolean;
    item: ItemT;
    viewPosition?: number;
  }): void;

  /**
   * Scroll to a specific content pixel offset in the list.
   *
   * Check out [scrollToOffset](docs/virtualizedlist.html#scrolltooffset) of VirtualizedList
   */
  scrollToOffset(params: {
    animated?: null | undefined | boolean;
    offset: number;
  }): void;

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

  /**
   * Provides a reference to the underlying host component
   */
  getNativeScrollRef(): (null | undefined | $2.ElementRef<typeof $3>) | (null | undefined | $2.ElementRef<ScrollViewNativeComponentType>);
  getScrollableNode(): any;
  setNativeProps(props: {
    [$f2tKey: string]: unknown;
  }): void;
  constructor(props: Props<ItemT>);
  componentDidUpdate(prevProps: Props<ItemT>): void;
  render(): $2.Node;
}
export type { Props };
export type { DefaultProps };
export default FlatList;