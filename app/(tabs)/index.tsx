import { ScrollView, StyleSheet, Text, View } from "react-native";

const recipes = [
  { id: 1, title: "salad" },
  { id: 2, title: "curry" },
  { id: 1, title: "pasta" },
];

export default function HomeScreen() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Show all Recipes</Text>

      {recipes.map((item) => (
        <View
          key={item.id}
          style={{
            padding: 15,
            marginBottom: 10,
            backgroundColor: "#eee",
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 16 }}>{item.title}</Text>
        </View>
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
