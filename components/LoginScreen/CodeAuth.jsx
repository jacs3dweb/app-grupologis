import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  images,
  widthPercentageToPx,
} from "../../utils";

import { Feather } from "@expo/vector-icons";
import { useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { decode } from "base-64";

const Code = ({ navigation }) => {
  let codeInputRef = useRef(null);
  const [code, setCode] = useState("");

  const handlePressCode = () => {
    codeInputRef.current.focus();
  };

  const handleContinueToSelectBusiness = async () => {
    const codeEnc = await AsyncStorage.getItem("code");
    const codeDec = decode(codeEnc);
    const codeVer = codeDec.slice(3, -2);

    if (code.length !== 4 || code != codeVer) {
      console.log("el código no es válido");
      return;
    } else {
      navigation.navigate("BusinessEntry", { type: "business" });
    }
  };
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
          <Text style={styles.subtitle}>Ingrese</Text>
          <Text style={styles.subtitle}>el codigo</Text>

          <View style={styles.descriptionContainer}>
            <Text style={styles.welcomeDesc}>
              Ingrese el código de 4 digitos que fue enviado a su celular.
            </Text>
          </View>
        </View>
        <TextInput
          ref={codeInputRef}
          keyboardType="numeric"
          style={{ height: 1 }}
          maxLength={4}
          value={code}
          onChangeText={(e) => setCode(e)}
        />
        {
          <Pressable
            style={styles.textInputContainers}
            onPress={handlePressCode}
          >
            {[0, 1, 2, 3].map((e) => (
              <View style={styles.codeElementContainer} key={e}>
                <Text style={styles.codeElement}>
                  {code.split("")[e] || ""}
                </Text>
              </View>
            ))}
          </Pressable>
        }
        <Pressable onPress={handleContinueToSelectBusiness}>
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
  subtitle: {
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
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 8,
    width: widthPercentageToPx(65),
    height: 50,
    marginTop: 10,
  },
  codeElementContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 10,
    width: "23%",
    borderRadius: 7,
    backgroundColor: colors.white,
  },
  codeElement: {
    fontFamily: "Poppins-Light",
    color: colors.gray,
    ...getFontStyles(18, 0.5, 0.9),
  },
  goBackButton: {
    position: "relative",
    top: 20,
    left: widthPercentageToPx(-43),
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
