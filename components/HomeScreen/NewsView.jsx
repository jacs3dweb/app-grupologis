import { useState } from "react";
import { Modal, ScrollView, StyleSheet, View } from "react-native";
import { images } from "../../utils";

import Layout from "../layout/Layout.jsx";
import MainCardInfo from "./homeView/MainCardInfo";
import ViewTitleCard from "./homeView/ViewTitleCard";
import FormNew from "./newsView/FormNews";
import NewsList from "./newsView/NewsList";

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
      <ViewTitleCard
        title={"Novedades"}
        buttonText="+ Nueva"
        onPressAction={() => setModal(!modal)}
      />

      <ScrollView>
        <MainCardInfo
          firstTitle={"Sistema"}
          secondTitle="de novedades"
          description={
            "Podrás conocer el estado o trazabilidad de tus novedades"
          }
          image={images.employeeNimage}
        />
        <NewsList />
      </ScrollView>
      {modal && (
        <Modal animationType="slide" visible={modal} transparent={true}>
          <View style={styles.modalContainer}>
            {showForm && (
              <FormNew
                closeModal={() => setModal(false)}
                onConfirm={closeAfterConfirm}
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
