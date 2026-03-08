import { View, ViewStyle } from "react-native";

type VisibilityProps = {
  /** The widget to show or hide. */
  children: React.ReactNode;
  /**
   * Whether the child is visible.
   *
   * When `false`, the child is hidden but still occupies its layout space,
   * equivalent to `opacity: 0` — not `display: none`.
   *
   * @default true
   */
  visible?: boolean;
  /**
   * When `true`, the child is completely removed from the tree when hidden,
   * freeing its layout space. Equivalent to `display: none`.
   *
   * @default false
   */
  maintainSize?: boolean;
  /** Additional styles applied to the wrapping View. */
  style?: ViewStyle;
};

/**
 * Shows or hides its child while optionally preserving layout space.
 *
 * Equivalent to Flutter's `Visibility` widget.
 *
 * - `visible=false` + `maintainSize=true` → hidden but still takes up space (`opacity: 0`)
 * - `visible=false` + `maintainSize=false` → completely removed from layout (`display: none`)
 *
 * @example
 * // Hide an error message but preserve its space
 * <Visibility visible={hasError} maintainSize>
 *   <Text style={{ color: "red" }}>Something went wrong</Text>
 * </Visibility>
 *
 * @example
 * // Completely remove a widget from layout when hidden
 * <Visibility visible={isLoggedIn}>
 *   <UserMenu />
 * </Visibility>
 */
export function Visibility({
  children,
  visible = true,
  maintainSize = false,
  style,
}: VisibilityProps) {
  if (!visible && !maintainSize) {
    return null;
  }

  return (
    <View style={[{ opacity: visible ? 1 : 0 }, style]}>
      {children}
    </View>
  );
}
