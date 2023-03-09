import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import {
  businessDownloadables,
  colors,
  employeeDownloadables,
  getFontStyles,
  heightPercentageToPx,
  images,
  widthPercentageToPx,
} from "../../utils";

import { useContext, useState } from "react";
import Layout from "../layout/Layout.jsx";
import DownloadableCard from "./downloadView/DownloadableCard";
import authContext from "../../context/auth/authContext";

const Download = (props) => {
  const { userData } = useContext(authContext);
  const [dataCards, setDataCards] = useState(
    userData.role === "employee" ? employeeDownloadables : businessDownloadables
  );
  return (
    <Layout props={{ ...props }}>
      <ScrollView>
        <View style={styles.downloadContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.title}>
              <Text style={styles.welcomeText}>Descarga!</Text>
              <Text style={styles.subtitle}>Certificados y documentos</Text>

              <View style={styles.descriptionContainer}>
                <Text style={styles.welcomeDesc}>
                  Trabajamos para mejorar tu experiencia como empleado o
                  empresa.
                </Text>
              </View>
            </View>
            <Image
              style={styles.workersImage}
              source={{ uri: images.loginImage }}
            />
          </View>
          <View style={styles.containerScroll}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.downloadableCardsContainer}>
                {dataCards.map((e) => (
                  <DownloadableCard
                    key={e.id}
                    desc={e.description}
                    image={e.image}
                    title={e.title}
                    id={e.id}
                  />
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
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
    color: colors.mainBlue,
    ...getFontStyles(25),
  },
  toApp: {
    ...getFontStyles(17),
    fontFamily: "Poppins-Bold",
  },

  descriptionContainer: {
    width: widthPercentageToPx(60),
  },
  welcomeDesc: {
    fontFamily: "Volks-Serial-Light",
    color: colors.descriptionColors,
    ...getFontStyles(14, 0.5, 1.1),
  },

  workersImage: {
    height: heightPercentageToPx(30),
    width: widthPercentageToPx(80),
    left: 75,
    bottom: 105,
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
  infoContainer: {
    width: widthPercentageToPx(90),
    height: heightPercentageToPx(33),
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
    height: 310,
    paddingTop: 10,
  },
  downloadableCardsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});

export default Download;
