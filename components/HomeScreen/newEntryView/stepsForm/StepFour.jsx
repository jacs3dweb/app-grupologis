import React from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { colors, getFontStyles } from "../../../../utils";

const StepFour = ({ formData, onComplete }) => {
  const handlePress = () => {
    onComplete({ stepOneData: value });
  };

  return (
    <View style={styles.containerResume}>
      {/* Resumen numero 1 */}
      <View style={styles.boxResume}>
        <View style={styles.resume}>
          <Text style={styles.textHead}>Identificación</Text>
          <Text style={styles.textContent}>12434</Text>

          <Text style={styles.textHead}>Apellidos</Text>
          <Text style={styles.textContent}>Suarez Perés</Text>

          <Text style={styles.textHead}>Correo electronico</Text>
          <Text style={styles.textContent}>example@gma...</Text>
        </View>
        <View style={styles.resume}>
          <Text style={styles.textHead}>Apellidos</Text>
          <Text style={styles.textContent}>Suarez</Text>

          <Text style={styles.textHead}>Ciudad</Text>
          <Text style={styles.textContent}>Barranquilla</Text>

          <Text style={styles.textHead}>Identificación</Text>
          <Text style={styles.textContent}>300 8470989</Text>
        </View>
      </View>
      {/* Resumen numero 2 */}
      <View style={styles.boxResume}>
        <View style={styles.resume}>
          <Text style={styles.textHead}>Identificación</Text>
          <Text style={styles.textContent}>12434</Text>

          <Text style={styles.textHead}>Apellidos</Text>
          <Text style={styles.textContent}>Suarez Perés</Text>

          <Text style={styles.textHead}>Correo electronico</Text>
          <Text style={styles.textContent}>example@gma...</Text>
        </View>
        <View style={styles.resume}>
          <Text style={styles.textHead}>Apellidos</Text>
          <Text style={styles.textContent}>Suarez</Text>

          <Text style={styles.textHead}>Ciudad</Text>
          <Text style={styles.textContent}>Barranquilla</Text>

          <Text style={styles.textHead}>Identificación</Text>
          <Text style={styles.textContent}>300 8470989</Text>
        </View>
      </View>
      {/* Resumen numero 3 */}
      <View style={styles.boxResume}>
        <View style={styles.resume}>
          <Text style={styles.textHead}>Identificación</Text>
          <Text style={styles.textContent}>12434</Text>

          <Text style={styles.textHead}>Apellidos</Text>
          <Text style={styles.textContent}>Suarez Perés</Text>

          <Text style={styles.textHead}>Correo electronico</Text>
          <Text style={styles.textContent}>example@gma...</Text>
        </View>
        <View style={styles.resume}>
          <Text style={styles.textHead}>Apellidos</Text>
          <Text style={styles.textContent}>Suarez</Text>

          <Text style={styles.textHead}>Ciudad</Text>
          <Text style={styles.textContent}>Barranquilla</Text>

          <Text style={styles.textHead}>Identificación</Text>
          <Text style={styles.textContent}>300 8470989</Text>
        </View>
      </View>
    </View>
  );
};

export default StepFour;

const styles = StyleSheet.create({
  containerResume: {
    display: "flex",
    flexDirection: "column",
  },
  boxResume: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 25,
  },
  resume: {
    flex: 1,
    marginBottom: 20,
  },
  textHead: {
    fontFamily: "Volks-Serial-Medium",
    color: colors.boldGray,
    ...getFontStyles(14, 0.5, 0.8),
  },
  textContent: {
    fontFamily: "Volks-Bold",
    color: colors.darkGray,
    ...getFontStyles(16, 0.8, 0.9),
    marginBottom: 6,
  },
});
