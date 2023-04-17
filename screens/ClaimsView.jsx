import { Modal, ScrollView, StyleSheet, View } from "react-native";
import { images } from "../utils";

import { useState } from "react";
import ConfirmActivity from "../components/common/ConfirmActivity";
import ClaimList from "../components/HomeScreen/claimsView/ClaimList";
import Form from "../components/HomeScreen/claimsView/Form";
import MainCardInfo from "../components/HomeScreen/homeView/MainCardInfo";
import ViewTitleCard from "../components/HomeScreen/homeView/ViewTitleCard";
import Layout from "../components/layout/Layout.jsx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchPost } from "../utils/functions";
const Claim = (props) => {
  const [modal, setModal] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const sendMailQueja = async (idQueja, empl, tipo) => {
    const info = `idQuejas=${idQueja}&tipousuarioId=${tipo}&IdUsuario=${empl}`;
    const path = "usuario/SendMailQuejas.php";
    const respApi = await fetchPost(path, info);
    console.log(respApi);
    if (respApi.status) {
      const data = respApi.data;
      if (data === "TRUE") {
        setShowForm(false);
        setTimeout(() => {
          setModal(false);
        }, 3000);
      } else {
        console.log("error al enviar el correo electronico");
      }
    } else {
      console.log("error en el servidor");
    }
  };

  const closeAfterConfirm = async (infoPqr) => {
    let infoLog = await AsyncStorage.getItem("logged");
    infoLog = JSON.parse(infoLog);
    const empSel = infoLog.empSel;
    const codEmp = infoLog.codEmp;
    const typeCli = infoLog.type === "business" ? 2 : 1;

    const info = `Asunto=${infoPqr.asunto}&Detalle=${infoPqr.description}&Empresa=${empSel}&IdUsuario=${codEmp}&tipousuarioId=${typeCli}`;
    const path = "usuario/getQuejas.php";
    const respApi = await fetchPost(path, info);
    console.log(respApi);
    if (respApi.status) {
      const data = respApi.data;
      if (data.Correcto === 1) {
        if (data.Msg === "Usuario no Encontrado") {
          console.log("El usuario no existe");
        } else {
          sendMailQueja(data.Id, codEmp, typeCli);
        }
      } else {
        console.log("Error del servidor");
      }
    } else {
      console.log("Error del servidor");
    }
  };
  return (
    <Layout props={{ ...props }}>
      <ViewTitleCard
        title={"Quejas y reclamos"}
        buttonText="+ Nueva"
        onPressAction={() => setModal(!modal)}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <MainCardInfo
          firstTitle={"Quejas"}
          secondTitle="y reclamos"
          description={
            "Podrás conocer el estado o trazabilidad de tus novedades"
          }
          image={images.employeeNimage}
        />
        <ClaimList />
      </ScrollView>
      {modal && (
        <Modal animationType="slide" visible={modal} transparent={true}>
          <View style={styles.modalContainer}>
            {showForm ? (
              <Form
                closeModal={() => setModal(false)}
                onConfirm={closeAfterConfirm}
              />
            ) : (
              <ConfirmActivity
                closeModal={() => setModal(false)}
                title="Su queja o reclamo ha sido enviada"
                description="Recuerde estar pendiente a su correo para recibir la respuesta"
                image={images.checkImage}
              />
            )}
          </View>
        </Modal>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Claim;
