import { View, ViewStyle } from "react-native";

// ─────────────────────────────────────────────
// Padding
// ─────────────────────────────────────────────

type PaddingProps = {
  /** The content to pad. */
  children: React.ReactNode;
  /** Applies equal padding on all sides. Overridden by more specific props. */
  all?: number;
  /** Applies padding to the left and right sides. */
  horizontal?: number;
  /** Applies padding to the top and bottom sides. */
  vertical?: number;
  /** Applies padding to the top side only. */
  top?: number;
  /** Applies padding to the bottom side only. */
  bottom?: number;
  /** Applies padding to the left side only. */
  left?: number;
  /** Applies padding to the right side only. */
  right?: number;
  /** Additional styles applied to the wrapping View. */
  style?: ViewStyle;
};

/**
 * Applies padding around its child.
 *
 * Equivalent to Flutter's `Padding` widget. Props follow CSS shorthand
 * precedence — specific sides override `horizontal`/`vertical`, which override `all`.
 *
 * @example
 * <Padding all={16}>
 *   <Text>Hello</Text>
 * </Padding>
 *
 * @example
 * <Padding horizontal={24} vertical={12}>
 *   <Text>Hello</Text>
 * </Padding>
 *
 * @example
 * <Padding top={8} left={16}>
 *   <Text>Hello</Text>
 * </Padding>
 */
export function Padding({
  children,
  all,
  horizontal,
  vertical,
  top,
  bottom,
  left,
  right,
  style,
}: PaddingProps) {
  return (
    <View
      style={[
        {
          padding: all,
          paddingHorizontal: horizontal,
          paddingVertical: vertical,
          paddingTop: top,
          paddingBottom: bottom,
          paddingLeft: left,
          paddingRight: right,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}