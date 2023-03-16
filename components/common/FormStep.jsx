import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, getFontStyles, widthPercentageToPx } from "../../utils";

const FormStep = ({ number, description }) => {
  return (
    <View style={styles.stepContainer}>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{number}</Text>
      </View>
      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  );
};

export default FormStep;

const styles = StyleSheet.create({
  stepContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    width: "80%",
    marginBottom: 10,
  },
  numberContainer: {
    backgroundColor: colors.stepGray,
    width: 47,
    height: 47,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  numberText: {
    color: colors.white,
    fontFamily: "Poppins-Bold",
    ...getFontStyles(27, 0.5, 0.9),
  },
  descriptionText: {
    ...getFontStyles(15, 0.5, 0.9),
    fontFamily: "Poppins-Light",
    color: colors.darkGray,
    flexWrap: "wrap",
  },
});
