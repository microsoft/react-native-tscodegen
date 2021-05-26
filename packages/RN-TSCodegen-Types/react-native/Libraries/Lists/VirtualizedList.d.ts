import $1 from "../Components/ScrollView/ScrollView";
import $2 from "../Components/View/View";
import * as React from "react";
import { ScrollResponderType } from "../Components/ScrollView/ScrollView";
import { ViewStyleProp } from "../StyleSheet/StyleSheet";
import { ViewabilityConfig } from "./ViewabilityHelper";
import { ViewToken } from "./ViewabilityHelper";
import { ViewabilityConfigCallbackPair } from "./ViewabilityHelper";
import { VirtualizedListContext } from "./VirtualizedListContext.js";
declare type Item = any;
declare type Separators = {
  highlight: () => void;
  unhighlight: () => void;
  updateProps: (select: "leading" | "trailing", newProps: Object) => void;
};
declare type RenderItemProps<ItemT> = {
  item: ItemT;
  index: number;
  separators: Separators;
};
declare type RenderItemType<ItemT> = (info: RenderItemProps<ItemT>) => React.Node;
declare type RequiredProps =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
   * The default accessor functions assume this is an Array<{key: string} | {id: string}> but you can override
   * getItem, getItemCount, and keyExtractor to handle any type of index-based data.
   */
  data?: any;

  /**
   * A generic accessor for extracting an item from any sort of data blob.
   */
  getItem: (data: any, index: number) => null | undefined | Item;

  /**
   * Determines how many items are in the data blob.
   */
  getItemCount: (data: any) => number;
};
declare type OptionalProps =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  renderItem?: null | undefined | RenderItemType<Item>;

  /**
   * `debug` will turn on extra logging and visual overlays to aid with debugging both usage and
   * implementation, but with a significant perf hit.
   */
  debug?: null | undefined | boolean;

  /**
   * DEPRECATED: Virtualization provides significant performance and memory optimizations, but fully
   * unmounts react instances that are outside of the render window. You should only need to disable
   * this for debugging purposes.
   */
  disableVirtualization?: null | undefined | boolean;

  /**
   * A marker property for telling the list to re-render (since it implements `PureComponent`). If
   * any of your `renderItem`, Header, Footer, etc. functions depend on anything outside of the
   * `data` prop, stick it here and treat it immutably.
   */
  extraData?: any;
  // e.g. height, y
  getItemLayout?: (data: any, index: number) => {
    length: number;
    offset: number;
    index: number;
  };
  horizontal?: null | undefined | boolean;

  /**
   * How many items to render in the initial batch. This should be enough to fill the screen but not
   * much more. Note these items will never be unmounted as part of the windowed rendering in order
   * to improve perceived performance of scroll-to-top actions.
   */
  initialNumToRender: number;

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
  keyExtractor: (item: Item, index: number) => string;

  /**
   * Each cell is rendered using this element. Can be a React Component Class,
   * or a render function. Defaults to using View.
   */
  CellRendererComponent?: null | undefined | React.ComponentType<any>;

  /**
   * Rendered in between each item, but not at the top or bottom. By default, `highlighted` and
   * `leadingItem` props are provided. `renderItem` provides `separators.highlight`/`unhighlight`
   * which will update the `highlighted` prop, but you can also add custom props with
   * `separators.updateProps`.
   */
  ItemSeparatorComponent?: null | undefined | React.ComponentType<any>;

  /**
   * Takes an item from `data` and renders it into the list. Example usage:
   *
   *     <FlatList
   *       ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
   *         <View style={[style.separator, highlighted && {marginLeft: 0}]} />
   *       )}
   *       data={[{title: 'Title Text', key: 'item1'}]}
   *       ListItemComponent={({item, separators}) => (
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
  ListItemComponent?: null | undefined | (React.ComponentType<any> | React.Element<any>);

  /**
   * Rendered when the list is empty. Can be a React Component Class, a render function, or
   * a rendered element.
   */
  ListEmptyComponent?: null | undefined | (React.ComponentType<any> | React.Element<any>);

  /**
   * Rendered at the bottom of all the items. Can be a React Component Class, a render function, or
   * a rendered element.
   */
  ListFooterComponent?: null | undefined | (React.ComponentType<any> | React.Element<any>);

  /**
   * Styling for internal View for ListFooterComponent
   */
  ListFooterComponentStyle?: ViewStyleProp;

  /**
   * Rendered at the top of all the items. Can be a React Component Class, a render function, or
   * a rendered element.
   */
  ListHeaderComponent?: null | undefined | (React.ComponentType<any> | React.Element<any>);

  /**
   * Styling for internal View for ListHeaderComponent
   */
  ListHeaderComponentStyle?: ViewStyleProp;

  /**
   * A unique identifier for this list. If there are multiple VirtualizedLists at the same level of
   * nesting within another VirtualizedList, this key is necessary for virtualization to
   * work properly.
   */
  listKey?: string;

  /**
   * The maximum number of items to render in each incremental render batch. The more rendered at
   * once, the better the fill rate, but responsiveness may suffer because rendering content may
   * interfere with responding to button taps or other interactions.
   */
  maxToRenderPerBatch: number;

  /**
   * Called once when the scroll position gets within `onEndReachedThreshold` of the rendered
   * content.
   */
  onEndReached?: null | undefined | ((info: {
    distanceFromEnd: number;
  }) => void);

  /**
   * How far from the end (in units of visible length of the list) the bottom edge of the
   * list must be from the end of the content to trigger the `onEndReached` callback.
   * Thus a value of 0.5 will trigger `onEndReached` when the end of the content is
   * within half the visible length of the list.
   */
  onEndReachedThreshold?: null | undefined | number;

  /**
   * If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make
   * sure to also set the `refreshing` prop correctly.
   */
  onRefresh?: null | undefined | (() => void);

  /**
   * Used to handle failures when scrolling to an index that has not been measured yet. Recommended
   * action is to either compute your own offset and `scrollTo` it, or scroll as far as possible and
   * then try again after more items have been rendered.
   */
  onScrollToIndexFailed?: null | undefined | ((info: {
    index: number;
    highestMeasuredFrameIndex: number;
    averageItemLength: number;
  }) => void);

  /**
   * Called when the viewability of rows changes, as defined by the
   * `viewabilityConfig` prop.
   */
  onViewableItemsChanged?: null | undefined | ((info: {
    viewableItems: ViewToken[];
    changed: ViewToken[];
  }) => void);
  persistentScrollbar?: null | undefined | boolean;

  /**
   * Set this when offset is needed for the loading indicator to show correctly.
   * @platform android
   */
  progressViewOffset?: number;

  /**
   * A custom refresh control element. When set, it overrides the default
   * <RefreshControl> component built internally. The onRefresh and refreshing
   * props are also ignored. Only works for vertical VirtualizedList.
   */
  refreshControl?: null | undefined | React.Element<any>;

  /**
   * Set this true while waiting for new data from a refresh.
   */
  refreshing?: null | undefined | boolean;

  /**
   * Note: may have bugs (missing content) in some circumstances - use at your own risk.
   *
   * This may improve scroll performance for large lists.
   */
  removeClippedSubviews?: boolean;

  /**
   * Render a custom scroll component, e.g. with a differently styled `RefreshControl`.
   */
  renderScrollComponent?: (props: Object) => React.Element<any>;

  /**
   * Amount of time between low-pri item render batches, e.g. for rendering items quite a ways off
   * screen. Similar fill rate/responsiveness tradeoff as `maxToRenderPerBatch`.
   */
  updateCellsBatchingPeriod: number;

  /**
   * See `ViewabilityHelper` for flow type and further documentation.
   */
  viewabilityConfig?: ViewabilityConfig;

  /**
   * List of ViewabilityConfig/onViewableItemsChanged pairs. A specific onViewableItemsChanged
   * will be called when its corresponding ViewabilityConfig's conditions are met.
   */
  viewabilityConfigCallbackPairs?: ViewabilityConfigCallbackPair[];

  /**
   * Determines the maximum number of items rendered outside of the visible area, in units of
   * visible lengths. So if your list fills the screen, then `windowSize={21}` (the default) will
   * render the visible screen area plus up to 10 screens above and 10 below the viewport. Reducing
   * this number will reduce memory consumption and may improve performance, but will increase the
   * chance that fast scrolling may reveal momentary blank areas of unrendered content.
   */
  windowSize: number;

  /**
   * The legacy implementation is no longer supported.
   */
  legacyImplementation?: never;
};
declare type Props =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
React.ElementConfig<typeof $1> & RequiredProps & OptionalProps & {};
declare type DefaultProps =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  disableVirtualization: boolean;
  horizontal: boolean;
  initialNumToRender: number;
  keyExtractor: (item: Item, index: number) => string;
  maxToRenderPerBatch: number;
  onEndReachedThreshold: number;
  scrollEventThrottle: number;
  updateCellsBatchingPeriod: number;
  windowSize: number;
};
declare type State = {
  first: number;
  last: number;
};
declare class VirtualizedList extends React.PureComponent<Props, State> {
  static contextType: typeof VirtualizedListContext;
  // scrollToEnd may be janky without getItemLayout prop
  scrollToEnd(params?: null | undefined | {
    animated?: null | undefined | boolean;
  }): void;
  // scrollToIndex may be janky without getItemLayout prop
  scrollToIndex(params: {
    animated?: null | undefined | boolean;
    index: number;
    viewOffset?: number;
    viewPosition?: number;
  }): void;
  // scrollToItem may be janky without getItemLayout prop. Required linear scan through items -
  // use scrollToIndex instead if possible.
  scrollToItem(params: {
    animated?: null | undefined | boolean;
    item: Item;
    viewPosition?: number;
  }): void;

