import { Modal, ScrollView, StyleSheet, View } from "react-native";
import { images } from "../utils";

import { useState } from "react";
import ConfirmActivity from "../components/common/ConfirmActivity";
import ClaimList from "../components/HomeScreen/claimsView/ClaimList";
import Form from "../components/HomeScreen/claimsView/Form";
import MainCardInfo from "../components/HomeScreen/homeView/MainCardInfo";
import ViewTitleCard from "../components/HomeScreen/homeView/ViewTitleCard";
import Layout from "../components/layout/Layout.jsx";
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
