import React, { useState } from "react";
import { ScrollView, StyleSheet, Modal, View } from "react-native";
import BillsList from "../components/HomeScreen/billView/BillsList";
import MainCardInfo from "../components/HomeScreen/homeView/MainCardInfo";
import ViewTitleCard from "../components/HomeScreen/homeView/ViewTitleCard";
import Layout from "../components/layout/Layout";
import { heightPercentageToPx, images, widthPercentageToPx } from "../utils";
import ConfirmActivity from "../components/common/ConfirmActivity";
import FormBillsModal from "../components/HomeScreen/billView/FormBillsModal";
const ClientsInvoiceView = ({ props }) => {
  const [modal, setModal] = useState(false);


  return (
    <Layout props={{ ...props }}>
      <ViewTitleCard
        title={"Facturas clientes"}
        buttonText="  Buscar"
        onPressAction={() => setModal(!modal)}
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
        <BillsList />
      </ScrollView>
      {modal && (
        <Modal animationType="slide" visible={modal} transparent={true}>
          <View style={styles.modalContainer}>
            <FormBillsModal
              closeModal={() => setModal(false)}
              onConfirm={console.log("sexo")}
            />
          </View>
        </Modal>
      )}
    </Layout>
  );
};

export default ClientsInvoiceView;

const styles = StyleSheet.create({
  generalView: {
    height: heightPercentageToPx(100),
    width: widthPercentageToPx(100),
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
