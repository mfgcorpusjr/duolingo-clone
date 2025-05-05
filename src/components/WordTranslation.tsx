import { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import Instructions from "@/components/Instructions";
import WordTranslationOption from "./WordTranslationOption";
import Button from "@/components/Button";

import { TWordTranslation, TWordTranslationOption } from "@/types";

type WordTranlationProps = {
  question: TWordTranslation;
  onCorrect: () => void;
  onIncorrect: () => void;
};

export default function WordTranlation({
  question,
  onCorrect,
  onIncorrect,
}: WordTranlationProps) {
  const [selectedOption, setSelectedOption] =
    useState<TWordTranslationOption>();

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
      <Instructions text="Select the correct translation" />

      <View style={styles.contentContainer}>
        <View style={styles.questionContainer}>
          <Image
            style={styles.character}
            source={require("@assets/images/zari.png")}
            resizeMode="contain"
          />

          <View style={styles.bubbleContainer}>
            <Text style={styles.bubbleText}>{question.text}</Text>
          </View>
        </View>

        <View style={styles.optionsContainer}>
          {question.options.map((option) => (
            <WordTranslationOption
              key={option.id}
              option={option}
              isSelected={option.id === selectedOption?.id}
              onPress={() => setSelectedOption(option)}
            />
          ))}
        </View>
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
  contentContainer: {
    flex: 1,
  },
  questionContainer: {
    alignItems: "center",
    gap: 12,
  },
  character: {
    height: 180,
    aspectRatio: 1 / 2,
  },
  bubbleContainer: {
    borderWidth: 2,
    borderColor: "lightgrey",
    borderRadius: 12,
    padding: 12,
    flexShrink: 1,
  },
  bubbleText: {
    fontSize: 16,
    fontWeight: "600",
  },
  optionsContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
  },
});
