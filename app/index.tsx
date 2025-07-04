import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        onPress={() => {
          router.push("/myform");
        }}
        style={styles.button}
      >
        <Text style={styles.text}>Ir al Formulario</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          router.push("/todoList");
        }}
        style={styles.button}
      >
        <Text style={styles.text}>Ir a la Lista de Tareas</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          router.push("/mycount");
        }}
        style={styles.button}
      >
        <Text style={styles.text}>Ir al Contador</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  button: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    shadowColor: "#000",
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
