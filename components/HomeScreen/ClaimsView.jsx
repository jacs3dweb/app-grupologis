import { StyleSheet, View, ScrollView, Modal } from "react-native";
import { images } from "../../utils";

import { useState } from "react";
import Layout from "../layout/Layout.jsx";
import MainCardInfo from "./homeView/MainCardInfo";
import ViewTitleCard from "./homeView/ViewTitleCard";
import Form from "./claimsView/Form";
import ConfirmActivity from "../common/ConfirmActivity";
import ClaimList from "./claimsView/ClaimList";
const Claim = (props) => {
  const [modal, setModal] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const closeAfterConfirm = () => {
    setShowForm(false);

    setTimeout(() => {
      setModal(false);
    }, 3000);
  };
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
        <ClaimList/>
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
