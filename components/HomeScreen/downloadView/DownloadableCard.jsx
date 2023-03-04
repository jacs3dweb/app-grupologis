import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../utils";

const DownloadableCard = ({ title, desc, image, id }) => {
  return (
    <View style={styles.scrollStyle}>
      <Image style={styles.certificadoImage} source={{ uri: image }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{desc}</Text>
      <Pressable onPress={(e) => console.log(id)}>
        <View style={styles.downloadButton}>
          <Text style={{ color: colors.white }}>Descargar</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default DownloadableCard;

const styles = StyleSheet.create({
  scrollStyle: {
    width: 180,
    height: 270,
    backgroundColor: colors.white,
    borderRadius: 17,
    padding: 15,
    alignItems: "center",
  },
  certificadoImage: {
    marginBottom: 30,
    height: 90,
    width: 90,
  },
  title: {
    ...getFontStyles(15),
    fontFamily: "Poppins-Bold",
  },
  description: {
    fontFamily: "Poppins-Regular",
    color: colors.descriptionColors,
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 5,
    marginTop: 5,
    ...getFontStyles(11, 0.5, 0.9),
  },
  downloadButton: {
    backgroundColor: colors.buttonsColor,
    fontFamily: "Poppins-Regular",
    height: heightPercentageToPx(6),
    width: widthPercentageToPx(25),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
