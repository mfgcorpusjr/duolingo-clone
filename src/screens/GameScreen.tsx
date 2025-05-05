import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "@/components/Header";
import ImageMultipleChoice from "@/components/ImageMultipleChoice";
import OpenEnded from "@/components/OpenEnded";

import questions from "@/questions";

import { TImageMultipleChoice, TOpenEnded } from "@/types";

export default function GameScreen() {
  const [index, setIndex] = useState(1);

  const question = questions[index];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header />

        {question.type === "IMAGE_MULTIPLE_CHOICE" && (
          <ImageMultipleChoice question={question as TImageMultipleChoice} />
        )}

        {question.type === "OPEN_ENDED" && (
          <OpenEnded question={question as TOpenEnded} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    gap: 24,
  },
});
