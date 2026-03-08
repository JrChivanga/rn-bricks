import { View, ViewStyle } from "react-native";


// ─────────────────────────────────────────────
// Center
// ─────────────────────────────────────────────

type CenterProps = {
  /** The content to center. */
  children: React.ReactNode;
  /**
   * The flex factor of the centering container.
   * Set to `0` to shrink-wrap instead of filling available space.
   * @default 1
   */
  flex?: number;
  /** Additional styles applied to the wrapping View. */
  style?: ViewStyle;
};

/**
 * Centers its child both horizontally and vertically.
 *
 * Equivalent to Flutter's `Center` widget.
 *
 * @example
 * // Full screen centered empty state
 * <Center>
 *   <Text>Nothing here yet</Text>
 * </Center>
 *
 * @example
 * // Shrink-wrap around content, don't fill
 * <Center flex={0}>
 *   <ActivityIndicator />
 * </Center>
 */
export function Center({ children, flex = 1, style }: CenterProps) {
  return (
    <View
      style={[{ flex, justifyContent: "center", alignItems: "center" }, style]}
    >
      {children}
    </View>
  );
}