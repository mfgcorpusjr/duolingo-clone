import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Instructions from "@/components/Instructions";
import ImageMultipleChoiceOption from "@/components/ImageMultipleChoiceOption";
import Button from "@/components/Button";

import { TImageMultipleChoice, TImageMultipleChoiceOption } from "@/types";

type ImageMultipleChoiceProps = {
  question: TImageMultipleChoice;
  onCorrect: () => void;
  onIncorrect: () => void;
};

export default function ImageMultipleChoice({
  question,
  onCorrect,
  onIncorrect,
}: ImageMultipleChoiceProps) {
  const [selectedOption, setSelectedOption] =
    useState<TImageMultipleChoiceOption>();

  const handleCheck = () => {
    if (selectedOption?.isCorrect) {
      onCorrect();
    } else {
      onIncorrect();
    }

    setSelectedOption(undefined);
  };

  return (
    <View style={styles.container}>
      <Instructions text={question.question} />

      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <ImageMultipleChoiceOption
            key={option.id}
            option={option}
            isSelected={option.id === selectedOption?.id}
            onPress={() => setSelectedOption(option)}
          />
        ))}
      </View>

      <Button text="Check" isDisabled={!selectedOption} onPress={handleCheck} />
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
