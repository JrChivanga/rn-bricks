import { View, ViewStyle } from "react-native";

type SizedBoxProps = {
  /**
   * Fixed width of the box in dp.
   * Use alone for a horizontal spacer inside a `Row`.
   */
  width?: number;
  /**
   * Fixed height of the box in dp.
   * Use alone for a vertical spacer inside a `Column`.
   */
  height?: number;
  /** Additional styles applied to the wrapping View. */
  style?: ViewStyle;
};

/**
 * A box with a fixed width and/or height.
 *
 * Most commonly used as a
 * fixed-size gap between widgets inside a `Row` or `Column`.
 *
 * @example
 * // Vertical gap between two widgets in a Column
 * <Column>
 *   <Text>Hello</Text>
 *   <SizedBox height={16} />
 *   <Text>World</Text>
 * </Column>
 *
 * @example
 * // Horizontal gap between two widgets in a Row
 * <Row>
 *   <Icon name="star" />
 *   <SizedBox width={8} />
 *   <Text>Favourites</Text>
 * </Row>
 *
 * @example
 * // Fixed size box
 * <SizedBox width={100} height={50} />
 */
export function SizedBox({ width, height, style }: SizedBoxProps) {
  return <View style={[{ width, height }, style]} />;
}