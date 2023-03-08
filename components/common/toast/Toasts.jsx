import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const SuccessToast = (props) => {
  return (
    <View style={styles.success}>
      <Text>{props.text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  );
};

export const ErrorToast = () => {
  return (
    <View style={styles.error}>
      <Text>{props.text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  );
};

export default SuccessToast;

const styles = StyleSheet.create({
  success: { height: 60, width: "90%", backgroundColor: "blue" },
  error: { height: 60, width: "90%", backgroundColor: "red" },
});
