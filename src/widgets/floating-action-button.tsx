import { Pressable, Text, ViewStyle, TextStyle, PressableStateCallbackType } from "react-native";

// ─────────────────────────────────────────────
// FloatingActionButton
// ─────────────────────────────────────────────

type FabVariant = "regular" | "mini" | "extended";

type FloatingActionButtonProps = {
  /** Called when the button is pressed. */
  onPress: () => void;

  /**
   * The icon or widget to display inside the button.
   * For the `extended` variant, displayed to the left of the label.
   */
  child?: React.ReactNode;

  /**
   * Label text displayed next to the icon.
   * Required when `variant` is `"extended"`.
   */
  label?: string;

  /**
   * The visual size variant of the FAB.
   *
   * - `regular` — standard 56×56 circular button
   * - `mini` — compact 40×40 circular button
   * - `extended` — pill-shaped button with an optional icon and a label
   *
   * @default "regular"
   */
  variant?: FabVariant;

  /**
   * The background color of the FAB.
   * @default "#6750A4"
   */
  backgroundColor?: string;

  /**
   * The color applied to the icon and label.
   * @default "#FFFFFF"
   */
  foregroundColor?: string;

  /**
   * Android elevation for the drop shadow.
   * @default 6
   */
  elevation?: number;

  /**
   * iOS shadow configuration.
   * @default { color: "#00000040", offsetX: 0, offsetY: 3, blurRadius: 8 }
   */
  boxShadow?: {
    color: string;
    offsetX: number;
    offsetY: number;
    blurRadius: number;
  };

  /** Additional styles applied to the button. */
  style?: ViewStyle;
};

const variantStyles: Record<
  FabVariant,
  Pick<ViewStyle, "width" | "height" | "borderRadius" | "paddingHorizontal" | "gap">
> = {
  regular: { width: 56, height: 56, borderRadius: 16 },
  mini: { width: 40, height: 40, borderRadius: 12 },
  extended: { height: 56, borderRadius: 16, paddingHorizontal: 16, gap: 8 },
};

const defaultShadow = {
  color: "#00000040",
  offsetX: 0,
  offsetY: 3,
  blurRadius: 8,
};

/**
 * A circular (or pill-shaped) button that floats above the UI, representing
 * the primary action of a screen.
 *
 * Equivalent to Flutter's `FloatingActionButton` widget, including the
 * `mini` and `extended` variants.
 *
 * @example
 * // Regular FAB with an icon — pin it using Positioned inside a Stack
 * <Stack style={{ flex: 1 }}>
 *   <ScreenContent />
 *   <Positioned bottom={24} right={24}>
 *     <FloatingActionButton onPress={handleAdd}>
 *       <PlusIcon color="white" size={24} />
 *     </FloatingActionButton>
 *   </Positioned>
 * </Stack>
 *
 * @example
 * // Mini variant
 * <FloatingActionButton variant="mini" onPress={handleEdit}>
 *   <EditIcon color="white" size={16} />
 * </FloatingActionButton>
 *
 * @example
 * // Extended FAB with icon and label
 * <FloatingActionButton
 *   variant="extended"
 *   label="New post"
 *   onPress={handleCreate}
 * >
 *   <PlusIcon color="white" size={20} />
 * </FloatingActionButton>
 *
 * @example
 * // Custom colours
 * <FloatingActionButton
 *   backgroundColor="#E8DEF8"
 *   foregroundColor="#21005D"
 *   onPress={handleShare}
 * >
 *   <ShareIcon size={24} />
 * </FloatingActionButton>
 */
export function FloatingActionButton({
  onPress,
  child,
  label,
  variant = "regular",
  backgroundColor = "#6750A4",
  foregroundColor = "#FFFFFF",
  elevation = 6,
  boxShadow = defaultShadow,
  style,
}: FloatingActionButtonProps) {
  const { color, offsetX, offsetY, blurRadius } = boxShadow;

  const labelStyle: TextStyle = {
    color: foregroundColor,
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.1,
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }: PressableStateCallbackType) => [
        {
          backgroundColor,
          justifyContent: "center" as const,
          alignItems: "center" as const,
          flexDirection: "row" as const,
          opacity: pressed ? 0.85 : 1,
          // Android shadow
          elevation,
          // iOS shadow
          shadowColor: color,
          shadowOffset: { width: offsetX, height: offsetY },
          shadowOpacity: 1,
          shadowRadius: blurRadius,
        },
        variantStyles[variant],
        style,
      ]}
    >
      {child}
      {variant === "extended" && label ? <Text style={labelStyle}>{label}</Text> : null}
    </Pressable>
  );
}