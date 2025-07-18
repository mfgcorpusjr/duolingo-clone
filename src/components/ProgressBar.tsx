import { StyleSheet, View } from "react-native";

import colors from "@/constants/colors";

type ProgressBarProps = {
  progress: number;
};

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.foreground, { width: `${progress}%` }]}>
        <View style={styles.highlight} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 24,
    backgroundColor: "lightgrey",
    borderRadius: 12,
    overflow: "hidden",
  },
  foreground: {
    flex: 1,
    backgroundColor: colors.darkYellow,
  },
  highlight: {
    width: "90%",
    height: "33%",
    backgroundColor: colors.lightYellow,
    borderRadius: 8,
    marginTop: 4,
    alignSelf: "center",
  },
});
