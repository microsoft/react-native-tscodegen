// @flow
import ReactNativeViewViewConfigAndroid from "./ReactNativeViewViewConfigAndroid";
declare var ReactNativeViewConfig:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  uiViewClassName: string;
  baseModuleName: null;
  Manager: string;
  Commands: {};
  Constants: {};
  bubblingEventTypes:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  typeof ReactNativeViewViewConfigAndroid.bubblingEventTypes & {
    topBlur:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      phasedRegistrationNames:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        bubbled: string;
        captured: string;
      };
    };
    topChange:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      phasedRegistrationNames:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        bubbled: string;
        captured: string;
      };
    };
    topEndEditing:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      phasedRegistrationNames:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        bubbled: string;
        captured: string;
      };
    };
    topFocus:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      phasedRegistrationNames:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        bubbled: string;
        captured: string;
      };
    };
    topKeyPress:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      phasedRegistrationNames:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        bubbled: string;
        captured: string;
      };
    };
    topPress:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      phasedRegistrationNames:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        bubbled: string;
        captured: string;
      };
    };
    topSubmitEditing:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      phasedRegistrationNames:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        bubbled: string;
        captured: string;
      };
    };
    topTouchCancel:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      phasedRegistrationNames:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        bubbled: string;
        captured: string;
      };
    };
    topTouchEnd:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      phasedRegistrationNames:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        bubbled: string;
        captured: string;
      };
    };
    topTouchMove:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      phasedRegistrationNames:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        bubbled: string;
        captured: string;
      };
    };
    topTouchStart:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      phasedRegistrationNames:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        bubbled: string;
        captured: string;
      };
    };
  };
  directEventTypes:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  typeof ReactNativeViewViewConfigAndroid.directEventTypes & {
    topAccessibilityAction:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      registrationName: string;
    };
    topAccessibilityEscape:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      registrationName: string;
    };
    topAccessibilityTap:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      registrationName: string;
    };
    topLayout:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      registrationName: string;
    };
    topMagicTap:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      registrationName: string;
    };
    // Events for react-native-gesture-handler (T45765076)
    // Remove once this library can handle JS View Configs
    onGestureHandlerEvent:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      registrationName: string;
    };
    onGestureHandlerStateChange:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      registrationName: string;
    };
  };
  validAttributes:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  typeof ReactNativeViewViewConfigAndroid.validAttributes & {
    accessibilityActions: boolean;
    accessibilityElementsHidden: boolean;
    accessibilityHint: boolean;
    accessibilityIgnoresInvertColors: boolean;
    accessibilityLabel: boolean;
    accessibilityLiveRegion: boolean;
    accessibilityRole: boolean;
    accessibilityStates: boolean;
    accessibilityState: boolean;
    accessibilityValue: boolean;
    accessibilityViewIsModal: boolean;
    accessible: boolean;
    alignContent: boolean;
    alignItems: boolean;
    alignSelf: boolean;
    aspectRatio: boolean;
    backfaceVisibility: boolean;
    backgroundColor:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      process: typeof $1;
    };
    borderBottomColor:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      process: typeof $2;
    };
    borderBottomEndRadius: boolean;
    borderBottomLeftRadius: boolean;
    borderBottomRightRadius: boolean;
    borderBottomStartRadius: boolean;
    borderBottomWidth: boolean;
    borderColor:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      process: typeof $3;
    };
    borderEndColor:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      process: typeof $4;
    };
    borderEndWidth: boolean;
    borderLeftColor:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      process: typeof $5;
    };
    borderLeftWidth: boolean;
    borderRadius: boolean;
    borderRightColor:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      process: typeof $6;
    };
    borderRightWidth: boolean;
    borderStartColor:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      process: typeof $7;
    };
    borderStartWidth: boolean;
    borderStyle: boolean;
    borderTopColor:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      process: typeof $8;
    };
    borderTopEndRadius: boolean;
    borderTopLeftRadius: boolean;
    borderTopRightRadius: boolean;
    borderTopStartRadius: boolean;
    borderTopWidth: boolean;
    borderWidth: boolean;
    bottom: boolean;
    clickable: boolean;
    collapsable: boolean;
    direction: boolean;
    display: boolean;
    elevation: boolean;
    end: boolean;
    flex: boolean;
    flexBasis: boolean;
    flexDirection: boolean;
    flexGrow: boolean;
    flexShrink: boolean;
    flexWrap: boolean;
    height: boolean;
    hitSlop:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      diff: any;
    };
    importantForAccessibility: boolean;
    justifyContent: boolean;
    left: boolean;
    margin: boolean;
    marginBottom: boolean;
    marginEnd: boolean;
    marginHorizontal: boolean;
    marginLeft: boolean;
    marginRight: boolean;
    marginStart: boolean;
    marginTop: boolean;
    marginVertical: boolean;
    maxHeight: boolean;
    maxWidth: boolean;
    minHeight: boolean;
    minWidth: boolean;
    nativeID: boolean;
    needsOffscreenAlphaCompositing: boolean;
    onAccessibilityAction: boolean;
    onAccessibilityEscape: boolean;
    onAccessibilityTap: boolean;
    onLayout: boolean;
    onMagicTap: boolean;
    opacity: boolean;
    overflow: boolean;
    padding: boolean;
    paddingBottom: boolean;
    paddingEnd: boolean;
    paddingHorizontal: boolean;
    paddingLeft: boolean;
    paddingRight: boolean;
    paddingStart: boolean;
    paddingTop: boolean;
    paddingVertical: boolean;
    pointerEvents: boolean;
    position: boolean;
    removeClippedSubviews: boolean;
    renderToHardwareTextureAndroid: boolean;
    right: boolean;
    rotation: boolean;
    scaleX: boolean;
    scaleY: boolean;
    shadowColor:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      process: typeof $9;
    };
    shadowOffset:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      diff: typeof $10;
    };
    shadowOpacity: boolean;
    shadowRadius: boolean;
    shouldRasterizeIOS: boolean;
    start: boolean;
    style:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      alignContent: boolean;
      alignItems: boolean;
      alignSelf: boolean;
      aspectRatio: boolean;
      backfaceVisibility: boolean;
      backgroundColor:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        process: typeof $11;
      };
      borderBottomColor:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        process: typeof $12;
      };
      borderBottomEndRadius: boolean;
      borderBottomLeftRadius: boolean;
      borderBottomRightRadius: boolean;
      borderBottomStartRadius: boolean;
      borderBottomWidth: boolean;
      borderColor:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        process: typeof $13;
      };
      borderEndColor:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        process: typeof $14;
      };
      borderEndWidth: boolean;
      borderLeftColor:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        process: typeof $15;
      };
      borderLeftWidth: boolean;
      borderRadius: boolean;
      borderRightColor:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        process: typeof $16;
      };
      borderRightWidth: boolean;
      borderStartColor:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        process: typeof $17;
      };
      borderStartWidth: boolean;
      borderStyle: boolean;
      borderTopColor:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        process: typeof $18;
      };
      borderTopEndRadius: boolean;
      borderTopLeftRadius: boolean;
      borderTopRightRadius: boolean;
      borderTopStartRadius: boolean;
      borderTopWidth: boolean;
      borderWidth: boolean;
      bottom: boolean;
      color:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        process: typeof $19;
      };
      decomposedMatrix: boolean;
      direction: boolean;
      display: boolean;
      elevation: boolean;
      end: boolean;
      flex: boolean;
      flexBasis: boolean;
      flexDirection: boolean;
      flexGrow: boolean;
      flexShrink: boolean;
      flexWrap: boolean;
      fontFamily: boolean;
      fontSize: boolean;
      fontStyle: boolean;
      fontVariant: boolean;
      fontWeight: boolean;
      height: boolean;
      includeFontPadding: boolean;
      justifyContent: boolean;
      left: boolean;
      letterSpacing: boolean;
      lineHeight: boolean;
      margin: boolean;
      marginBottom: boolean;
      marginEnd: boolean;
      marginHorizontal: boolean;
      marginLeft: boolean;
      marginRight: boolean;
      marginStart: boolean;
      marginTop: boolean;
      marginVertical: boolean;
      maxHeight: boolean;
      maxWidth: boolean;
      minHeight: boolean;
      minWidth: boolean;
      opacity: boolean;
      overflow: boolean;
      overlayColor:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        process: typeof $20;
      };
      padding: boolean;
      paddingBottom: boolean;
      paddingEnd: boolean;
      paddingHorizontal: boolean;
      paddingLeft: boolean;
      paddingRight: boolean;
      paddingStart: boolean;
      paddingTop: boolean;
      paddingVertical: boolean;
      position: boolean;
      resizeMode: boolean;
      right: boolean;
      rotation: boolean;
      scaleX: boolean;
      scaleY: boolean;
      shadowColor:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        process: typeof $21;
      };
      shadowOffset:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        diff: typeof $22;
      };
      shadowOpacity: boolean;
      shadowRadius: boolean;
      start: boolean;
      textAlign: boolean;
      textAlignVertical: boolean;
      textDecorationColor:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        process: typeof $23;
      };
      textDecorationLine: boolean;
      textDecorationStyle: boolean;
      textShadowColor:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        process: typeof $24;
      };
      textShadowOffset: boolean;
      textShadowRadius: boolean;
      textTransform: boolean;
      tintColor:
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        process: typeof $25;
      };
      top: boolean;
      transform: any;
      transformMatrix: boolean;
      translateX: boolean;
      translateY: boolean;
      width: boolean;
      writingDirection: boolean;
      zIndex: boolean;
    };
    testID: boolean;
    top: boolean;
    transform: any;
    translateX: boolean;
    translateY: boolean;
    width: boolean;
    zIndex: boolean;
  };
};
import $1 from "../../StyleSheet/processColor";
import $2 from "../../StyleSheet/processColor";
import $3 from "../../StyleSheet/processColor";
import $4 from "../../StyleSheet/processColor";
import $5 from "../../StyleSheet/processColor";
import $6 from "../../StyleSheet/processColor";
import $7 from "../../StyleSheet/processColor";
import $8 from "../../StyleSheet/processColor";
import $9 from "../../StyleSheet/processColor";
import $10 from "../../Utilities/differ/sizesDiffer";
import $11 from "../../StyleSheet/processColor";
import $12 from "../../StyleSheet/processColor";
import $13 from "../../StyleSheet/processColor";
import $14 from "../../StyleSheet/processColor";
import $15 from "../../StyleSheet/processColor";
import $16 from "../../StyleSheet/processColor";
import $17 from "../../StyleSheet/processColor";
import $18 from "../../StyleSheet/processColor";
import $19 from "../../StyleSheet/processColor";
import $20 from "../../StyleSheet/processColor";
import $21 from "../../StyleSheet/processColor";
import $22 from "../../Utilities/differ/sizesDiffer";
import $23 from "../../StyleSheet/processColor";
import $24 from "../../StyleSheet/processColor";
import $25 from "../../StyleSheet/processColor";
declare const $f2tExportDefault: typeof ReactNativeViewConfig;
export default $f2tExportDefault;