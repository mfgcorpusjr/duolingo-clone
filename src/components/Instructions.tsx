import { StyleSheet, Text } from "react-native";

type InstructionsProps = {
  text: string;
};

export default function Instructions({ text }: InstructionsProps) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 600,
  },
});
