import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../utils";

const NewCard = (props) => {
  console.log("🚀 ~ file: NewCard.jsx:5 ~ NewCard ~ props:", props);

  return (
    <View style={styles.card}>
      <Text>NewCard</Text>
    </View>
  );
};

export default NewCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    height: 110,
    width: "100%",
    borderRadius: 17,
    marginBottom: 8,
    padding: 12,
  },
});
