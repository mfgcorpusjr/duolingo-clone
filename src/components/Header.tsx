import { StyleSheet, View, Image, Text } from "react-native";

import ProgressBar from "@/components/ProgressBar";

type HeaderProps = {
  lives: number;
  progress: number;
};

export default function Header({ progress, lives }: HeaderProps) {
  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />

      <Image
        style={styles.heartIcon}
        source={require("@assets/images/heart.png")}
        resizeMode="contain"
      />

      <Text style={styles.lives}>{lives}</Text>
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
