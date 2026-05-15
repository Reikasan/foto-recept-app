import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";
import { color, space, typography } from "../theme/index";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={typography.fontSize.md}
        color={color.text}
      />
      <TextInput
        style={styles.input}
        placeholder="Search recipes..."
        accessibilityLabel="Search Recipes"
        returnKeyType="search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.borderGrey,
    borderRadius: 5,
    paddingLeft: space.xs,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: space.xs,
    paddingRight: space.sm,
    paddingInline: space.base,
    fontSize: typography.fontSize.base,
  },
});
