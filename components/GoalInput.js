import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ onAddGoal, isVisible, modalHnadler }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Your Goal..."
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button title="Cancel" onPress={modalHnadler} color='#f31282'/>
          </View>
          <View style={styles.buttonStyle}>
            <Button title="Add Goal" onPress={addGoalHandler} color='#5e0acc'/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#e4d0ff",
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    color: '#120438',
    width: "100%",
    padding: 12,

  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  buttonStyle: {
    width: 100,
    marginHorizontal: 12,
  },
});

export default GoalInput;