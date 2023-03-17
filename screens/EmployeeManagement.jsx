import React from "react";
import { StyleSheet } from "react-native";
import MainCardInfo from "../components/HomeScreen/homeView/MainCardInfo";
import Layout from "../components/layout/Layout";
import { heightPercentageToPx, images, widthPercentageToPx } from "../utils";

const EmployeeManagement = ({ props }) => {
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
    </Layout>
  );
};

export default EmployeeManagement;

const styles = StyleSheet.create({
  generalView: {
    height: heightPercentageToPx(100),
    width: widthPercentageToPx(100),
  },
});
