import { StyleSheet, View, Image, Text } from "react-native";

import { TImageMultipleChoiceOption } from "@/types";

import colors from "@/constants/colors";

type ImageMultipleChoiceOptionProps = {
  option: TImageMultipleChoiceOption;
  isSelected?: boolean;
};

export default function ImageMultipleChoiceOption({
  option,
  isSelected,
}: ImageMultipleChoiceOptionProps) {
  return (
    <View style={[styles.container, isSelected && styles.selectedContainer]}>
      <Image
        style={styles.image}
        source={{ uri: option.image }}
        resizeMode="contain"
      />
      <Text style={styles.text}>{option.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "48%",
    height: "49%",
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
  image: {
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
