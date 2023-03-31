import React from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { colors } from "../../../../utils";

const StepOne = ({ formData, onComplete }) => {
  const [id, setId] = React.useState("");
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [segundoNombre, setSegundoNombre] = React.useState("");
  const [segundoApellido, setSegundoApellido] = React.useState("");

  const handlePress = () => {
    onComplete({ stepOneData: value });
  };

  return (
    <View>
      <TextInput
        value={id}
        onChangeText={setId}
        placeholder="Número de ID"
        style={styles.input}
        placeholderTextColor={colors.placeholderColor}
      />
      <TextInput
        value={nombre}
        onChangeText={setNombre}
        placeholder="Primer Nombre"
        style={styles.input}
        placeholderTextColor={colors.placeholderColor}
      />
      <TextInput
        value={apellido}
        onChangeText={setApellido}
        placeholder="Primer Apellido"
        style={styles.input}
        placeholderTextColor={colors.placeholderColor}
      />
      <TextInput
        value={segundoNombre}
        onChangeText={setSegundoNombre}
        placeholder="Segundo Nombre"
        style={styles.input}
        placeholderTextColor={colors.placeholderColor}
      />
      <TextInput
        value={segundoApellido}
        onChangeText={setSegundoApellido}
        placeholder="Segundo Apellido"
        style={styles.input}
        placeholderTextColor={colors.placeholderColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F3F3FF",
    width: "100%",
  },
  input: {
    backgroundColor: colors.mainBackgroundColor,
    height: 50,
    paddingLeft: 20,
    marginBottom: 10,
    borderRadius: 10,
    width: "100%",
    fontFamily: "Volks-Serial-Medium",
    fontSize: 16,
    fontWeight: "normal",
  },
});

export default StepOne;
