import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import BillsList from "../components/HomeScreen/billView/BillsList";
import MainCardInfo from "../components/HomeScreen/homeView/MainCardInfo";
import ViewTitleCard from "../components/HomeScreen/homeView/ViewTitleCard";
import Layout from "../components/layout/Layout";
import { heightPercentageToPx, images, widthPercentageToPx } from "../utils";

const ClientsInvoiceView = ({ props }) => {
  return (
    <Layout props={{ ...props }}>
      <ViewTitleCard
        title={"Facturas clientes"}
        buttonText="  Buscar"
        onPressAction={() => console.log("nueva factura")}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <MainCardInfo
          firstTitle={"Descarga"}
          secondTitle="facturas clientes"
          description={
            "Podrás conocer el estado o trazabilidad de tus novedades"
          }
          image={images.employeeNimage}
        />
        <BillsList/>
      </ScrollView>
    </Layout>
  );
};

export default ClientsInvoiceView;

const styles = StyleSheet.create({
  generalView: {
    height: heightPercentageToPx(100),
    width: widthPercentageToPx(100),
  },
});
