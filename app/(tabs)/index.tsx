import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { recipes } from "../../data/recipes";

export default function HomeScreen() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Show all Recipes</Text>

      {recipes.map((item) => (
        <Link key={item.id} href={`/recipes/${item.id}`} asChild>
          <Pressable
            style={{
              padding: 15,
              marginBottom: 10,
              backgroundColor: "#eee",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>
              {item.title}, {item.id}
            </Text>
          </Pressable>
        </Link>
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
