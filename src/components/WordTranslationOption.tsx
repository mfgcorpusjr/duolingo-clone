import { StyleSheet, View, Text, Pressable } from "react-native";

import { TWordTranslationOption } from "@/types";

import colors from "@/constants/colors";

type WordTranslationOptionProps = {
  option: TWordTranslationOption;
  isSelected?: boolean;
  onPress: () => void;
};

export default function WordTranslationOption({
  option,
  isSelected,
  onPress,
}: WordTranslationOptionProps) {
  return (
    <Pressable
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={onPress}
    >
      <Text style={styles.text}>{option.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderBottomWidth: 8,
    borderColor: "lightgrey",
    borderRadius: 12,
    padding: 12,
  },
  selectedContainer: {
    backgroundColor: colors.lightBlue,
    borderColor: colors.darkBlue,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
