import { View, ViewStyle } from "react-native";

type WrapAlignment = "start" | "end" | "center" | "spaceBetween" | "spaceAround" | "spaceEvenly";

type WrapCrossAlignment = "start" | "end" | "center";

type WrapProps = {
  /** The widgets to lay out in a wrapping flow. */
  children: React.ReactNode;
  /**
   * How children are placed along the main axis within each run.
   *
   * - `start` — pack children to the start
   * - `end` — pack children to the end
   * - `center` — center children
   * - `spaceBetween` — equal space between children
   * - `spaceAround` — equal space around each child
   * - `spaceEvenly` — equal space between children and edges
   *
   * @default "start"
   */
  alignment?: WrapAlignment;
  /**
   * How runs are placed along the cross axis.
   *
   * @default "start"
   */
  runAlignment?: WrapAlignment;
  /**
   * How children within a run are aligned on the cross axis.
   *
   * @default "start"
   */
  crossAxisAlignment?: WrapCrossAlignment;
  /**
   * Spacing between children along the main axis.
   * @default 0
   */
  spacing?: number;
  /**
   * Spacing between runs along the cross axis.
   * @default 0
   */
  runSpacing?: number;
  /** Additional styles applied to the wrapping View. */
  style?: ViewStyle;
};

const alignmentMap: Record<WrapAlignment, ViewStyle["justifyContent"]> = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  spaceBetween: "space-between",
  spaceAround: "space-around",
  spaceEvenly: "space-evenly",
};

const crossAxisMap: Record<WrapCrossAlignment, ViewStyle["alignItems"]> = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

/**
 * Lays out its children in a flow that wraps to the next line when they overflow.
 *
 * Equivalent to Flutter's `Wrap` widget.
 *
 * @example
 * // Tag cloud that wraps to next line
 * <Wrap spacing={8} runSpacing={8}>
 *   <Chip label="React Native" />
 *   <Chip label="Expo" />
 *   <Chip label="TypeScript" />
 *   <Chip label="Flutter" />
 * </Wrap>
 *
 * @example
 * // Centered wrapping row of buttons
 * <Wrap alignment="center" spacing={12} runSpacing={12}>
 *   <Button title="Option A" />
 *   <Button title="Option B" />
 *   <Button title="Option C" />
 * </Wrap>
 */
export function Wrap({
  children,
  alignment = "start",
  runAlignment = "start",
  crossAxisAlignment = "start",
  spacing = 0,
  runSpacing = 0,
  style,
}: WrapProps) {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: alignmentMap[alignment],
          alignContent: alignmentMap[runAlignment],
          alignItems: crossAxisMap[crossAxisAlignment],
          gap: spacing,
          rowGap: runSpacing,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
