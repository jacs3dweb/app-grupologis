import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import CardEinfo from "../components/HomeScreen/homeView/CardEinfo";
import Layout from "../components/layout/Layout";
import FormBillsModal from "../components/HomeScreen/masterEmployee/FormMasterEmployee";
import { heightPercentageToPx, widthPercentageToPx } from "../utils";

const NewEntryView = (props) => {
  const { navigation } = props;
  return (
    <Layout props={{ ...props }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <CardEinfo
          title={"maestro empleado"}
          showButton={false}
          showInput={false}
          onPressAction={() => setModal(!modal)}
          handleGoBack={() => navigation.navigate("EmployeeManagement")}
        />
        <FormBillsModal />
      </ScrollView>
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
