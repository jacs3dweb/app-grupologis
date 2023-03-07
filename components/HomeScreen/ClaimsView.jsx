import { StyleSheet, Text, View, Image, ScrollView, Pressable } from "react-native";
import {
  colors,
  employeeDownloadables,
  getFontStyles,
  heightPercentageToPx,
  images,
  widthPercentageToPx,
} from "../../utils";

import { useRef, useState } from "react";
import Layout from "../layout/Layout.jsx";



const Claim = () => {
  
  return (
    <Layout>
      <ScrollView>
        <View style={styles.downloadContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.title}>
              <Text style={styles.welcomeText}>Quejas</Text>
              <Text style={styles.toApp}>y reclamos</Text>

              <View style={styles.descriptionContainer}>
                <Text style={styles.welcomeDesc}>
                Podrás conocer el estado o trazabilidad de tus novedades.
                </Text>
              </View>
            </View>
            <Image
              style={styles.workersImage}
              source={{ uri: images.employeeNimage }}
            />
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  downloadContainer: {
    display: "flex",
    alignItems: "center",
  },
  welcomeText: {
    fontFamily: "Poppins-Bold",
    color: colors.mainBlue,
    ...getFontStyles(25),
  },
  toApp: {
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

export default Claim;