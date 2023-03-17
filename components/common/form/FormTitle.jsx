import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, getFontStyles } from "../../../utils";

const FormTitle = ({ title, subtitle, description }) => {
  return (
    <View style={styles.titlesContainer}>
      <Text style={styles.welcomeText}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      {description && <Text style={styles.welcomeDesc}>{description}</Text>}
    </View>
  );
};

export default FormTitle;

const styles = StyleSheet.create({
  titlesContainer: {
    paddingHorizontal: 30,
  },
  welcomeText: {
    fontFamily: "Poppins-Bold",
    marginBottom: 2,
    marginTop: 2,
    color: colors.mainBlue,
    ...getFontStyles(30),
  },
  subtitle: {
    ...getFontStyles(17),
    marginBottom: 2,
    marginTop: 0,
    fontFamily: "Poppins-Bold",
  },
  welcomeDesc: {
    fontFamily: "Poppins-Regular",
    color: colors.descriptionColors,
    marginBottom: 15,
    marginTop: 15,
    ...getFontStyles(13, 0.5, 0.9),
  },
});
