# rn-bricks

Flutter-inspired layout widgets for React Native and Expo. If you know Flutter, you already know how to use this.

## Installation

```bash
bun add github:yourname/rn-bricks
```

## Why

React Native's layout primitives (`View`, `StyleSheet`) are powerful but verbose. Flutter's widget system is expressive and readable. `rn-bricks` brings Flutter's layout vocabulary to React Native — so instead of this:

```tsx
<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
  <Text>Left</Text>
  <Text>Right</Text>
</View>
```

You write this:

```tsx
<Row mainAxisAlignment="spaceBetween">
  <Text>Left</Text>
  <Text>Right</Text>
</Row>
```

---

## Widgets

### `Row`

Lays out children horizontally. Equivalent to Flutter's `Row`.

```tsx
import { Row } from 'rn-bricks';

// Space items apart
<Row mainAxisAlignment="spaceBetween">
  <Text>Left</Text>
  <Text>Right</Text>
</Row>

// Centered, shrink-wrapped
<Row mainAxisAlignment="center" mainAxisSize="min">
  <Icon name="star" />
  <SizedBox width={8} />
  <Text>Favourites</Text>
</Row>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `mainAxisAlignment` | `start` `end` `center` `spaceBetween` `spaceAround` `spaceEvenly` | `start` | Alignment along the horizontal axis |
| `crossAxisAlignment` | `start` `end` `center` `stretch` | `center` | Alignment along the vertical axis |
| `mainAxisSize` | `max` `min` | `max` | Whether to fill available width or shrink-wrap |

---

### `Column`

Lays out children vertically. Equivalent to Flutter's `Column`.

```tsx
import { Column } from 'rn-bricks';

// Centered column
<Column mainAxisAlignment="center" crossAxisAlignment="center">
  <Text>Hello</Text>
  <SizedBox height={8} />
  <Text>World</Text>
</Column>

// Push footer to bottom
<Column mainAxisAlignment="spaceBetween">
  <Text>Content</Text>
  <Text>Footer</Text>
</Column>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `mainAxisAlignment` | `start` `end` `center` `spaceBetween` `spaceAround` `spaceEvenly` | `start` | Alignment along the vertical axis |
| `crossAxisAlignment` | `start` `end` `center` `stretch` | `start` | Alignment along the horizontal axis |
| `mainAxisSize` | `max` `min` | `max` | Whether to fill available height or shrink-wrap |

---

### `SizedBox`

A fixed-size box. Equivalent to Flutter's `SizedBox`. Most commonly used as a gap between widgets.

```tsx
import { SizedBox } from 'rn-bricks';

// Vertical gap
<Column>
  <Text>Hello</Text>
  <SizedBox height={16} />
  <Text>World</Text>
</Column>

// Horizontal gap
<Row>
  <Icon name="star" />
  <SizedBox width={8} />
  <Text>Favourites</Text>
</Row>
```

| Prop | Type | Description |
|---|---|---|
| `width` | `number` | Fixed width in dp |
| `height` | `number` | Fixed height in dp |

---

### `Expanded`

Expands a child to fill remaining space along the main axis. Equivalent to Flutter's `Expanded`.

```tsx
import { Expanded } from 'rn-bricks';

// Input fills remaining row space
<Row>
  <Icon name="search" />
  <Expanded>
    <TextInput placeholder="Search..." />
  </Expanded>
</Row>

// Two children share space in a 1:2 ratio
<Column>
  <Expanded flex={1}><View /></Expanded>
  <Expanded flex={2}><View /></Expanded>
</Column>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `flex` | `number` | `1` | The flex factor |

---

### `Spacer`

A flexible empty gap that fills available space. Equivalent to Flutter's `Spacer`.

```tsx
import { Spacer } from 'rn-bricks';

// Push items to opposite ends
<Row>
  <Text>Left</Text>
  <Spacer />
  <Text>Right</Text>
</Row>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `flex` | `number` | `1` | The flex factor |

---

### `Center`

Centers its child both horizontally and vertically. Equivalent to Flutter's `Center`.

```tsx
import { Center } from 'rn-bricks';

// Full screen centered empty state
<Center>
  <Text>Nothing here yet</Text>
</Center>

// Shrink-wrap, don't fill
<Center flex={0}>
  <ActivityIndicator />
</Center>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `flex` | `number` | `1` | The flex factor. Set to `0` to shrink-wrap |

---

### `Padding`

Applies padding around its child. Equivalent to Flutter's `Padding`.

```tsx
import { Padding } from 'rn-bricks';

// Uniform padding
<Padding all={16}>
  <Text>Hello</Text>
</Padding>

// Axis padding
<Padding horizontal={24} vertical={12}>
  <Text>Hello</Text>
</Padding>

// Per-side padding
<Padding top={8} left={16}>
  <Text>Hello</Text>
