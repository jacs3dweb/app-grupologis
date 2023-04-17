import React from "react";
import { useState } from "react";
import { Modal, ScrollView, StyleSheet, View } from "react-native";
import CardEinfo from "../components/HomeScreen/homeView/CardEinfo";
import NewEntryList from "../components/HomeScreen/newEntryView/NewEntryList";
import ConfirmActivity from "../components/common/ConfirmActivity";
import { images } from "../utils";

import Layout from "../components/layout/Layout";
import { heightPercentageToPx, widthPercentageToPx } from "../utils";

import MultiStepForm from "../components/HomeScreen/newEntryView/MultiStepForm";

const NewEntryView = (props) => {
  const { navigation } = props;
  const [modal, setModal] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const closeAfterConfirm = () => {
    setShowForm(false);

    setTimeout(() => {
      setModal(false);
      setShowForm(true);
    }, 3000);
  };
  return (
    <Layout props={{ ...props }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <CardEinfo
          title={"Novedades ingreso"}
          buttonText="Generar"
          showButton={true}
          showInput={false}
          onPressAction={() => setModal(!modal)}
          handleGoBack={() => navigation.navigate("EmployeeManagement")}
        />
        <NewEntryList />
      </ScrollView>
      {modal && (
        <Modal animationType="slide" visible={modal} transparent={true}>
          <View style={styles.modalContainer}>
            {showForm ? (
              <MultiStepForm
                closeModal={() => setModal(false)}
                onConfirm={closeAfterConfirm}
              />
            ) : (
              <ConfirmActivity
                closeModal={() => {
                  setModal(false);
                  setShowForm(true);
                }}
                title="Se ha generado su solicitud de ingreso"
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

export default NewEntryView;

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
