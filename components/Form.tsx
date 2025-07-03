import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Checkbox } from "react-native-paper";

const Form = () => {
  const [checked, setChecked] = useState(true);

  return (
    <View>
      <TextInput placeholder="Ingrese su nombre" style={styles.input} />
      <TextInput placeholder="Ingrese su apellido" style={styles.input} />
      <View style={styles.checkbox}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => setChecked(!checked)}
        />
        <Text>¿Desea recibir notificaciones?</Text>
      </View>

      <Button title="Enviar" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
});

export default Form;
