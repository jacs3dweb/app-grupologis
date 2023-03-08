import { StyleSheet, View, ScrollView, Modal } from "react-native";
import { images } from "../../utils";

import { useState } from "react";
import Layout from "../layout/Layout.jsx";
import MainCardInfo from "./homeView/MainCardInfo";
import ViewTitleCard from "./homeView/ViewTitleCard";
import Form from "./claimsView/Form";
import ConfirmActivity from "../common/ConfirmActivity";
const Claim = (props) => {
  const [modal, setModal] = useState(false);
  return (
    <Layout props={{ ...props }}>
      <ViewTitleCard
        title={"Quejas y reclamos"}
        buttonText="+ Nueva"
        onPressAction={() => setModal(!modal)}
      />
      <ScrollView>
        <MainCardInfo
          firstTitle={"Quejas"}
          secondTitle="y reclamos"
          description={
            "Podrás conocer el estado o trazabilidad de tus novedades"
          }
          image={images.employeeNimage}
        />
      </ScrollView>
      {modal && (
        <Modal animationType="slide" visible={modal} transparent={true}>
          <View style={styles.modalContainer}>
            {/* <Form closeModal={() => setModal(false)} /> */}
            <ConfirmActivity
              closeModal={() => setModal(false)}
              title="Su queja o reclamo ha sido enviada"
              description="Recuerde estar pendiente a su correo para recibir la respuesta"
              image={images.ch}
            />
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
