import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import FormCountry from "./formSteps/FormCountry";
import { colors } from "../../../../utils";

const StepTwo = ({ formData, onComplete }) => {
  const [email, setEmail] = React.useState("");
  const [tel, setTel] = React.useState("");

  const handlePress = () => {
    onComplete({ stepOneData: value });
  };

  return (
    <View>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Correo electronico"
        style={styles.input}
        placeholderTextColor={colors.placeholderColor}
      />
      <TextInput
        value={tel}
        onChangeText={setTel}
        placeholder="Telefono"
        style={styles.input}
        placeholderTextColor={colors.placeholderColor}
      />
      <FormCountry />
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

export default StepTwo;
