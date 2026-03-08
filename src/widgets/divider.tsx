import { View, ViewStyle } from "react-native";

// ─────────────────────────────────────────────
// Divider
// ─────────────────────────────────────────────

type DividerProps = {
  /**
   * The thickness of the divider line.
   * @default 1
   */
  thickness?: number;
  /**
   * The color of the divider line.
   * @default "#e0e0e0"
   */
  color?: string;
  /**
   * Indent from the leading edge.
   * @default 0
   */
  indent?: number;
  /**
   * Indent from the trailing edge.
   * @default 0
   */
  endIndent?: number;
  /** Additional styles applied to the wrapping View. */
  style?: ViewStyle;
};

/**
 * A thin horizontal line used to separate content.
 *
 * Equivalent to Flutter's `Divider` widget.
 *
 * @example
 * // Basic separator between list items
 * <Column>
 *   <ListItem title="Item 1" />
 *   <Divider />
 *   <ListItem title="Item 2" />
 * </Column>
 *
 * @example
 * // Indented divider with custom color
 * <Divider indent={16} endIndent={16} color="#f0f0f0" thickness={2} />
 */
export function Divider({
  thickness = 1,
  color = "#e0e0e0",
  indent = 0,
  endIndent = 0,
  style,
}: DividerProps) {
  return (
    <View
      style={[
        {
          height: thickness,
          backgroundColor: color,
          marginLeft: indent,
          marginRight: endIndent,
          alignSelf: "stretch",
        },
        style,
      ]}
    />
  );
}

// ─────────────────────────────────────────────
// VerticalDivider
// ─────────────────────────────────────────────

type VerticalDividerProps = {
  /**
   * The thickness of the divider line.
   * @default 1
   */
  thickness?: number;
  /**
   * The color of the divider line.
   * @default "#e0e0e0"
   */
  color?: string;
  /**
   * Indent from the top edge.
   * @default 0
   */
  indent?: number;
  /**
   * Indent from the bottom edge.
   * @default 0
   */
  endIndent?: number;
  /** Additional styles applied to the wrapping View. */
  style?: ViewStyle;
};

/**
 * A thin vertical line used to separate content in a row.
 *
 * Equivalent to Flutter's `VerticalDivider` widget.
 *
 * @example
 * // Separator between two buttons in a row
 * <Row>
 *   <Button title="Cancel" />
 *   <VerticalDivider indent={8} endIndent={8} />
 *   <Button title="Confirm" />
 * </Row>
 */
export function VerticalDivider({
  thickness = 1,
  color = "#e0e0e0",
  indent = 0,
  endIndent = 0,
  style,
}: VerticalDividerProps) {
  return (
    <View
      style={[
        {
          width: thickness,
          backgroundColor: color,
          marginTop: indent,
          marginBottom: endIndent,
          alignSelf: "stretch",
        },
        style,
      ]}
    />
  );
}
