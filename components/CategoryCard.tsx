import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import { color, space, typography } from "../theme/index";
import { CategoryType } from "../types/category";
import AppText from "./base/AppText";
import CardWrapper from "./base/CardWrapper";

type Props = {
  item: CategoryType;
};

const screenWidth = Dimensions.get("window").width;
const screenWidthExGap = screenWidth - space.xs;

export default function CategoryCard({ item }: Props) {
  return (
    <CardWrapper
      href={`/categories/${item.id}`}
      style={StyleSheet.flatten([
        styles.card,
        variantStyles[item.shapeVariant],
        item.changePosition && positionStyle,
      ])}
      accessibilityLabel={`Move to ${item.title} category`}
    >
      <ImageBackground source={{ uri: item.image }} style={styles.image}>
        <LinearGradient
          colors={["transparent", "transparent", "rgba(0, 0, 0, 0.5)"]}
          style={styles.gradient}
        >
          <View style={styles.textContainer}>
            <AppText style={styles.title}>{item.title}</AppText>
            <AppText style={styles.count}>{item.count} recipes</AppText>
          </View>
        </LinearGradient>
      </ImageBackground>
    </CardWrapper>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 300,
    position: "relative",
  },
  gradient: {
    flex: 1,
    justifyContent: "flex-end",
  },
  textContainer: {
    position: "absolute",
    bottom: space.base,
    left: space.base,
  },
  title: {
    fontSize: typography.fontSize.lg,
    fontFamily: typography.fontFamily.headline,
    color: color.textInverse,
  },
  count: {
    fontFamily: typography.fontFamily.headline,
    color: color.textInverse,
  },
  image: {
    flex: 1,
    backgroundColor: color.borderGrey,
  },
});

const variantStyles = {
  vertical: {
    height: screenWidthExGap * 0.66,
    width: screenWidthExGap * 0.5,
  },
  verticalLg: {
    height: screenWidthExGap * 0.82,
    width: screenWidthExGap * 0.5,
  },
  horizontal: {
    width: screenWidth,
    height: screenWidth * 0.75,
  },
  square: {
    width: screenWidthExGap * 0.5,
    height: screenWidthExGap * 0.5,
    aspectRatio: 1,
  },
};

const positionStyle = {
  marginTop: screenWidthExGap * -0.16,
};
