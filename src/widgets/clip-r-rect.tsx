import { View, ViewStyle } from "react-native";

type BorderRadius =
  | number
  | {
      topLeft?: number;
      topRight?: number;
      bottomLeft?: number;
      bottomRight?: number;
    };

type ClipRRectProps = {
  /** The widget to clip. */
  children: React.ReactNode;
  /**
   * The border radius to clip to.
   *
   * Pass a single number for uniform rounding, or an object for per-corner control.
   *
   * @example
   * borderRadius={12}
   * borderRadius={{ topLeft: 12, topRight: 12 }}
   */
  borderRadius: BorderRadius;
  /** Additional styles applied to the wrapping View. */
  style?: ViewStyle;
};

/**
 * Clips its child to a rounded rectangle.
 *
 * Equivalent to Flutter's `ClipRRect` widget. Uses `overflow: "hidden"` to
 * enforce clipping, so children cannot paint outside the rounded bounds.
 *
 * @example
 * // Rounded image thumbnail
 * <ClipRRect borderRadius={12}>
 *   <Image source={thumbnail} style={{ width: 120, height: 80 }} />
 * </ClipRRect>
 *
 * @example
 * // Card with only top corners rounded
 * <ClipRRect borderRadius={{ topLeft: 16, topRight: 16 }}>
 *   <View style={{ backgroundColor: "white", padding: 16 }}>
 *     <Text>Card content</Text>
 *   </View>
 * </ClipRRect>
 *
 * @example
 * // Circular avatar
 * <ClipRRect borderRadius={999}>
 *   <Image source={avatar} style={{ width: 48, height: 48 }} />
 * </ClipRRect>
 */
export function ClipRRect({ children, borderRadius, style }: ClipRRectProps) {
  const radiusStyle: ViewStyle =
    typeof borderRadius === "number"
      ? { borderRadius }
      : {
          borderTopLeftRadius: borderRadius.topLeft,
          borderTopRightRadius: borderRadius.topRight,
          borderBottomLeftRadius: borderRadius.bottomLeft,
          borderBottomRightRadius: borderRadius.bottomRight,
        };

  return (
    <View style={[{ overflow: "hidden" }, radiusStyle, style]}>
      {children}
    </View>
  );
}
