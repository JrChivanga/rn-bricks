import { View, ViewStyle } from "react-native";

type BoxShadow = {
  /** Shadow color. */
  color: string;
  /** Horizontal offset. */
  offsetX?: number;
  /** Vertical offset. */
  offsetY?: number;
  /** Blur radius. */
  blurRadius?: number;
  /** Spread radius (iOS only). */
  spreadRadius?: number;
};

type DecoratedBoxProps = {
  /** The widget to decorate. */
  children: React.ReactNode;
  /** Background color of the box. */
  color?: string;
  /** Border radius applied to all corners. */
  borderRadius?: number;
  /** Per-corner border radius. Overrides `borderRadius` when provided. */
  borderRadiusEach?: {
    topLeft?: number;
    topRight?: number;
    bottomLeft?: number;
    bottomRight?: number;
  };
  /** Border width. */
  borderWidth?: number;
  /** Border color. */
  borderColor?: string;
  /**
   * Shadow configuration.
   *
   * Note: React Native shadows differ between iOS and Android.
   * iOS supports full shadow config; Android uses `elevation`.
   */
  boxShadow?: BoxShadow;
  /**
   * Android elevation for shadow rendering.
   * Has no effect on iOS.
   * @default 0
   */
  elevation?: number;
  /** Additional styles applied to the wrapping View. */
  style?: ViewStyle;
};

/**
 * A box with a background color, border, border radius, and shadow.
 *
 * Equivalent to Flutter's `DecoratedBox` / `Container` with a `BoxDecoration`.
 * Useful as a styled card, surface, or container without needing a `StyleSheet`.
 *
 * @example
 * // Simple card
 * <DecoratedBox color="white" borderRadius={12} elevation={4}>
 *   <Padding all={16}>
 *     <Text>Card content</Text>
 *   </Padding>
 * </DecoratedBox>
 *
 * @example
 * // Outlined box with no shadow
 * <DecoratedBox
 *   color="#f9f9f9"
 *   borderRadius={8}
 *   borderWidth={1}
 *   borderColor="#e0e0e0"
 * >
 *   <Padding all={12}>
 *     <Text>Outlined</Text>
 *   </Padding>
 * </DecoratedBox>
 *
 * @example
 * // iOS shadow with custom blur
 * <DecoratedBox
 *   color="white"
 *   borderRadius={16}
 *   boxShadow={{ color: "#00000020", offsetX: 0, offsetY: 4, blurRadius: 12 }}
 * >
 *   <Content />
 * </DecoratedBox>
 */
export function DecoratedBox({
  children,
  color,
  borderRadius,
  borderRadiusEach,
  borderWidth,
  borderColor,
  boxShadow,
  elevation = 0,
  style,
}: DecoratedBoxProps) {
  const radiusStyle: ViewStyle = borderRadiusEach
    ? {
        borderTopLeftRadius: borderRadiusEach.topLeft,
        borderTopRightRadius: borderRadiusEach.topRight,
        borderBottomLeftRadius: borderRadiusEach.bottomLeft,
        borderBottomRightRadius: borderRadiusEach.bottomRight,
      }
    : { borderRadius };

  const shadowStyle: ViewStyle = boxShadow
    ? {
        shadowColor: boxShadow.color,
        shadowOffset: {
          width: boxShadow.offsetX ?? 0,
          height: boxShadow.offsetY ?? 0,
        },
        shadowOpacity: 1,
        shadowRadius: boxShadow.blurRadius ?? 0,
      }
    : {};

  return (
    <View
      style={[
        {
          backgroundColor: color,
          borderWidth,
          borderColor,
          elevation,
          overflow: "hidden",
        },
        radiusStyle,
        shadowStyle,
        style,
      ]}
    >
      {children}
    </View>
  );
}
