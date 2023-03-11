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
import { useContext, useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import authContext from "../../context/auth/authContext";

const BusinessE = ({ navigation }) => {
  const { businessOptions, setBusiness } = useContext(authContext);
  const pickerRef = useRef(null);
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const handleSelectBusiness = () => {
    setBusiness(selectedBusiness);
    navigation.navigate("Home");
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
          <Text style={styles.subtitle}>Elija</Text>
          <Text style={styles.subtitle}>la empresa.</Text>

          <View style={styles.descriptionContainer}>
            <Text style={styles.welcomeDesc}>
              Seleccione la empresa donde desea realizar la consulta.
            </Text>
          </View>
        </View>
        <Picker
          ref={pickerRef}
          style={{
            display: "none",
            opacity: 0,
          }}
          prompt="Empresas disponibles"
          selectedValue={selectedBusiness}
          onValueChange={(itemValue) => {
            const selected = businessOptions.find((e) => e.value === itemValue);
            setSelectedBusiness(selected);
          }}
        >
          {businessOptions.map((op, idx) => (
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
            style={styles.selectorContainer}
          >
            <View>
              <Text style={styles.selectedBusiness}>
                {selectedBusiness
                  ? selectedBusiness.label
                  : "Seleccione la empresa"}
              </Text>
            </View>
          </Pressable>
        }
        <Pressable onPress={handleSelectBusiness}>
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
