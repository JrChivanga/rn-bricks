import { View, ViewStyle } from "react-native";

// ─────────────────────────────────────────────
// Expanded
// ─────────────────────────────────────────────

type ExpandedProps = {
  /** The content to expand. */
  children: React.ReactNode;
  /**
   * The flex factor to use for this child.
   * @default 1
   */
  flex?: number;
  /** Additional styles applied to the wrapping View. */
  style?: ViewStyle;
};

/**
 * A widget that expands a child to fill available space along the main axis.
 *
 * Equivalent to Flutter's `Expanded` widget. Must be used inside a `Row` or `Column`.
 *
 * @example
 * // Text input fills remaining row space
 * <Row>
 *   <Icon name="search" />
 *   <Expanded>
 *     <TextInput />
 *   </Expanded>
 * </Row>
 *
 * @example
 * // Two children share space in a 1:2 ratio
 * <Column>
 *   <Expanded flex={1}><View /></Expanded>
 *   <Expanded flex={2}><View /></Expanded>
 * </Column>
 */
export function Expanded({ children, flex = 1, style }: ExpandedProps) {
  return <View style={[{ flex }, style]}>{children}</View>;
}