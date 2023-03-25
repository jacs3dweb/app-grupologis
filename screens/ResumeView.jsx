import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import CardEinfo from "../components/HomeScreen/homeView/CardEinfo";
import ResumeList from "../components/HomeScreen/resumeView/ResumeList";
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
          title={"Hojas de vida"}
          buttonText="  Buscar"
          onPressAction={() => setModal(!modal)}
          handleGoBack={() => navigation.navigate("EmployeeManagement")}
        />

        <ResumeList />
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
