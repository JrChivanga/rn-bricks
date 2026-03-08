import { View, ViewStyle } from "react-native";

// ─────────────────────────────────────────────
// AspectRatio
// ─────────────────────────────────────────────

type AspectRatioProps = {
  /** The content to constrain to the given aspect ratio. */
  children: React.ReactNode;
  /**
   * The aspect ratio expressed as `width / height`.
   *
   * @example
   * ratio={16 / 9}  // widescreen
   * ratio={4 / 3}   // standard
   * ratio={1}       // square
   */
  ratio: number;
  /** Additional styles applied to the wrapping View. */
  style?: ViewStyle;
};

/**
 * Sizes its child to a fixed aspect ratio.
 *
 * Equivalent to Flutter's `AspectRatio` widget. The child should use
 * `style={{ flex: 1 }}` to fill the constrained box.
 *
 * @example
 * // 16:9 video thumbnail
 * <AspectRatio ratio={16 / 9}>
 *   <Image source={thumbnail} style={{ flex: 1 }} />
 * </AspectRatio>
 *
 * @example
 * // Square avatar
 * <AspectRatio ratio={1}>
 *   <Image source={avatar} style={{ flex: 1, borderRadius: 999 }} />
 * </AspectRatio>
 */
export function AspectRatio({ children, ratio, style }: AspectRatioProps) {
  return <View style={[{ aspectRatio: ratio }, style]}>{children}</View>;
}