import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, getFontStyles } from "../../../../utils";

const CardElement = ({ head, content }) => {
  return (
    <View style={styles.elementItem}>
      <Text style={styles.textHead}>{head}</Text>
      <Text style={styles.textContent}>{content}</Text>
    </View>
  );
};

export default CardElement;

const styles = StyleSheet.create({
  textHead: {
    fontFamily: "Poppins-Regular",
    ...getFontStyles(14.5, 0.5, 0.9),
  },
  textContent: {
    fontFamily: "Poppins-Regular",
    color: colors.darkGray,
  },
});
