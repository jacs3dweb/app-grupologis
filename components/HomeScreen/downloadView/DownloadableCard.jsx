import { Image, Modal, Pressable, StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../utils";

import Toast from 'react-native-toast-message';

const DownloadableCard = ({title, desc, image, id,}) => {
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Descarga Completada",
      position: "bottom",
      visibilityTime: 2000,

    })
  }
  return (
    
      <View style={styles.scrollStyle}>
        <Image style={styles.certificadoImage} source={{ uri: image }} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{desc}</Text>
        <Pressable onPress={showToast}>
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
