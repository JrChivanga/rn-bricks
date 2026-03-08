import { View, ViewStyle } from "react-native";

type LimitedBoxProps = {
  /** The widget to constrain. */
  children: React.ReactNode;
  /**
   * The maximum width of the box.
   * The child cannot be wider than this value.
   */
  maxWidth?: number;
  /**
   * The maximum height of the box.
   * The child cannot be taller than this value.
   */
  maxHeight?: number;
  /** Additional styles applied to the wrapping View. */
  style?: ViewStyle;
};

/**
 * Constrains its child to a maximum width and/or height.
 *
 * Equivalent to Flutter's `LimitedBox` widget.
 *
 * @example
 * // Prevent a text block from getting too wide on large screens
 * <LimitedBox maxWidth={480}>
 *   <Text>Long form content that shouldn't stretch too wide...</Text>
 * </LimitedBox>
 *
 * @example
 * // Cap the height of a scrollable area
 * <LimitedBox maxHeight={300}>
 *   <ScrollView>
 *     <Content />
 *   </ScrollView>
 * </LimitedBox>
 */
export function LimitedBox({ children, maxWidth, maxHeight, style }: LimitedBoxProps) {
  return (
    <View style={[{ maxWidth, maxHeight }, style]}>
      {children}
    </View>
  );
}
