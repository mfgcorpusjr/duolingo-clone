import { StyleSheet, Pressable, Text } from "react-native";

import colors from "@/constants/colors";

type ButtonProps = {
  text: string;
  isDisabled?: boolean;
  onPress: () => void;
};

export default function Button({ text, isDisabled, onPress }: ButtonProps) {
  return (
    <Pressable
      style={[styles.container, isDisabled && styles.disabledContainer]}
      disabled={isDisabled}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightGreen,
    borderBottomWidth: 8,
    borderBottomColor: colors.darkGreen,
    borderRadius: 12,
  },
  disabledContainer: {
    backgroundColor: "lightgrey",
    borderBottomColor: "grey",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    textDecorationLine: "underline",
    letterSpacing: 1.5,
  },
});
