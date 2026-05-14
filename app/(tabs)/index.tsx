import { ScrollView, StyleSheet, Text } from "react-native";
import RecipeCard from "../../components/RecipeCard";
import { recipes } from "../../data/recipes";
import { color, space, typography } from "../../theme/index";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>My Recipe Collection</Text>

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
  container: {
    paddingTop: space.xxl,
    paddingInline: space.base,
    paddingBottom: space.lg,
    backgroundColor: color.background,
  },
  logo: {
    height: typography.fontSize.xxl * 1.5, // Increased height to make the logo container larger
    width: typography.fontSize.xxl * 3, // Increased width to make the logo container wider
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: typography.fontSize.xxl,
    lineHeight: typography.fontSize.xxl * typography.lineHeight.normal,
    color: color.text,
    fontWeight: typography.fontWeight.bold,
  },
  sectionTitle: {
    fontFamily: typography.fontFamily.headline,
    fontSize: typography.fontSize.md,
    marginBottom: space.md,
    color: color.text,
  },
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
