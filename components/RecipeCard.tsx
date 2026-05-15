import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";
import AppText from "./AppText";

type Props = {
  id: number;
  title: string;
  image: string | undefined;
};

export default function RecipeCard({ id, title, image }: Props) {
  return (
    <Link href={`/recipes/${id}`} asChild>
      <Pressable
        style={styles.card}
        accessibilityRole="button"
        accessibilityLabel={`Move to ${title} recipe`}
      >
        <Image
          accessibilityLabel={image ? `${title} image` : "No Image"}
          source={
            image ? { uri: image } : require("../assets/images/cooking-pot.png")
          }
          style={styles.image}
        />
        <View style={styles.content}>
          <AppText style={styles.title}>{title}</AppText>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "pink",
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  content: {
    padding: 20,
  },
});
