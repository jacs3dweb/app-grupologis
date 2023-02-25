import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { colors, getButtonsStyles, getFontStyles, images } from "../utils";

const LoginScreen = () => {
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
          <Pressable>
            <View style={styles.asBusinessButton}>
              <Text style={{ color: colors.white }}>SOY EMPRESA</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.imageContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.loginBackgroundColor,
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  topContainer: {
    display: "flex",
    alignItems: "center",
    height: "60%",
    width: "75%",
  },
  logoImage: {
    width: 162,
    height: 81,
    marginTop: 85,
    marginBottom: 85,
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
});

export default LoginScreen;
