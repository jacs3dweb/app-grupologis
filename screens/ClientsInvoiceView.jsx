import React, { useState } from "react";
import { Modal, ScrollView, StyleSheet, View } from "react-native";
import BillsList from "../components/HomeScreen/billView/BillsList";
import FormBillsModal from "../components/HomeScreen/billView/FormBillsModal";
import MainCardInfo from "../components/HomeScreen/homeView/MainCardInfo";
import ViewTitleCard from "../components/HomeScreen/homeView/ViewTitleCard";
import Layout from "../components/layout/Layout";
import { heightPercentageToPx, images, widthPercentageToPx } from "../utils";
const ClientsInvoiceView = ({ props }) => {
  const [modal, setModal] = useState(false);

  const handleSearchBill = () => {
    console.log("handling search bill");
    setModal(false);
  };

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
        <BillsList/>
      </ScrollView>
      {modal && (
        <Modal animationType="slide" visible={modal} transparent={true}>
          <View style={styles.modalContainer}>
            <FormBillsModal
              closeModal={() => setModal(false)}
              onConfirm={handleSearchBill}
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
