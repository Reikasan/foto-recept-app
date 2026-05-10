import { StyleSheet, Text, View } from "react-native";
import { Typography } from "../theme/typography";
import { IngredientType } from "../types/recipe";

type Props = {
  items: IngredientType[];
};

export default function IngredientList({ items }: Props) {
  return (
    <View>
      <Text style={styles.title}>Ingredients</Text>
      {items.map((item) => (
        <Text key={item.id}>
          {item.name}: {item.amount}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: Typography.fontSize.lg,
  },
});
