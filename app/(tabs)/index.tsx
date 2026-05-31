import { ScrollView, StyleSheet, View } from "react-native";
import AppText from "../../components/base/AppText";
import CategoryCard from "../../components/CategoryCard";
import SearchBar from "../../components/SearchBar";
import { categories } from "../../data/categories";
import { color, space, typography } from "../../theme/index";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <SearchBar />
      <AppText variant="heading" style={styles.sectionTitle}>
        Categories
      </AppText>
      <View style={styles.categoryContainer}>
        {categories.map((cagtegory) => (
          <CategoryCard key={cagtegory.id} item={cagtegory} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: space.xxl,
    paddingBottom: space.lg,
    backgroundColor: color.background,
  },
  logoText: {
    fontSize: typography.fontSize.xxl,
    lineHeight: typography.fontSize.xxl * typography.lineHeight.normal,
    color: color.text,
    fontWeight: typography.fontWeight.bold,
  },
  sectionTitle: {
    fontSize: typography.fontSize.md,
    paddingHorizontal: space.md,
    paddingTop: space.md,
    paddingBottom: space.xs,
    textTransform: "uppercase",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: space.xs,
  },
});
