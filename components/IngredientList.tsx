import { StyleSheet, View } from "react-native";
import { typography } from "../theme/index";
import { IngredientType } from "../types/recipe";
import AppText from "./AppText";

type Props = {
  items: IngredientType[];
};

export default function IngredientList({ items }: Props) {
  return (
    <View>
      <AppText style={styles.title}>Ingredients</AppText>
      {items.map((item) => (
        <AppText key={item.id}>
          {item.name}: {item.amount}
        </AppText>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: typography.fontSize.lg,
  },
});
