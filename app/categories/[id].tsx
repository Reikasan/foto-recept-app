import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import AppText from "../../components/base/AppText";
import RecipeCard from "../../components/RecipeCard";
import SearchBar from "../../components/SearchBar";
import { categories } from "../../data/categories";
import { recipes } from "../../data/recipes";
import { color, space } from "../../theme/index";

export default function CategoryDetail() {
  const { id } = useLocalSearchParams();

  const category = categories.find((c) => c.id.toString() === id);
  const categoryRecipes = recipes.filter((r) =>
    r.categories?.includes(Number(id)),
  );

  if (!category) {
    return (
      <View style={{ padding: 20 }}>
        <AppText>Category not found (ID: {id})</AppText>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}></View>
      <SearchBar />
      <AppText>{category.title}</AppText>
      <AppText>{categoryRecipes.length} Recipes</AppText>

      <View style={{ width: "50%" }}>
        {categoryRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: space.base,
    flex: 1,
    backgroundColor: color.background,
  },
  textContainer: {
    paddingInline: space.base,
  },
});
