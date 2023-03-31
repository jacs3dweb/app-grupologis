import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useState } from "react";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  images,
  widthPercentageToPx,
} from "../../utils";

import { InputWithIcon } from "../common/form/Input";

import { Feather } from "@expo/vector-icons";
import { fetchPost, validatePhone } from "../../utils/functions";

const BusinessEmployeeLogin = ({ navigation, route }) => {
  const { type } = route.params;
  const [identification, setIdentification] = useState(0);
  const [phone, setPhone] = useState(0);

  const handleIdentificationChange = (ident) => {
    setIdentification(ident);
  };

  const handlePhoneChange = (phon) => {
    setPhone(phon);
  };

  const returnPag = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Login");
  };

  const submitForm = async () => {
    if (identification != 0 && phone != 0) {
      if (!validatePhone(phone)) {
        console.log("el celular es incorrecto");
      } else {
        const typeCli = type === "business" ? 2 : 1;
        const body = `contactTipoClienteField=${typeCli}
            &contactIdentificacionField=${identification}
            &contactNumeroTelefonico=${phone}
            &contactApp=true`;
        const path = "usuario/saveUsuarioNew.php";
        const respApi = await fetchPost(path, body);
        if (respApi.status) {
          const data = respApi.data;
          if (typeof data == "object") {
            await AsyncStorage.setItem("type", type);
            await AsyncStorage.setItem("identi", identification);
            await AsyncStorage.setItem("phone", phone);
            await AsyncStorage.setItem("code", data.codigo);
            navigation.navigate("CodeAuth", { type: "business" });
          } else {
            console.log("El usuario o celular no son validos");
          }
        } else {
          console.log("ocurrio un error en el sistema");
        }
      }
    }
  };
  return (
    <View style={styles.businessBackground(type)}>
      <View style={styles.formContainer}>
        <Pressable onPress={() => returnPag()}>
          <View style={styles.goBackButton}>
            <Feather name="x" size={24} color="white" />
          </View>
        </Pressable>
        <View style={styles.logoContainer}>
          <Image style={styles.logoImage} source={{ uri: images.whiteLogo }} />
        </View>

        <View style={styles.textsContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.welcomeText}>SOY</Text>
            <Text style={styles.subtitle}>
              {type === "business" ? "EMPRESA" : "EMPLEADO"}
            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.welcomeDesc}>
              Por favor ingresa tu número de identificación y número de celular
            </Text>
          </View>
        </View>
        <View style={styles.textInputContainers}>
          <InputWithIcon
            icon={"user"}
            iconColor={type === "business" ? colors.mainBlue : colors.mainPink}
            iconSize={24}
            onInputChange={handleIdentificationChange}
            placeholder="Identificación"
            type="numeric"
            value={identification}
          ></InputWithIcon>
          <InputWithIcon
            icon={"mobile1"}
            iconColor={type === "business" ? colors.mainBlue : colors.mainPink}
            iconSize={24}
            onInputChange={handlePhoneChange}
            placeholder="Celular"
            type="numeric"
            value={phone}
          ></InputWithIcon>
          <Pressable onPress={() => submitForm()}>
            <View style={styles.asIngresaButton}>
              <Text style={{ color: colors.white }}>Ingresar</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.loginBackgroundImages}
          source={{
            uri:
              type === "business"
                ? images.BusinessEmployeeLoginImage
                : images.employeeLoginImage,
          }}
        />
      </View>
    </View>
  );
};

export default BusinessEmployeeLogin;

const styles = StyleSheet.create({
  businessBackground: (type) => {
    return {
      backgroundColor: type === "business" ? colors.mainBlue : colors.mainPink,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: heightPercentageToPx(4),
      height: heightPercentageToPx(107),
    };
  },
  formContainer: {
    width: widthPercentageToPx(100),
    height: heightPercentageToPx(50),
  },
  textsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: widthPercentageToPx(100),
  },
  descriptionContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "justify",
    width: widthPercentageToPx(70),
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  logoImage: {
    width: widthPercentageToPx(35),
    height: heightPercentageToPx(9),
    overflow: "visible",
  },
  goBackButton: {
    position: "absolute",
    top: 20,
    left: 20,
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
  subtitle: {
    ...getFontStyles(28),
    color: colors.white,
    fontFamily: "Poppins-Bold",
  },
  welcomeDesc: {
    fontFamily: "Poppins-Regular",
    color: colors.white,
    marginTop: 20,
    ...getFontStyles(13, 0.5, 0.9),
  },

  loginFormInput: {
    fontFamily: "Poppins-Regular",
    width: widthPercentageToPx(60),
    height: 50,
    margin: 5,
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 7,
  },

  asIngresaButton: {
    backgroundColor: "transparent",
    fontFamily: "Poppins-Regular",
    height: 50,
    width: widthPercentageToPx(60),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 5,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: colors.white,
  },
  textInputContainers: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    width: widthPercentageToPx(100),
    marginTop: 10,
  },
  imageContainer: {
    height: heightPercentageToPx(35),
    width: widthPercentageToPx(100),
  },
  loginBackgroundImages: {
    height: "100%",
    width: "100%",
  },
});
