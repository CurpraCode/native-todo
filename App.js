import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [activity, setActivity] = useState();
  const [activityItems, setActivityItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setActivityItems([...activityItems, activity]);
    setActivity(null);
  };
  const completeTask = () => {
    let activityCopy = [...activityItems];
    activityCopy.splice(index, 1);
    setActivityItems(activityCopy);
  };
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* today task */}
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Todays's Task</Text>
          <View style={styles.items}>
            {/* This is the tasks */}
            {activityItems.map((activitys, index) => {
              return (
                <TouchableOpacity key={index}>
                  <Task text={activitys} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      {/* write a task */}
      <KeyboardAvoidingView style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={activity}
          onChangeText={(text) => setActivity(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  item: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  addText: {},
});
