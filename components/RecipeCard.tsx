import { Dimensions, Image, StyleSheet, View } from "react-native";
import { color, space, typography } from "../theme/index";
import AppText from "./base/AppText";
import CardWrapper from "./base/CardWrapper";

type Props = {
  id: number;
  title: string;
  image: string | undefined;
};

const screenWidth = Dimensions.get("window").width;
const screenWidthExGap = screenWidth - space.base * 2 - space.xs;
const imgHeight = screenWidthExGap / 2;

export default function RecipeCard({ id, title, image }: Props) {
  return (
    <CardWrapper
      href={`/recipes/${id}`}
      style={styles.card}
      accessibilityLabel={`Move to ${title} recipe`}
    >
      {image ? (
        <Image
          accessibilityLabel={`${title} image`}
          source={{ uri: image }}
          style={styles.image}
        />
      ) : (
        <View style={styles.placeholderImage}>
          <AppText style={styles.title}>No Image</AppText>
        </View>
      )}

      <View style={styles.content}>
        <AppText style={styles.title}>{title}</AppText>
      </View>
    </CardWrapper>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: color.backgroundWhite,
  },
  placeholderImage: {
    width: "100%",
    height: 200,
    padding: space.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: typography.fontSize.base,
  },
  image: {
    width: "100%",
    height: imgHeight,
  },
  content: {
    padding: 20,
  },
});
