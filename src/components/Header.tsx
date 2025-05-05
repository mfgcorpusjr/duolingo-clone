import { StyleSheet, View, Image, Text } from "react-native";

import ProgressBar from "@/components/ProgressBar";

export default function Header() {
  return (
    <View style={styles.container}>
      <ProgressBar />

      <Image
        style={styles.heartIcon}
        source={require("@assets/images/heart.png")}
        resizeMode="contain"
      />

      <Text style={styles.lives}>3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  heartIcon: {
    width: 24,
    aspectRatio: 1,
  },
  lives: {
    fontSize: 20,
    fontWeight: "600",
    color: "red",
  },
});
