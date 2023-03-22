import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, getFontStyles } from "../../../../utils";

const CardElement = ({ head, content }) => {
  return (
    <View>
      <Text style={styles.textHead}>{head}</Text>
      <Text style={styles.textContent}>{content}</Text>
    </View>
  );
};

export default CardElement;

const styles = StyleSheet.create({
  textHead: {
    fontFamily: "Poppins-Regular",
    color: colors.darkGray,
    ...getFontStyles(14, 0.5, 0.9),
  },
  textContent: {
    fontFamily: "Poppins-Regular",
    ...getFontStyles(15, 0.5, 0.9),
  },
});
