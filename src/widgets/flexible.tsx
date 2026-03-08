import { View, ViewStyle } from "react-native";

type FlexFit = "tight" | "loose";

type FlexibleProps = {
  /** The content to make flexible. */
  children: React.ReactNode;
  /**
   * The flex factor for this child.
   * @default 1
   */
  flex?: number;
  /**
   * How the child fills the space allocated to it.
   *
   * - `tight` — the child is forced to fill all allocated space (same as `Expanded`)
   * - `loose` — the child can be smaller than its allocated space
   *
   * @default "loose"
   */
  fit?: FlexFit;
  /** Additional styles applied to the wrapping View. */
  style?: ViewStyle;
};

/**
 * A widget that gives its child flexible space within a `Row` or `Column`.
 *
 * Equivalent to Flutter's `Flexible` widget. Similar to `Expanded`, but
 * with `fit="loose"` the child is not forced to fill all allocated space.
 *
 * Use `Expanded` when you always want the child to fill available space.
 * Use `Flexible` when you want the child to take up space but not be forced to stretch.
 *
 * @example
 * // Two children share space but aren't forced to fill it
 * <Row>
 *   <Flexible flex={2}>
 *     <Text>Takes up 2/3 of space but won't stretch</Text>
 *   </Flexible>
 *   <Flexible flex={1}>
 *     <Text>Takes up 1/3</Text>
 *   </Flexible>
 * </Row>
 *
 * @example
 * // Force fill with tight fit (same as Expanded)
 * <Flexible fit="tight">
 *   <TextInput />
 * </Flexible>
 */
export function Flexible({ children, flex = 1, fit = "loose", style }: FlexibleProps) {
  return (
    <View
      style={[
        {
          flex,
          alignSelf: fit === "tight" ? "stretch" : "auto",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