</Padding>
```

| Prop | Type | Description |
|---|---|---|
| `all` | `number` | Equal padding on all sides |
| `horizontal` | `number` | Padding on left and right |
| `vertical` | `number` | Padding on top and bottom |
| `top` | `number` | Top padding only |
| `bottom` | `number` | Bottom padding only |
| `left` | `number` | Left padding only |
| `right` | `number` | Right padding only |

---

### `Stack` + `Positioned`

Overlays children on top of each other. Equivalent to Flutter's `Stack` and `Positioned`.

```tsx
import { Stack, Positioned } from 'rn-bricks';

// Badge over avatar
<Stack style={{ width: 48, height: 48 }}>
  <Image source={avatar} style={{ flex: 1, borderRadius: 24 }} />
  <Positioned top={0} right={0}>
    <Badge count={3} />
  </Positioned>
</Stack>

// FAB pinned to bottom right
<Stack style={{ flex: 1 }}>
  <Content />
  <Positioned bottom={24} right={24}>
    <FAB />
  </Positioned>
</Stack>
```

**Stack props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `alignment` | `topLeft` `topCenter` `topRight` `centerLeft` `center` `centerRight` `bottomLeft` `bottomCenter` `bottomRight` | `topLeft` | Alignment of non-positioned children |

**Positioned props:**

| Prop | Type | Description |
|---|---|---|
| `top` | `number` | Distance from the top edge |
| `bottom` | `number` | Distance from the bottom edge |
| `left` | `number` | Distance from the left edge |
| `right` | `number` | Distance from the right edge |
| `width` | `number` | Explicit width |
| `height` | `number` | Explicit height |

---

### `Wrap`

Flows children into multiple lines when they overflow. Equivalent to Flutter's `Wrap`.

```tsx
import { Wrap } from 'rn-bricks';

// Tag cloud
<Wrap spacing={8} runSpacing={8}>
  <Chip label="React Native" />
  <Chip label="Expo" />
  <Chip label="TypeScript" />
</Wrap>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `alignment` | `start` `end` `center` `spaceBetween` `spaceAround` `spaceEvenly` | `start` | Alignment within each run |
| `runAlignment` | same as above | `start` | Alignment of runs along the cross axis |
| `spacing` | `number` | `0` | Gap between children along the main axis |
| `runSpacing` | `number` | `0` | Gap between runs along the cross axis |

---

### `Visibility`

Shows or hides its child while optionally preserving layout space. Equivalent to Flutter's `Visibility`.

```tsx
import { Visibility } from 'rn-bricks';

// Hide but preserve space
<Visibility visible={hasError} maintainSize>
  <Text style={{ color: "red" }}>Something went wrong</Text>
</Visibility>

// Remove from layout entirely
<Visibility visible={isLoggedIn}>
  <UserMenu />
</Visibility>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `visible` | `boolean` | `true` | Whether the child is visible |
| `maintainSize` | `boolean` | `false` | Preserve layout space when hidden |

---

### `ClipRRect`

Clips its child to rounded corners. Equivalent to Flutter's `ClipRRect`.

```tsx
import { ClipRRect } from 'rn-bricks';

// Rounded image
<ClipRRect borderRadius={12}>
  <Image source={thumbnail} style={{ width: 120, height: 80 }} />
</ClipRRect>

// Circular avatar
<ClipRRect borderRadius={999}>
  <Image source={avatar} style={{ width: 48, height: 48 }} />
</ClipRRect>

// Per-corner radius
<ClipRRect borderRadius={{ topLeft: 16, topRight: 16 }}>
  <View style={{ backgroundColor: "white", padding: 16 }}>
    <Text>Card content</Text>
  </View>
</ClipRRect>
```

| Prop | Type | Description |
|---|---|---|
| `borderRadius` | `number` or `{ topLeft?, topRight?, bottomLeft?, bottomRight? }` | The clip radius |

---

### `Divider` + `VerticalDivider`

Thin separator lines. Equivalent to Flutter's `Divider` and `VerticalDivider`.

```tsx
import { Divider, VerticalDivider } from 'rn-bricks';

// Horizontal separator
<Column>
  <ListItem title="Item 1" />
  <Divider indent={16} endIndent={16} />
  <ListItem title="Item 2" />
</Column>

// Vertical separator in a row
<Row>
  <Button title="Cancel" />
  <VerticalDivider indent={8} endIndent={8} />
  <Button title="Confirm" />
</Row>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `thickness` | `number` | `1` | Line thickness in dp |
| `color` | `string` | `#e0e0e0` | Line color |
| `indent` | `number` | `0` | Leading indent |
| `endIndent` | `number` | `0` | Trailing indent |

---

### `Flexible`

Like `Expanded`, but with a `loose` fit that doesn't force the child to fill its space. Equivalent to Flutter's `Flexible`.

```tsx
import { Flexible } from 'rn-bricks';

<Row>
  <Flexible flex={2}>
    <Text>Takes 2/3 of space, won't stretch</Text>
  </Flexible>
  <Flexible flex={1}>
    <Text>Takes 1/3</Text>
  </Flexible>
</Row>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `flex` | `number` | `1` | The flex factor |
| `fit` | `tight` `loose` | `loose` | Whether to force fill allocated space |

---

### `FractionallySizedBox`

Sizes its child as a fraction of available space. Equivalent to Flutter's `FractionallySizedBox`.

```tsx
import { FractionallySizedBox } from 'rn-bricks';

