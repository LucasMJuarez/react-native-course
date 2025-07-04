import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Task = {
  id: number;
  text: string;
};

const todoListScreen = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, {id: Math.floor(Math.random() * 1000), text: task}]);
      setTask('');
    }
  };
  return (
   <View style={styles.container}>
      <Text style={styles.title}>Todo List Screen</Text>
      <View style={styles.input}>
        <TextInput style={styles.inputContainer} placeholder="New Task" value={task} onChangeText={setTask} />
        <Pressable onPress={addTask} style={styles.addButton}>
          <Text style={styles.addButtonItem}>Add</Text>
        </Pressable>
      </View>
    <View>
        {tasks.map((item) => (
          <View key={item.id} style={styles.task}>
            <Text>
              {item.text}
            </Text>
            <Pressable onPress={() => setTasks(tasks.filter((task) => task.id !== item.id))}>
              <Text style={{ color: "red" }}>Delete</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#F1F1F1",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
    input: {
        borderColor: "#bbb",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: "#fff",
    },
    inputContainer :{
        flexDirection: "row",
        marginBottom:20,
        gap:10
    },
    addButton:{
        backgroundColor: "#007A77",
        paddingHorizontal: 15,
        borderRadius: 8,
        justifyContent: 'center'
    },
    addButtonItem: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 10,
    },
    task: {
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
      flexDirection: "row",
      justifyContent: "space-between",
    }
});

export default todoListScreen;
