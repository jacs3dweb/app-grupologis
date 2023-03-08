import React from "react";
import SvgUri from "react-native-svg-uri";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../../../utils";

import iconSuccess from "../../../assets/images/components/toast/success-icon.svg";
import iconError from "../../../assets/images/components/toast/error-icon.svg";

export const SuccessToast = (props) => {
  return (
    <View style={styles.success}>
      <View style={styles.boxToast}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.text1}</Text>
        </View>

        <SvgUri width={45} height={45} source={iconSuccess}></SvgUri>
      </View>
    </View>
  );
};

export const ErrorToast = (props) => {
  return (
    <View style={styles.error}>
      <View style={styles.boxToast}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.text1}</Text>
        </View>

        <SvgUri width={45} height={45} source={iconError}></SvgUri>
      </View>
    </View>
  );
};

export default SuccessToast;

const styles = StyleSheet.create({
  boxToast: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Volks-Bold",
    fontSize: 17,

    color: colors.light,
  },
  success: {
    width: "90%",
    backgroundColor: colors.green,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  error: {
    width: "90%",
    backgroundColor: colors.green,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