// Button fills 80% of screen width
<FractionallySizedBox widthFactor={0.8}>
  <Button title="Continue" />
</FractionallySizedBox>
```

| Prop | Type | Description |
|---|---|---|
| `widthFactor` | `number` | Width as a fraction of available space (`0.0` – `1.0`) |
| `heightFactor` | `number` | Height as a fraction of available space (`0.0` – `1.0`) |

---

### `LimitedBox`

Constrains its child to a maximum size. Equivalent to Flutter's `LimitedBox`.

```tsx
import { LimitedBox } from 'rn-bricks';

// Prevent text from stretching too wide
<LimitedBox maxWidth={480}>
  <Text>Long form content...</Text>
</LimitedBox>
```

| Prop | Type | Description |
|---|---|---|
| `maxWidth` | `number` | Maximum width in dp |
| `maxHeight` | `number` | Maximum height in dp |

---

### `DecoratedBox`

A box with background color, border, border radius, and shadow. Equivalent to Flutter's `DecoratedBox`.

```tsx
import { DecoratedBox } from 'rn-bricks';

// iOS shadow
<DecoratedBox
  color="white"
  borderRadius={16}
  boxShadow={{ color: "#00000020", offsetX: 0, offsetY: 4, blurRadius: 12 }}
>
  <Padding all={16}>
    <Text>Content</Text>
  </Padding>
</DecoratedBox>

// Outlined box
<DecoratedBox color="#f9f9f9" borderRadius={8} borderWidth={1} borderColor="#e0e0e0">
  <Padding all={12}>
    <Text>Outlined</Text>
  </Padding>
</DecoratedBox>
```

| Prop | Type | Description |
|---|---|---|
| `color` | `string` | Background color |
| `borderRadius` | `number` | Uniform border radius |
| `borderRadiusEach` | `{ topLeft?, topRight?, bottomLeft?, bottomRight? }` | Per-corner border radius |
| `borderWidth` | `number` | Border thickness |
| `borderColor` | `string` | Border color |
| `boxShadow` | `{ color, offsetX?, offsetY?, blurRadius? }` | iOS shadow config |
| `elevation` | `number` | Android shadow elevation |

---

### `Card`

A surface that groups related content. Built on `DecoratedBox` with Material Design 3 variants. Equivalent to Flutter's `Card`.

```tsx
import { Card } from 'rn-bricks';

// Elevated (default)
<Card>
  <Padding all={16}>
    <Text>Hello</Text>
  </Padding>
</Card>

// Outlined
<Card variant="outlined">
  <Padding all={16}>
    <Text>Outlined</Text>
  </Padding>
</Card>

// Filled
<Card variant="filled" borderRadius={24}>
  <Padding all={20}>
    <Text>Filled</Text>
  </Padding>
</Card>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `elevated` `filled` `outlined` | `elevated` | Visual style |
| `borderRadius` | `number` | `12` | Corner radius |
| `elevation` | `number` | `2` | Android shadow elevation (elevated variant only) |

---

### `Opacity`

Applies opacity to its child. Equivalent to Flutter's `Opacity`.

```tsx
import { Opacity } from 'rn-bricks';

<Opacity value={0.4}>
  <Button title="Disabled" />
</Opacity>
```

| Prop | Type | Description |
|---|---|---|
| `value` | `number` | Opacity between `0.0` and `1.0` |

---

### `AspectRatio`

Sizes its child to a fixed aspect ratio. Equivalent to Flutter's `AspectRatio`.

```tsx
import { AspectRatio } from 'rn-bricks';

// 16:9 thumbnail
<AspectRatio ratio={16 / 9}>
  <Image source={thumbnail} style={{ flex: 1 }} />
</AspectRatio>

// Square avatar
<AspectRatio ratio={1}>
  <Image source={avatar} style={{ flex: 1, borderRadius: 999 }} />
</AspectRatio>
```

| Prop | Type | Description |
|---|---|---|
| `ratio` | `number` | Aspect ratio as `width / height` |

---

## Putting it all together

```tsx
import {
  Column, Row, Card, Padding, SizedBox,
  Spacer, Expanded, ClipRRect, Divider
} from 'rn-bricks';

export default function ProfileScreen() {
  return (
    <Column>
      <Card variant="outlined">
        <Padding all={16}>
          <Row>
            <ClipRRect borderRadius={999}>
              <Image source={avatar} style={{ width: 48, height: 48 }} />
            </ClipRRect>
            <SizedBox width={12} />
            <Column mainAxisSize="min" crossAxisAlignment="start">
              <Text style={{ fontWeight: "bold" }}>Jane Doe</Text>
              <Text style={{ color: "#888" }}>@janedoe</Text>
            </Column>
            <Spacer />
            <Button title="Follow" />
          </Row>
        </Padding>
        <Divider />
        <Padding all={16}>
          <Text>Building things with React Native and Expo.</Text>
        </Padding>
      </Card>
    </Column>
  );
}
```

---

## Requirements

- Expo SDK 55+
- React Native 0.83+
- React 19+

## License

MIT