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

type ColumnProps = {
  /** The widgets to display vertically. */
  children: React.ReactNode;
  /**
   * How children are placed along the vertical (main) axis.
   *
   * - `start` — pack children at the top
   * - `end` — pack children at the bottom
   * - `center` — center children vertically
   * - `spaceBetween` — equal space between children, none at edges
   * - `spaceAround` — equal space around each child
   * - `spaceEvenly` — equal space between children and edges
   *
   * @default "start"
   */
  mainAxisAlignment?: MainAxisAlignment;
  /**
   * How children are placed along the horizontal (cross) axis.
   *
   * - `start` — align children to the left
   * - `end` — align children to the right
   * - `center` — center children horizontally
   * - `stretch` — stretch children to fill the column width
   *
   * @default "start"
   */
  crossAxisAlignment?: CrossAxisAlignment;
  /**
   * Whether the column should fill all available vertical space (`max`)
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
 * A vertical layout widget that displays its children in a column.
 *
 * Equivalent to Flutter's `Column` widget.
 *
 * @example
 * // Centered column filling the screen
 * <Column mainAxisAlignment="center" crossAxisAlignment="center">
 *   <Text>Hello</Text>
 *   <SizedBox height={8} />
 *   <Text>World</Text>
 * </Column>
 *
 * @example
 * // Shrink-wrap around children
 * <Column mainAxisSize="min" crossAxisAlignment="stretch">
 *   <TextInput />
 *   <SizedBox height={12} />
 *   <Button title="Submit" />
 * </Column>
 *
 * @example
 * // Push a footer to the bottom
 * <Column mainAxisAlignment="spaceBetween">
 *   <Text>Content</Text>
 *   <Text>Footer</Text>
 * </Column>
 */
export function Column({
  children,
  mainAxisAlignment = "start",
  crossAxisAlignment = "start",
  mainAxisSize = "max",
  style,
}: ColumnProps) {
  return (
    <View
      style={[
        {
          flexDirection: "column",
          flex: mainAxisSize === "max" ? 1 : undefined,
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