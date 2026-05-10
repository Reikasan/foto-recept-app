import { ScrollView, StyleSheet, Text } from "react-native";
import RecipeCard from "../../components/RecipeCard";
import { recipes } from "../../data/recipes";

export default function HomeScreen() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Show all Recipes</Text>

      {recipes.map((item) => (
        <RecipeCard
          key={item.id}
          title={item.title}
          id={item.id}
          image={item.image}
          ingredients={item.ingredients}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
