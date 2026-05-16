import { Link } from "expo-router";
import { Pressable, StyleSheet, ViewStyle } from "react-native";

type Props = {
  href: string;
  children: React.ReactNode;
  style?: ViewStyle;
  accessibilityLabel?: string;
};

export default function CardWrapper({
  href,
  children,
  style,
  accessibilityLabel,
  ...props
}: Props) {
  return (
    <Link href={href} asChild>
      <Pressable
        style={StyleSheet.flatten([styles.card, style])}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        {...props}
      >
        {children}
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
  },
});
