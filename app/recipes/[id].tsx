import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import AppText from "../../components/base/AppText";
import IngredientList from "../../components/IngredientList";
import { recipes } from "../../data/recipes";

export default function RecipeDetail() {
  const { id } = useLocalSearchParams();

  // Convert id to string for comparison as params are usually strings
  const recipe = recipes.find((r) => r.id.toString() === id);
  if (!recipe) {
    return (
      <View style={{ padding: 20 }}>
        <AppText>Recipe not found (ID: {id})</AppText>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={
          recipe.image
            ? { uri: recipe.image }
            : require("../../assets/images/cooking-pot.png")
        }
        style={styles.image}
      />
      <View style={{ padding: 20 }}>
        <AppText style={styles.title}>{recipe.title}</AppText>
        <IngredientList items={recipe.ingredients} />
        <AppText style={styles.note}>{recipe.note}</AppText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  note: {
    lineHeight: 24,
  },
});
