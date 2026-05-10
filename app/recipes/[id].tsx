import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { recipes } from "../../data/recipes";

export default function RecipeDetail() {
  const { id } = useLocalSearchParams();

  // Convert id to string for comparison as params are usually strings
  const recipe = recipes.find((r) => r.id.toString() === id);
  if (recipe) console.log(recipe.title);
  if (!recipe) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Recipe not found (ID: {id})</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 40 }}>Recipe Detail</Text>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Recipe Title: {recipe.title}
      </Text>
      <Text>{recipe.note}</Text>
    </View>
  );
}
