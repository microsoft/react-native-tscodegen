/**
 * These are types that the current DefinitelyTyped typings exported at the top-level that will be used by many TS
 * applications.
 *
 * TODO: For now they are considered deprecated, but we should discuss if we still want these or move them upstream
 *       so everybody gets to benefit from them. Related, how do Flow users use these now?
 */

/**
 * @deprecated Instead use `import("react-native/Libraries/Types/CoreEventTypes").PressEvent`.
 */
export type GestureResponderEvent = import("../Libraries/Types/CoreEventTypes").PressEvent

/**
 * @deprecated Instead use `import("react-native/Libraries/Types/CoreEventTypes").LayoutEvent`.
 */
export type LayoutChangeEvent = import("../Libraries/Types/CoreEventTypes").LayoutEvent

/**
 * @deprecated Instead use `import("react-native/Libraries/Types/CoreEventTypes").ScrollEvent`.
 */
export type NativeScrollEvent = import("../Libraries/Types/CoreEventTypes").ScrollEvent["nativeEvent"]

/**
 * @deprecated Instead use `import("react-native/Libraries/Types/CoreEventTypes").ScrollEvent<T>`.
 */
export type NativeSyntheticEvent<T> = import("../Libraries/Types/CoreEventTypes").SyntheticEvent<T>

/**
 * @deprecated Instead use `import("react-native/Libraries/StyleSheet/StyleSheet").ViewStyle`.
 */
export type ViewStyle = import("../Libraries/StyleSheet/StyleSheet").ViewStyle

/**
 * @deprecated Instead use `import("react-native/Libraries/StyleSheet/StyleSheet").TextStyle`.
 */
export type TextStyle = import("../Libraries/StyleSheet/StyleSheet").TextStyle

/**
 * @deprecated Instead use `import("react-native/Libraries/StyleSheet/StyleSheet").ImageStyle`.
 */
export type ImageStyle = import("../Libraries/StyleSheet/StyleSheet").ImageStyle

/**
 * @deprecated Instead use `import("react-native/Libraries/StyleSheet/StyleSheetTypes").(View|Text|Image)StyleProp`.
 */
export type StyleProp<T> = null | void | T | false | "" | ReadonlyArray<StyleProp<T>>

/**
 * @deprecated Instead use `React.ComponentPropsWithoutRef<typeof Image>`.
 */
export type ImageProps = React.ComponentPropsWithoutRef<typeof import("../Libraries/Image/Image").default>

/**
 * @deprecated Instead use `import("react-native/Libraries/Text/TextProps").TextProps`.
 */
export { TextProps } from "../Libraries/Text/TextProps"

/**
 * @deprecated Instead use `React.ComponentPropsWithoutRef<typeof TouchableWithoutFeedback>`.
 */
export type TouchableWithoutFeedbackProps = React.ComponentPropsWithoutRef<
  typeof import("../Libraries/Components/Touchable/TouchableWithoutFeedback").default
>

/**
 * @deprecated Instead use `import("react-native/Libraries/Components/View/ViewPropTypes").ViewProps`.
 */
export { ViewProps } from "../Libraries/Components/View/ViewPropTypes"

/**
 * @deprecated Instead use `React.ComponentPropsWithoutRef<typeof TouchableHighlight>`.
 */
export type TouchableHighlightProps = React.ComponentPropsWithoutRef<
  typeof import("../Libraries/Components/Touchable/TouchableHighlight").default
>

/**
 * @deprecated Instead use `React.ComponentPropsWithoutRef<typeof TouchableHighlight>`.
 */
export { Props as TextInputProps } from "../Libraries/Components/TextInput/TextInput"

/**
 * @deprecated Instead use `import("react-native/Libraries/Lists/FlatList").Props`.
 */
export type FlatListProps<ItemT> = import("../Libraries/Lists/FlatList").Props<ItemT>

/**
 * @deprecated Instead use `import("react-native/Components/ScrollView/ScrollView").Props`.
 */
export type ScrollViewProps = import("../Libraries/Components/ScrollView/ScrollView").Props
/**
 * @deprecated Instead use `import("react-native/Components/Switch/Switch").Props`.
 */
export type SwitchProps = import("../Libraries/Components/Switch/Switch").Props

/**
 * @deprecated Instead use `import("react-native/Libraries/Lists/ViewabilityHelper").ViewToken`.
 */
export { ViewToken } from "../Libraries/Lists/ViewabilityHelper"

/**
 * @deprecated Instead use `import("react-native/Libraries/Types/CoreEventTypes").Layout`.
 */
export type LayoutRectangle = import("../Libraries/Types/CoreEventTypes").Layout

/**
 * @deprecated Instead use `import("react-native/Libraries/Image/ImageSource").ImageURISource`.
 */
export type ImageURISource = import("../Libraries/Image/ImageSource").ImageURISource

/**
 * @deprecated Instead use `import("react-native/Libraries/vendor/emitter/EmitterSubscription")`.
 */
export { default as EmitterSubscription } from "../Libraries/vendor/emitter/_EmitterSubscription"

/**
 * @deprecated Instead use `import("react-native/Libraries/Alert/Alert").Buttons`.
 */
export type AlertButton = import("../Libraries/Alert/Alert").Buttons
