import { View } from "react-native";
// ─────────────────────────────────────────────
// Spacer
// ─────────────────────────────────────────────

type SpacerProps = {
  /**
   * The flex factor for the spacer.
   * @default 1
   */
  flex?: number;
};

/**
 * A flexible empty space that expands to fill available room along the main axis.
 *
 * Equivalent to Flutter's `Spacer` widget. Must be used inside a `Row` or `Column`.
 *
 * @example
 * // Push items to opposite ends of a row
 * <Row>
 *   <Text>Left</Text>
 *   <Spacer />
 *   <Text>Right</Text>
 * </Row>
 */
export function Spacer({ flex = 1 }: SpacerProps) {
  return <View style={{ flex }} />;
}