  /**
   * Scroll to a specific content pixel offset in the list.
   *
   * Param `offset` expects the offset to scroll to.
   * In case of `horizontal` is true, the offset is the x-value,
   * in any other case the offset is the y-value.
   *
   * Param `animated` (`true` by default) defines whether the list
   * should do an animation while scrolling.
   */
  scrollToOffset(params: {
    animated?: null | undefined | boolean;
    offset: number;
  }): void;
  recordInteraction(): void;
  flashScrollIndicators(): void;

  /**
   * Provides a handle to the underlying scroll responder.
   * Note that `this._scrollRef` might not be a `ScrollView`, so we
   * need to check that it responds to `getScrollResponder` before calling it.
   */
  getScrollResponder(): null | undefined | ScrollResponderType;
  getScrollableNode(): null | undefined | number;
  getScrollRef(): (null | undefined | React.ElementRef<typeof $1>) | (null | undefined | React.ElementRef<typeof $2>);
  setNativeProps(props: Object): void;
  static defaultProps: DefaultProps;
  hasMore(): boolean;
  state: State;
  constructor(props: Props);
  componentDidMount(): void;
  componentWillUnmount(): void;
  static getDerivedStateFromProps(newProps: Props, prevState: State): State;
  render(): React.Node;
  componentDidUpdate(prevProps: Props): void;
  measureLayoutRelativeToContainingList(): void;
}
export type { Separators };
export type { RenderItemProps };
export type { RenderItemType };
export default VirtualizedList;