import { View, ViewStyle } from "react-native";
// ─────────────────────────────────────────────
// Opacity
// ─────────────────────────────────────────────

type OpacityProps = {
  /** The content to apply opacity to. */
  children: React.ReactNode;
  /**
   * The opacity value, between `0.0` (fully transparent) and `1.0` (fully opaque).
   */
  value: number;
  /** Additional styles applied to the wrapping View. */
  style?: ViewStyle;
};

/**
 * Applies opacity to its child.
 *
 * Equivalent to Flutter's `Opacity` widget.
 *
 * @example
 * // Dim a disabled button
 * <Opacity value={0.4}>
 *   <Button title="Submit" />
 * </Opacity>
 */
export function Opacity({ children, value, style }: OpacityProps) {
  return <View style={[{ opacity: value }, style]}>{children}</View>;
}



