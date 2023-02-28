import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import {
  colors,
  getFontStyles,
  images,
  windowHeight,
  windowWidth,
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
          <Pressable>
            <View style={styles.asEmployeeButton}>
              <Text style={{ color: colors.white }}>SOY EMPLEADO</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("BusinessLogin")}>
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
    backgroundColor: colors.loginBackgroundColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  topContainer: {
    display: "flex",
    alignItems: "center",
    height: "55%",
    width: "75%",
  },
  imageContainer: {
    height: "40%",
    width: "100%",
  },
  logoImage: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.09,
    marginTop: 50,
    marginBottom: 50,
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
    width: "70%",
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
    width: "100%",
    marginTop: 30,
  },
  asEmployeeButton: {
    backgroundColor: colors.workerButtonColor,
    fontFamily: "Poppins-Regular",
    height: 55,
    width: 257,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  asBusinessButton: {
    backgroundColor: colors.mainBlue,
    fontFamily: "Poppins-Regular",
    height: 55,
    width: 257,
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
