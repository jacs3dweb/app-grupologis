import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import CardEinfo from "../components/HomeScreen/homeView/CardEinfo";
import ResumeList from "../components/HomeScreen/resumeView/ResumeList";
import Layout from "../components/layout/Layout";
import { heightPercentageToPx, widthPercentageToPx } from "../utils";

const ResumeView = (props) => {
  const { navigation } = props;
  const [identif, setIdentif] = useState("");

  const handleInputChange = (text) => {
    console.log("handleInputChange", text);
    setIdentif(text);
  };
  return (
    <Layout props={{ ...props }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <CardEinfo
          title={"Hojas de vida"}
          showInput={true}
          onPressAction={() => setModal(!modal)}
          handleGoBack={() => navigation.navigate("EmployeeManagement")}
          onInputChange={handleInputChange}
        />
        <ResumeList idenHoja={identif} />
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
