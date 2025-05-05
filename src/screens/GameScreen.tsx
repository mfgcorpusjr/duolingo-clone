import { useState, useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Header from "@/components/Header";
import ImageMultipleChoice from "@/components/ImageMultipleChoice";
import OpenEnded from "@/components/OpenEnded";

import questions from "@/questions";

import { TImageMultipleChoice, TOpenEnded } from "@/types";

export default function GameScreen() {
  const [index, setIndex] = useState(0);
  const [lives, setLives] = useState(5);
  const [hasMounted, setHasMounted] = useState(false);

  const question = questions[index];
  const progress = ((index + 1) / questions.length) * 100;

  useEffect(() => {
    loadData();
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted) {
      saveData();
    }
  }, [hasMounted, index, lives]);

  const handleCorrect = () => {
    const nextIndex = index + 1;

    if (nextIndex < questions.length) {
      setIndex((v) => v + 1);
    } else {
      Alert.alert("You won!", "", [
        {
          text: "Restart",
          onPress: handlerRestart,
        },
      ]);
    }
  };

  const handleIncorrect = () => {
    const nextLives = lives - 1;
    setLives(nextLives);

    if (nextLives > 0) {
      Alert.alert("Incorrect!");
    } else {
      Alert.alert("You lose!", "", [
        {
          text: "Restart",
          onPress: handlerRestart,
        },
      ]);
    }
  };

  const handlerRestart = () => {
    setIndex(0);
    setLives(5);
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("index", String(index));
      await AsyncStorage.setItem("lives", String(lives));
    } catch (error) {
      console.log(error);
    }
  };

  const loadData = async () => {
    try {
      const _index = await AsyncStorage.getItem("index");
      const _lives = await AsyncStorage.getItem("lives");

      if (_index !== null) {
        setIndex(Number(_index));
      }
      if (_lives !== null) {
        setLives(Number(_lives));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header progress={progress} lives={lives} />

        {question.type === "IMAGE_MULTIPLE_CHOICE" && (
          <ImageMultipleChoice
            question={question as TImageMultipleChoice}
            onCorrect={handleCorrect}
            onIncorrect={handleIncorrect}
          />
        )}

        {question.type === "OPEN_ENDED" && (
          <OpenEnded
            question={question as TOpenEnded}
            onCorrect={handleCorrect}
            onIncorrect={handleIncorrect}
          />
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
