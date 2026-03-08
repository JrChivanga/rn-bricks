import { View, ViewStyle } from "react-native";

// ─────────────────────────────────────────────
// Stack
// ─────────────────────────────────────────────

type StackAlignment =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "centerLeft"
  | "center"
  | "centerRight"
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight";

type StackProps = {
  /** The widgets to stack on top of each other. */
  children: React.ReactNode;
  /**
   * How to align non-positioned children within the stack.
   *
   * @default "topLeft"
   */
  alignment?: StackAlignment;
  /** Additional styles applied to the wrapping View. */
  style?: ViewStyle;
};

const alignmentMap: Record<StackAlignment, Pick<ViewStyle, "justifyContent" | "alignItems">> = {
  topLeft:      { justifyContent: "flex-start", alignItems: "flex-start" },
  topCenter:    { justifyContent: "flex-start", alignItems: "center" },
  topRight:     { justifyContent: "flex-start", alignItems: "flex-end" },
  centerLeft:   { justifyContent: "center",     alignItems: "flex-start" },
  center:       { justifyContent: "center",     alignItems: "center" },
  centerRight:  { justifyContent: "center",     alignItems: "flex-end" },
  bottomLeft:   { justifyContent: "flex-end",   alignItems: "flex-start" },
  bottomCenter: { justifyContent: "flex-end",   alignItems: "center" },
  bottomRight:  { justifyContent: "flex-end",   alignItems: "flex-end" },
};

/**
 * Overlays its children on top of each other.
 *
 * Equivalent to Flutter's `Stack` widget. Use with `Positioned` to place
 * children at specific offsets. Non-positioned children are aligned using
 * the `alignment` prop.
 *
 * @example
 * // Badge overlaid on an avatar
 * <Stack style={{ width: 48, height: 48 }}>
 *   <Image source={avatar} style={{ flex: 1, borderRadius: 24 }} />
 *   <Positioned top={0} right={0}>
 *     <Badge count={3} />
 *   </Positioned>
 * </Stack>
 *
 * @example
 * // Text centered over an image
 * <Stack alignment="center">
 *   <Image source={banner} style={{ width: "100%", height: 200 }} />
 *   <Text style={{ color: "white", fontSize: 24 }}>Hello</Text>
 * </Stack>
 */
export function Stack({ children, alignment = "topLeft", style }: StackProps) {
  return (
    <View style={[{ position: "relative" }, alignmentMap[alignment], style]}>
      {children}
    </View>
  );
}

// ─────────────────────────────────────────────
// Positioned
// ─────────────────────────────────────────────

type PositionedProps = {
  /** The widget to position within a Stack. */
  children: React.ReactNode;
  /** Distance from the top edge of the Stack. */
  top?: number;
  /** Distance from the bottom edge of the Stack. */
  bottom?: number;
  /** Distance from the left edge of the Stack. */
  left?: number;
  /** Distance from the right edge of the Stack. */
  right?: number;
  /**
   * Explicit width for the positioned child.
   * If both `left` and `right` are set, width is inferred automatically.
   */
  width?: number;
  /**
   * Explicit height for the positioned child.
   * If both `top` and `bottom` are set, height is inferred automatically.
   */
  height?: number;
  /** Additional styles applied to the wrapping View. */
  style?: ViewStyle;
};

/**
 * Positions a child at a specific offset within a `Stack`.
 *
 * Equivalent to Flutter's `Positioned` widget. Must be a direct child of `Stack`.
 *
 * @example
 * // Pin a button to the bottom right
 * <Stack style={{ flex: 1 }}>
 *   <Content />
 *   <Positioned bottom={24} right={24}>
 *     <FAB />
 *   </Positioned>
 * </Stack>
 *
 * @example
 * // Stretch a child to fill the full width at the bottom
 * <Stack style={{ flex: 1 }}>
 *   <Content />
 *   <Positioned bottom={0} left={0} right={0}>
 *     <BottomBar />
 *   </Positioned>
 * </Stack>
 */
export function Positioned({ children, top, bottom, left, right, width, height, style }: PositionedProps) {
  return (
    <View style={[{ position: "absolute", top, bottom, left, right, width, height }, style]}>
      {children}
    </View>
  );
}
