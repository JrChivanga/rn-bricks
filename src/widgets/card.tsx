import { ViewStyle } from "react-native";
import { DecoratedBox } from "./decorated-box";

type CardVariant = "elevated" | "filled" | "outlined";

type CardProps = {
  /** The content to display inside the card. */
  children: React.ReactNode;
  /**
   * The visual style of the card.
   *
   * - `elevated` — white background with a drop shadow
   * - `filled` — light grey background, no shadow
   * - `outlined` — white background with a border, no shadow
   *
   * @default "elevated"
   */
  variant?: CardVariant;
  /**
   * Border radius of the card.
   * @default 12
   */
  borderRadius?: number;
  /**
   * Android elevation for the card shadow.
   * Only applies to the `elevated` variant.
   * @default 2
   */
  elevation?: number;
  /** Additional styles applied to the card. */
  style?: ViewStyle;
};

const variantStyles: Record<CardVariant, {
  color: string;
  borderWidth?: number;
  borderColor?: string;
  boxShadow?: { color: string; offsetX: number; offsetY: number; blurRadius: number };
  elevation?: number;
}> = {
  elevated: {
    color: "#ffffff",
    boxShadow: { color: "#00000018", offsetX: 0, offsetY: 2, blurRadius: 8 },
  },
  filled: {
    color: "#f3f3f3",
  },
  outlined: {
    color: "#ffffff",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
};

/**
 * A surface widget that groups related content with a background, border radius, and optional shadow.
 *
 * Built on top of `DecoratedBox` with three Material Design 3 variants.
 *
 * @example
 * // Basic elevated card
 * <Card>
 *   <Padding all={16}>
 *     <Text>Hello</Text>
 *   </Padding>
 * </Card>
 *
 * @example
 * // Outlined card with no shadow
 * <Card variant="outlined">
 *   <Padding all={16}>
 *     <Text>Outlined</Text>
 *   </Padding>
 * </Card>
 *
 * @example
 * // Filled card with custom border radius
 * <Card variant="filled" borderRadius={24}>
 *   <Padding all={20}>
 *     <Text>Filled</Text>
 *   </Padding>
 * </Card>
 */
export function Card({
  children,
  variant = "elevated",
  borderRadius = 12,
  elevation = 2,
  style,
}: CardProps) {
  const { color, borderWidth, borderColor, boxShadow } = variantStyles[variant];

  return (
    <DecoratedBox
      color={color}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      borderColor={borderColor}
      boxShadow={boxShadow}
      elevation={variant === "elevated" ? elevation : 0}
      style={style}
    >
      {children}
    </DecoratedBox>
  );
}