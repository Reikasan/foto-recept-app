import { Text, TextProps } from "react-native";
import { color, typography } from "../../theme/index";

type Variant = "body" | "heading";

type Props = TextProps & {
  children: React.ReactNode;
  variant?: Variant;
};

export default function AppText({
  children,
  variant = "body",
  style,
  ...props
}: Props) {
  return (
    <Text style={[variantStyles[variant], style]} {...props}>
      {children}
    </Text>
  );
}

const variantStyles = {
  body: {
    fontFamily: typography.fontFamily.text,
    fontSize: typography.fontSize.base,
    color: color.text,
  },
  heading: {
    fontSize: typography.fontSize.lg,
    fontFamily: typography.fontFamily.headline,
    color: color.text,
  },
};
