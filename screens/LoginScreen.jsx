import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  images,
  widthPercentageToPx,
} from "../utils";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image style={styles.logoImage} source={{ uri: images.colorLogo }} />
        <View style={styles.title}>
          <Text style={styles.welcomeText}>Bienvenidos!</Text>
          <Text style={styles.toApp}>a la Aplicación</Text>

          <View style={styles.descriptionContainer}>
            <Text style={styles.welcomeDesc}>
              Trabajamos para mejorar tu experiencia como empleado o empresa.
            </Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable
            onPress={() =>
              navigation.navigate("BusinessEmployeeLogin", { type: "employee" })
            }
          >
            <View style={styles.asEmployeeButton}>
              <Text style={{ color: colors.white }}>SOY EMPLEADO</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate("BusinessEmployeeLogin", { type: "business" })
            }
          >
            <View style={styles.asBusinessButton}>
              <Text style={{ color: colors.white }}>SOY EMPRESA</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.loginBackgroundImages}
          source={{ uri: images.loginImage }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.generalBackgroundColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: heightPercentageToPx(4),
    height: heightPercentageToPx(107),
  },
  topContainer: {
    display: "flex",
    alignItems: "center",
    height: heightPercentageToPx(55),
    width: widthPercentageToPx(75),
  },
  imageContainer: {
    height: heightPercentageToPx(40),
    width: widthPercentageToPx(100),
  },
  logoImage: {
    width: widthPercentageToPx(35),
    height: heightPercentageToPx(9),
    marginTop: 50,
    marginBottom: 50,
    overflow: "visible",
  },
  welcomeText: {
    fontFamily: "Poppins-Bold",
    color: colors.mainBlue,
    ...getFontStyles(30),
  },
  toApp: {
    ...getFontStyles(22),
    fontFamily: "Poppins-Bold",
  },
  descriptionContainer: {
    width: widthPercentageToPx(60),
  },
  welcomeDesc: {
    fontFamily: "Poppins-Regular",
    color: colors.descriptionColors,
    marginTop: 20,
    ...getFontStyles(14, 0.5, 0.9),
  },
  buttonsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    width: widthPercentageToPx(100),
    marginTop: 30,
  },
  asEmployeeButton: {
    backgroundColor: colors.mainPink,
    fontFamily: "Poppins-Regular",
    height: 55,
    width: widthPercentageToPx(65),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  asBusinessButton: {
    backgroundColor: colors.mainBlue,
    fontFamily: "Poppins-Regular",
    height: 55,
    width: widthPercentageToPx(65),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  loginBackgroundImages: {
    width: "100%",
    height: "100%",
  },
});

export default LoginScreen;
