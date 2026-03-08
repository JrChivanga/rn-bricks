import { View, ViewStyle } from "react-native";

type FractionallySizedBoxProps = {
  /** The widget to size fractionally. */
  children?: React.ReactNode;
  /**
   * The fraction of the available width to use, between `0.0` and `1.0`.
   *
   * @example
   * widthFactor={0.5}  // 50% of available width
   * widthFactor={1}    // 100% of available width
   */
  widthFactor?: number;
  /**
   * The fraction of the available height to use, between `0.0` and `1.0`.
   *
   * @example
   * heightFactor={0.5}  // 50% of available height
   */
  heightFactor?: number;
  /** Additional styles applied to the wrapping View. */
  style?: ViewStyle;
};

/**
 * Sizes its child to a fraction of the available space.
 *
 * Equivalent to Flutter's `FractionallySizedBox` widget.
 *
 * @example
 * // Button that fills 80% of the screen width
 * <FractionallySizedBox widthFactor={0.8}>
 *   <Button title="Continue" />
 * </FractionallySizedBox>
 *
 * @example
 * // Half-width, half-height box
 * <FractionallySizedBox widthFactor={0.5} heightFactor={0.5}>
 *   <View style={{ flex: 1, backgroundColor: "red" }} />
 * </FractionallySizedBox>
 */
export function FractionallySizedBox({
  children,
  widthFactor,
  heightFactor,
  style,
}: FractionallySizedBoxProps) {
  return (
    <View
      style={[
        {
          width: widthFactor !== undefined ? `${widthFactor * 100}%` : undefined,
          height: heightFactor !== undefined ? `${heightFactor * 100}%` : undefined,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}