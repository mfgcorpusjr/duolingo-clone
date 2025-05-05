import { useState } from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";

import Instructions from "@/components/Instructions";
import Button from "@/components/Button";

import { TOpenEnded } from "@/types";

type OpenEndedProps = {
  question: TOpenEnded;
  onCorrect: () => void;
  onIncorrect: () => void;
};

export default function OpenEnded({
  question,
  onCorrect,
  onIncorrect,
}: OpenEndedProps) {
  const [input, setInput] = useState("");

  const handleCheck = () => {
    if (input.trim().toLowerCase() === question.answer.toLowerCase()) {
      onCorrect();
    } else {
      onIncorrect();
    }

    setInput("");
  };

  return (
    <View style={styles.container}>
      <Instructions text="Translate this sentence" />

      <View style={styles.contentContainer}>
        <View style={styles.questionContainer}>
          <Image
            style={styles.character}
            source={require("@assets/images/eddy.png")}
            resizeMode="contain"
          />

          <View style={styles.bubbleContainer}>
            <Text style={styles.bubbleText}>{question.text}</Text>
          </View>
        </View>

        <TextInput
          style={styles.textInput}
          value={input}
          onChangeText={setInput}
          placeholder="Type in English"
          multiline
          autoCorrect={false}
          autoCapitalize="none"
          autoComplete="off"
        />
      </View>

      <Button text="Check" isDisabled={!input.trim()} onPress={handleCheck} />
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
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  character: {
    height: 100,
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
  textInput: {
    flex: 1,
    backgroundColor: "gainsboro",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
  },
});
