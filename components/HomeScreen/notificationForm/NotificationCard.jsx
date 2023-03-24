import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors, getFontStyles } from "../../../utils";

const NotCard = ({ titleNot, descNot, imageNot }) => {
  return (
    <View style={styles.scrollStyle}>
      <View style={styles.imgContainer}>
        <Image source={imageNot} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{titleNot}</Text>
        <Text style={styles.description}>{descNot}</Text>
      </View>
    </View>
  );
};

export default NotCard;

const styles = StyleSheet.create({
  scrollStyle: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 17,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
  },
  imgContainer: {
    width: "25%",
  },
  infoContainer: {
    width: "75%",
  },
  title: {
    ...getFontStyles(15, 0.9, 1.1),
    fontFamily: "Poppins-Bold",
    marginBottom: 5,
    color: colors.darkGray,
  },
  description: {
    fontFamily: "Volks-Serial-Light",
    color: colors.darkGray,
    ...getFontStyles(12, 0.9, 1.2),
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
});
