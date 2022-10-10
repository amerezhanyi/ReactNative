import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function closeModal() {
    setIsModalVisible(false);
  }
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    closeModal();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((goals) => goals.filter((item) => item.id !== id));
  }

  return (
    <>
    <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={() => setIsModalVisible(true)}
        />
        <GoalInput
          addGoalHandler={addGoalHandler}
          isModalVisible={isModalVisible}
          closeModal={closeModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={({ item }) => (
              <GoalItem item={item} deleteGoalHandler={deleteGoalHandler} />
            )}
            keyExtractor={(item, index) => item.id}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: { paddingTop: 50, paddingHorizontal: 16 },
  goalsContainer: {
    flex: 5,
  },
});
