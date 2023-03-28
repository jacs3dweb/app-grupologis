import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import CardEinfo from "../components/HomeScreen/homeView/CardEinfo";
import NewEntryList from "../components/HomeScreen/newEntryView/NewEntryList";
import Layout from "../components/layout/Layout";
import { heightPercentageToPx, widthPercentageToPx } from "../utils";

const ResumeView = (props) => {
  const { navigation } = props;
  return (
    <Layout props={{ ...props }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <CardEinfo
          title={"Novedades ingreso"}
          buttonText="Buscar"
          showButton={true}
          showInput={false}
          onPressAction={() => setModal(!modal)}
          handleGoBack={() => navigation.navigate("EmployeeManagement")}
        />
        {/* <NewEntryList /> */}
      </ScrollView>
    </Layout>
  );
};

export default ResumeView;

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
