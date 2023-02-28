import { StyleSheet, Text, View, Pressable, Image } from "react-native";

import React from "react";
import {
  colors,
  getFontStyles,
  images,
  windowHeight,
  windowWidth,
} from "../../utils";
import { Feather } from "@expo/vector-icons";

const BusinessLogin = ({ navigation }) => {
  return (
    <View style={styles.businessBackground}>
      <View style={styles.formContainer}>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <View style={styles.goBackButton}>
            <Feather name="x" size={24} color="white" />
          </View>
        </Pressable>
        <View style={styles.logoContainer}>
          <Image style={styles.logoImage} source={{ uri: images.whiteLogo }} />
        </View>

        <View style={styles.titleContainer}>
          <View style={styles.title}>
            <Text style={styles.welcomeText}>SOY</Text>
            <Text style={styles.toApp}>EMPRESA</Text>

            <View style={styles.descriptionContainer}>
              <Text style={styles.welcomeDesc}>
                Por favor ingresa tu número de identificación y número de
                celular
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View styles={styles.imageBackgroundContainer}>
        <Text>imageBackgroundContainer</Text>
      </View>
    </View>
  );
};

export default BusinessLogin;

const styles = StyleSheet.create({
  businessBackground: {
    backgroundColor: colors.mainBlue,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  formContainer: {
    width: "85%",
    height: "55%",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.09,
    marginTop: 50,
    marginBottom: 50,
    overflow: "visible",
  },
  goBackButton: {
    position: "absolute",
    top: 20,
    left: -10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    opacity: 0.4,
    borderRadius: 15,
    height: 30,
    width: 30,
  },
  welcomeText: {
    fontFamily: "Poppins-Light",
    color: colors.white,
    ...getFontStyles(28),
  },
  toApp: {
    ...getFontStyles(28),
    color: colors.white,
    fontFamily: "Poppins-Bold",
  },
  welcomeDesc: {
    fontFamily: "Poppins-Regular",
    color: colors.white,
    marginTop: 20,
    textAlign: "center",
    ...getFontStyles(13, 0.5, 0.9),
  },
});
