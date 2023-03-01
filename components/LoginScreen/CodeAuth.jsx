import { StyleSheet, Text, View, Image, Pressable, TextInput } from "react-native";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  images,
  widthPercentageToPx,
} from "../../utils";

import { Feather } from "@expo/vector-icons";

const Code = ({ navigation }) => {
  return (
    
    <View style={styles.container}>
        <Pressable onPress={() => navigation.goBack()}>
          <View style={styles.goBackButton}>
            <Feather name="x" size={24} color="black" />
          </View>
        </Pressable>
      <View style={styles.topContainer}>
        <Image style={styles.logoImage} source={{ uri: images.colorLogo }} />
        <View style={styles.title}>
          <Text style={styles.toApp}>Ingrese</Text>
          <Text style={styles.toApp}>el codigo</Text>

          <View style={styles.descriptionContainer}>
            <Text style={styles.welcomeDesc}>
              Ingrese el codigo de 4 dijitos que fue enviado a su celular.
            </Text>
          </View>
        </View>
        <View style={styles.textInputContainers}>
            <TextInput 
            placeholder=" 0  0  0  0"
            keyboardType="numeric">
            </TextInput>
        </View>
        <Pressable 
            onPress={() =>
              navigation.navigate("BusinessEntry", { type: "business" })
            }>
            <View style={styles.asBusinessButton}>
              <Text style={{ color: colors.white }}>Ingresar</Text>
            </View>
          </Pressable>
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
    height: heightPercentageToPx(100),
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
    marginTop: 20,
  },
  loginBackgroundImages: {
    width: "100%",
    height: "100%",
  },
  textInputContainers: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: widthPercentageToPx(40),
    height: heightPercentageToPx(7),
    marginTop: 10,
    borderRadius: 7,
    backgroundColor: colors.white
  },
  goBackButton: {
    position: "relative",
    top: 20,
    left: -160,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
    opacity: 0.4,
    borderRadius: 15,
    height: 30,
    width: 30,
  },
});

export default Code;