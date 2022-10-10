import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  const { item, deleteGoalHandler } = props;

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={deleteGoalHandler.bind(this, item.id)}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
