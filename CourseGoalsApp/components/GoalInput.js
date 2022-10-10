import { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const { addGoalHandler, isModalVisible, closeModal } = props;

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function onAddGoal() {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
    closeModal();
  }

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="You course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={onAddGoal} color="#b10330" />
          <Button title="Cancel" onPress={closeModal} color="#f31282"/>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    width: "80%",
    marginRight: 8,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    margin: 24,
  },
});
