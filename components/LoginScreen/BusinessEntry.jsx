import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  images,
  widthPercentageToPx,
} from "../../utils";
// cambiar vista Download al terminar vista claim
import { Picker } from "@react-native-picker/picker";
import { useContext, useEffect, useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import authContext from "../../context/auth/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchPost } from "../../utils/functions";

let consulta = true;

const BusinessE = ({ navigation }) => {
  const { setBusiness } = useContext(authContext);
  const [businessOptionsNew, setBusinessOption] = useState([]);
  const pickerRef = useRef(null);
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const handleSelectBusiness = async () => {
    console.log("llego handleSelectBusiness");
    const type = await AsyncStorage.getItem("type");
    console.log(type);
    const typeCli = type === "business" ? 2 : 1;
    const identification = await AsyncStorage.getItem("identi");

    const info = `empresaId=${selectedBusiness.value}&identificacionId=${identification}`;
    const path =
      typeCli === 1
        ? "usuario/getPerfilInfo.php"
        : "usuario/getPerfilClienteInfo.php";
    const respApi = await fetchPost(path, info);
    console.log(respApi);
    if (respApi.status) {
      const data = respApi.data;
      data.codEmp = identification;
      data.empSel = selectedBusiness.value;
      data.type = type;
      await AsyncStorage.clear();
      const loggedIn = JSON.stringify(data);
      await AsyncStorage.setItem("logged", loggedIn);
      navigation.navigate("Home");
    } else {
      console.log("Ocurrio un error en el sistema");
    }
  };

  const returnPag = async () => {
    consulta = true;
    await AsyncStorage.clear();
    navigation.goBack();
    // navigation.navigate("Login");
  };

  useEffect(() => {
    console.log("consulta", consulta);
    if (consulta) {
      const addOptionsBusiness = (options) => {
        const regex =
          /<option[^>]*value=['"]([^'"]*)['"][^>]*>([^<]*)<\/option>/g;
        const result = [];

        [...options.matchAll(regex)].forEach((match, idx) => {
          result.push({
            label: match[2],
            value: match[1] || null,
          });
        });
        console.log("result", result);
        setBusinessOption((businessOptionsNew) =>
          businessOptionsNew.concat(result)
        );
        consulta = false;
      };

      const getOptionsBusiness = async () => {
        const type = await AsyncStorage.getItem("type");
        const typeCli = type === "business" ? 2 : 1;
        const identification = await AsyncStorage.getItem("identi");
        const phone = await AsyncStorage.getItem("phone");

        const body = `tipousuarioId=${typeCli}
          &identificacionId=${identification}
          &contactNumeroTelefonico=${phone}`;
        const path = "usuario/getEmpresa.php";
        const respApi = await fetchPost(path, body);
        console.log("respApi", respApi);
        if (respApi.status) {
          const data = respApi.data;
          if (data != "falseEmpresa") {
            addOptionsBusiness(data);
          } else {
            console.log("no tiene acceso al sistema");
          }
        } else {
          console.log("ocurrio un error en el sistema");
        }
      };
      getOptionsBusiness();
    }
  }, [businessOptionsNew]);
  console.log("businessOptionsNew", businessOptionsNew);
  return (
    <View style={styles.container}>
      <Pressable onPress={() => returnPag()}>
        <View style={styles.goBackButton}>
          <Feather name="x" size={24} color="black" />
        </View>
      </Pressable>
      <View style={styles.topContainer}>
        <Image style={styles.logoImage} source={{ uri: images.colorLogo }} />
        <View style={styles.title}>
          <Text style={styles.subtitle}>Elija</Text>
          <Text style={styles.subtitle}>la empresa.</Text>

          <View style={styles.descriptionContainer}>
            <Text style={styles.welcomeDesc}>
              Seleccione la empresa donde desea realizar la consulta.
            </Text>
          </View>
        </View>
        <View>
          <Picker
            ref={pickerRef}
            // style={{
            //   display: "none",
            //   opacity: 0,
            // }}
            prompt="Empresas disponibles"
            selectedValue={selectedBusiness}
            onValueChange={(itemValue) => {
              const selected = businessOptionsNew.find(
                (e) => e.value === itemValue
              );
              setSelectedBusiness(selected);
            }}
          >
            {businessOptionsNew.map((op, idx) => (
              <Picker.Item
                key={idx}
                enabled={op.value !== null}
                label={op.label}
                value={op.value}
              />
            ))}
          </Picker>
          {
            <Pressable
              onPress={() => pickerRef.current.focus()}
              // style={styles.selectorContainer}
            >
              <View>
                <Text
                // style={styles.selectedBusiness}
                >
                  {selectedBusiness
                    ? selectedBusiness.label
                    : "Seleccione la empresa"}
                </Text>
              </View>
            </Pressable>
          }
        </View>

        <Pressable onPress={handleSelectBusiness} style={styles.pressable}>
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
  selectedBusiness: {
    fontFamily: "Poppins-Light",
    color: colors.descriptionColors,
    ...getFontStyles(18, 0.5, 0.9),
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
  pressable: {
    width: "100%",
    height: "100%",
    // position: "absolute",
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
    padding: 10,
  },
  loginBackgroundImages: {
    width: "100%",
    height: "100%",
  },
  selectorContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: widthPercentageToPx(65),
    height: heightPercentageToPx(7),
    marginTop: 10,
    borderRadius: 7,
    backgroundColor: colors.white,
  },
  goBackButton: {
    position: "absolute",
    top: 20,
    left: widthPercentageToPx(-45),
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

export default BusinessE;
