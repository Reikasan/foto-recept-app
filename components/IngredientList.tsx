import { StyleSheet, Text, View } from "react-native";
import { typography } from "../theme/index";
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
    fontSize: typography.fontSize.lg,
  },
});
