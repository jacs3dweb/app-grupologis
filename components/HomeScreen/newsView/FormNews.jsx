import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  colors,
  newsInfo,
  getFontStyles,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../utils";
import NewsCards from "./SelectableNew";

const FormNew = ({ closeModal }) => {
  return (
    <View style={styles.modalForm}>
      <Pressable onPress={closeModal}>
        <View style={styles.goBackButton}>
          <Feather name="x" size={24} color={colors.purpleIcons} />
        </View>
      </Pressable>
      <View style={styles.titlesContainer}>
        <Text style={styles.welcomeText}>Seleccione</Text>
        <Text style={styles.subtitle}>tipo de novedad</Text>
      </View>
      <View style={styles.inputContainer}>
        {newsInfo.map((e) => (
          <Pressable onPress={() => console.log(e.id)}>
            <NewsCards
              key={e.id}
              descNews={e.description}
              titleNews={e.title}
              id={e.id}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default FormNew;

const styles = StyleSheet.create({
  modalForm: {
    top: 45,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    transform: [{ translateY: 50 }],
    width: widthPercentageToPx(90),
    height: heightPercentageToPx(90),
  },
  goBackButton: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGray,
    borderRadius: 15,
    height: 30,
    width: 30,
  },
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

  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  titleContainer: {
    backgroundColor: colors.mainBackgroundColor,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: widthPercentageToPx(70),
    fontFamily: "Poppins-Regular",
    height: 50,
    borderRadius: 17,
    padding: 15,
  },
  descriptionContainer: {
    backgroundColor: colors.mainBackgroundColor,
    width: widthPercentageToPx(70),
    fontFamily: "Poppins-Regular",
    height: heightPercentageToPx(20),
    borderRadius: 17,
    padding: 15,
    display: "flex",
    alignItems: "flex-start",
  },
  sendButton: {
    backgroundColor: colors.buttonsColor,
    fontFamily: "Poppins-Regular",
    width: widthPercentageToPx(70),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    height: 50,
    marginTop: 15,
  },
});
