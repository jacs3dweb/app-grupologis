import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
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
import MainCardInfo from "./homeView/MainCardInfo";
import ViewTitleCard from "./homeView/ViewTitleCard";
import { Feather } from "@expo/vector-icons";
import { InputWithIcon } from "../common/Input"
const Claim = (props) => {
  const [modal, setModal] = useState(false)
  return (
    <Layout props={{ ...props }}>
      <ScrollView>
        <ViewTitleCard
          title={"Quejas y reclamos"}
          buttonText="+ Nueva"
          onPressAction={() => setModal(!modal)}
        />
        {modal && (
          <Modal
            animationType="fade"
            visible={modal}
            transparent={true}

          >
            <View styles={styles.contenedor}>
              <View style={styles.modalView}>
                <Pressable onPress={() => setModal(false)}>
                  <View style={styles.goBackButton}>
                    <Feather name="x" size={24} color="black" />
                  </View>
                </Pressable>
                <View>
                  <Text style={styles.welcomeText}>
                    Nueva
                  </Text>
                  <Text style={styles.toApp}>
                    quejas y reclamos
                  </Text>
                  <Text style={styles.welcomeDesc}>Puedes interponer una queja o reclamo por este medio o hacer seguimiento de las mismas</Text>
                </View>
                <View>
                  <TextInput style={styles.textInputContainers} placeholder="">

                  </TextInput>
                  <TextInput style={styles.textInputContainers2} placeholder="">

                  </TextInput>
                </View>
                <View style={styles.asClaimsButton} >
                  <Pressable>
                    <Text style={{color: colors.white}}>
                      Enviar
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>

          </Modal>
        )}
        <MainCardInfo
          firstTitle={"Quejas"}
          secondTitle="y reclamos"
          description={
            "Podrás conocer el estado o trazabilidad de tus novedades"
          }
          image={images.employeeNimage}
        />
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
    marginLeft: 70,
    marginRight: 40,
    marginBottom: 2,
    marginTop: 2,
    color: colors.mainBlue,
    ...getFontStyles(30),
  },
  toApp: {
    ...getFontStyles(17),
    marginLeft: 70,
    marginRight: 40,
    marginBottom: 2,
    marginTop: 0,
    fontFamily: "Poppins-Bold",
  },

  descriptionContainer: {
    width: widthPercentageToPx(60),
  },
  welcomeDesc: {
    fontFamily: "Poppins-Regular",
    color: colors.descriptionColors,
    marginLeft: 70,
    marginRight: 40,
    marginBottom: 15,
    marginTop: 15,
    ...getFontStyles(13, 0.5, 0.9),
  },

  workersImage: {
    height: heightPercentageToPx(20),
    width: widthPercentageToPx(40),
    left: 120,
    bottom: 105,
  },

  textInputContainers: {
    backgroundColor: colors.mainBackgroundColor,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 8,
    width: widthPercentageToPx(70),
    height: 50,
    marginTop: 10,
    marginLeft: 35,
    borderRadius: 17,

  },
  textInputContainers2: {
    backgroundColor: colors.mainBackgroundColor,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    width: widthPercentageToPx(70),
    height: heightPercentageToPx(20),

    marginTop: 20,
    marginBottom: 30,
    marginLeft: 35,
    borderRadius: 17,
  },
  asClaimsButton: {
    backgroundColor: colors.buttonsColor,
    fontFamily: "Poppins-Regular",
    left:35,
    height: 50,
    width: widthPercentageToPx(70),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginTop: 10,
    marginBottom:50,
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
  modalView: {
    top: 45,
    backgroundColor: colors.white,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    transform: [{ translateY: 50 }],
    shadowColor: "",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  contenedor: {
    flex: 1
  },
  goBackButton: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
    opacity: 0.2,
    borderRadius: 15,
    height: 30,
    width: 30,
  },
});

export default Claim;
