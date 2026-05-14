export const typography = {
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    md: 20,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
  fontWeight: {
    light: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  fontFamily: {
    // These string values will be the keys used when loading fonts with useFonts in _layout.tsx
    // Choose descriptive names for your font families.
    text: "NotoSansRegular",
    headline: "PlayfairDisplayItalic",
  },
} as const;
