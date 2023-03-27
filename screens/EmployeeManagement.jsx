import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import MainCardInfo from "../components/HomeScreen/homeView/MainCardInfo";
import Layout from "../components/layout/Layout";
import EmployeeMcard from "../components/HomeScreen/EmployeeManagement/EmployeeMcard";
import {
  employeeManagement,
  heightPercentageToPx,
  images,
  widthPercentageToPx,
} from "../utils";

import SvgHvida from "../assets/images/components/HomeScreen/EmployeeManagement/SvgHvida";
import SvgNovedaI from "../assets/images/components/HomeScreen/EmployeeManagement/SvgNovedaI";
import SvgMaestroE from "../assets/images/components/HomeScreen/EmployeeManagement/SvgMaestroE";

const displaySvg = (type) => {
  switch (type) {
    case "hvida":
      return <SvgHvida />;
    case "novedai":
      return <SvgNovedaI />;
    case "maestroe":
      return <SvgMaestroE />;
    default:
      return null;
  }
};

const EmployeeManagement = ({ props }) => {
  //const [dataCard, setDataCard] = useState()
  return (
    <Layout props={{ ...props }}>
      <MainCardInfo
        firstTitle={"Gestión de"}
        secondTitle="empleados"
        description={
          "Podrás descargar hojas de vida, certificados y generar novedades"
        }
        image={images.employeeNimage}
      />
      <View style={styles.containerScroll}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.employeemCardsContainer}>
            {employeeManagement.map((e) => (
              <EmployeeMcard
                key={e.id}
                desc={e.description}
                image={displaySvg(e.id)}
                title={e.title}
                id={e.id}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default EmployeeManagement;

const styles = StyleSheet.create({
  generalView: {
    height: heightPercentageToPx(100),
    width: widthPercentageToPx(100),
  },

  containerScroll: {
    width: widthPercentageToPx(90),
    height: heightPercentageToPx(32.5),
    paddingTop: 20,
  },
  employeemCardsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
