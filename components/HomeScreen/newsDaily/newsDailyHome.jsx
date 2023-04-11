import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import {
  colors,
  notices,
  getFontStyles,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../utils";

import NewsDailyHomeCard from "./newsDailyHomeCard";

const newsDailyHome = ({ closeM }) => {
  const navigation = useNavigation();
  return (
    <View styles={styles.modalnForm}>
      <View style={styles.titlesContainer}>
        <Text style={styles.subtitle}>Noticias</Text>
      </View>
      <View styles={styles.inputContainer}>
        {notices.map((e) => (
          <NewsDailyHomeCard
            descNot={e.description}
            titleNot={e.title}
            id={e.id}
            imageNot={e.image}
          />
        ))}
      </View>
      <Pressable onPress={() => navigation.navigate("NewsDailyView")}>
        <View style={styles.downloadButton}>
          <Text
            style={{ color: colors.buttonsColor, fontFamily: "Volks-Bold" }}
          >
            Ver más
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default newsDailyHome;

const styles = StyleSheet.create({
  modalnForm: {
    top: 45,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
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
  subtitle: {
    ...getFontStyles(17),
    marginBottom: 20,
    marginTop: 20,
    fontFamily: "Poppins-Bold",
  },
  welcomeDesc: {
    fontFamily: "Poppins-Regular",
    color: colors.descriptionColors,
    marginBottom: 15,
    marginTop: 15,
    ...getFontStyles(13, 0.5, 0.9),
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
  downloadButton: {
    borderWidth: 1,
    borderColor: colors.buttonsColor,
    fontFamily: "Volks-Bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 47,
    borderRadius: 7,
    marginTop: 10,
    padding: 0,
    flex: 0,
  },
});
