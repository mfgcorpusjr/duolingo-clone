import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "@/components/Header";
import ImageMultipleChoice from "@/components/ImageMultipleChoice";

import questions from "@/questions";

import { TImageMultipleChoice } from "@/types";

export default function GameScreen() {
  const [index, setIndex] = useState(0);

  const question = questions[index];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header />

        {question.type === "IMAGE_MULTIPLE_CHOICE" && (
          <ImageMultipleChoice question={question as TImageMultipleChoice} />
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
