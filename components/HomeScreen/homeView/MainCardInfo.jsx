import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../utils";

const MainCardInfo = ({ firstTitle, secondTitle, description, image }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.title}>
          <Text style={styles.firstTitleText}>{firstTitle}</Text>
          <Text style={styles.secondTitleText}>{secondTitle}</Text>

          <View style={styles.descriptionContainer}>
            <Text style={styles.welcomeDesc}>{description}</Text>
          </View>
        </View>
        <Image style={styles.workersImage} source={{ uri: image }} />
      </View>
    </View>
  );
};

export default MainCardInfo;

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    alignItems: "center",
  },
  firstTitleText: {
    fontFamily: "Poppins-Bold",
    color: colors.mainBlue,
    ...getFontStyles(25),
  },
  secondTitleText: {
    ...getFontStyles(17),
    fontFamily: "Poppins-Bold",
  },

  descriptionContainer: {
    width: widthPercentageToPx(60),
  },
  welcomeDesc: {
    fontFamily: "Poppins-Regular",
    color: colors.descriptionColors,
    ...getFontStyles(14, 0.5, 0.9),
  },

  workersImage: {
    height: heightPercentageToPx(20),
    width: widthPercentageToPx(40),
    left: 120,
    bottom: 105,
  },

  textInputContainers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 8,
    width: widthPercentageToPx(65),
    height: 50,
    marginTop: 10,
  },
  infoContainer: {
    width: widthPercentageToPx(90),
    height: heightPercentageToPx(20),
    overflow: "hidden",
    marginBottom: 7,
    backgroundColor: colors.white,
    borderRadius: 17,
    alignItems: "center",
  },

  title: {
    width: "100%",
    padding: 20,
  },
  containerScroll: {
    width: widthPercentageToPx(90),
    height: 300,
    paddingTop: 10,
  },
  downloadableCardsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
