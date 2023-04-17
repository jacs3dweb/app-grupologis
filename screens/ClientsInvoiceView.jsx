import React, { useEffect, useState } from "react";
import { Modal, ScrollView, StyleSheet, View } from "react-native";
import BillsList from "../components/HomeScreen/billView/BillsList";
import FormBillsModal from "../components/HomeScreen/billView/FormBillsModal";
import MainCardInfo from "../components/HomeScreen/homeView/MainCardInfo";
import ViewTitleCard from "../components/HomeScreen/homeView/ViewTitleCard";
import Layout from "../components/layout/Layout";
import { heightPercentageToPx, images, widthPercentageToPx } from "../utils";
import { fetchPost } from "../utils/functions";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ClientsInvoiceView = ({ props }) => {
  const [modal, setModal] = useState(false);
  const [allBillsList, setAllBillsList] = useState([]);

  const message = (mess, type) => {
    Toast.show({
      type: type,
      text1: mess,
      position: "bottom",
      visibilityTime: 2000,
    });
  };

  useEffect(() => {
    console.log("allBillsList", allBillsList);
  }, []);

  const handleSearchBill = async (val) => {
    setModal(false);
    console.log("handling search bill", val);
    let { month, year } = val;
    month += 1;
    let infoLog = await AsyncStorage.getItem("logged");
    infoLog = JSON.parse(infoLog);
    const empSel = infoLog.empSel;
    const codEmp = infoLog.codEmp;

    const info = `Empresa=${empSel}&NitCliente=${codEmp}&Anho=${year}&Mes=${month}`;
    const path = "usuario/getFacturasClienteEmpresa.php";
    console.log(info, path);
    const respApi = await fetchPost(path, info);
    console.log(respApi);
    if (respApi.status) {
      const data = respApi.data;
      if (data != "ERROR") {
        setAllBillsList(data);
      }
      console.log("data", data);
    } else {
      message("Error del servidor", "error");
    }
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
        <BillsList billsList={allBillsList} />
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
