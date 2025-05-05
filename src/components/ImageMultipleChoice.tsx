import { StyleSheet, View } from "react-native";

import Instructions from "@/components/Instructions";
import ImageMultipleChoiceOption from "@/components/ImageMultipleChoiceOption";
import Button from "@/components/Button";

import { TImageMultipleChoice } from "@/types";

type ImageMultipleChoiceProps = {
  question: TImageMultipleChoice;
};

export default function ImageMultipleChoice({
  question,
}: ImageMultipleChoiceProps) {
  const handleCheck = () => {};

  return (
    <View style={styles.container}>
      <Instructions text={question.question} />

      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <ImageMultipleChoiceOption key={option.id} option={option} />
        ))}
      </View>

      <Button text="Check" onPress={handleCheck} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
  },
  optionsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
});
