import { View, ViewStyle } from "react-native";

type MainAxisAlignment =
  | "start"
  | "end"
  | "center"
  | "spaceBetween"
  | "spaceAround"
  | "spaceEvenly";

type CrossAxisAlignment = "start" | "end" | "center" | "stretch";

type MainAxisSize = "max" | "min";

type RowProps = {
  /** The widgets to display horizontally. */
  children: React.ReactNode;
  /**
   * How children are placed along the horizontal (main) axis.
   *
   * - `start` — pack children to the left
   * - `end` — pack children to the right
   * - `center` — center children horizontally
   * - `spaceBetween` — equal space between children, none at edges
   * - `spaceAround` — equal space around each child
   * - `spaceEvenly` — equal space between children and edges
   *
   * @default "start"
   */
  mainAxisAlignment?: MainAxisAlignment;
  /**
   * How children are placed along the vertical (cross) axis.
   *
   * - `start` — align children to the top
   * - `end` — align children to the bottom
   * - `center` — center children vertically
   * - `stretch` — stretch children to fill the row height
   *
   * @default "center"
   */
  crossAxisAlignment?: CrossAxisAlignment;
  /**
   * Whether the row should fill all available horizontal space (`max`)
   * or only as much as its children need (`min`).
   *
   * @default "max"
   */
  mainAxisSize?: MainAxisSize;
  /** Additional styles applied to the wrapping View. */
  style?: ViewStyle;
};

const mainAxisMap: Record<MainAxisAlignment, ViewStyle["justifyContent"]> = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  spaceBetween: "space-between",
  spaceAround: "space-around",
  spaceEvenly: "space-evenly",
};

const crossAxisMap: Record<CrossAxisAlignment, ViewStyle["alignItems"]> = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  stretch: "stretch",
};

/**
 * A horizontal layout widget that displays its children in a row.
 *
 * Equivalent to Flutter's `Row` widget.
 *
 * @example
 * // Space items to opposite ends
 * <Row mainAxisAlignment="spaceBetween">
 *   <Text>Left</Text>
 *   <Text>Right</Text>
 * </Row>
 *
 * @example
 * // Icon + label, shrink-wrapped
 * <Row mainAxisSize="min">
 *   <Icon name="star" />
 *   <SizedBox width={8} />
 *   <Text>Favourites</Text>
 * </Row>
 *
 * @example
 * // Input that fills remaining space next to a button
 * <Row>
 *   <Expanded>
 *     <TextInput placeholder="Search..." />
 *   </Expanded>
 *   <SizedBox width={8} />
 *   <Button title="Go" />
 * </Row>
 */
export function Row({
  children,
  mainAxisAlignment = "start",
  crossAxisAlignment = "center",
  mainAxisSize = "max",
  style,
}: RowProps) {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          width: mainAxisSize === "max" ? "100%" : undefined,
          justifyContent: mainAxisMap[mainAxisAlignment],
          alignItems: crossAxisMap[crossAxisAlignment],
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}