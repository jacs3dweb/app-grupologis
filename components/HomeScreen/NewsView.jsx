import { useState } from "react";
import { StyleSheet, ScrollView, View, Modal } from "react-native";
import { images } from "../../utils";

import Layout from "../layout/Layout.jsx";
import MainCardInfo from "./homeView/MainCardInfo";
import ViewTitleCard from "./homeView/ViewTitleCard";
import ConfirmActivity from "../common/ConfirmActivity";
import FormNew from "./newsView/FormNews";

const News = (props) => {
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
      <ScrollView>
        <ViewTitleCard
          title={"Novedades"}
          buttonText="+ Nueva"
          onPressAction={() => setModal(!modal)}
        />
        <MainCardInfo
          firstTitle={"Sistema"}
          secondTitle="de novedades"
          description={
            "Podrás conocer el estado o trazabilidad de tus novedades"
          }
          image={images.employeeNimage}
        />
      </ScrollView>
      {modal && (
        <Modal animationType="slide" visible={modal} transparent={true}>
          <View style={styles.modalContainer}>
            {showForm ? (
              <FormNew
                closeModal={() => setModal(false)}
                onConfirm={closeAfterConfirm}
              />
            ) : (
              <ConfirmActivity
                closeModal={() => setModal(false)}
                title="Su solicitud de permiso ha sido enviada"
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

export default News;
