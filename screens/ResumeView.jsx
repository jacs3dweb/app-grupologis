import React, { useState } from "react";
import { Modal, ScrollView, StyleSheet, View } from "react-native";
import ResumeList from "../components/HomeScreen/resumeView/ResumeList";
import Layout from "../components/layout/Layout";
import { heightPercentageToPx, images, widthPercentageToPx } from "../utils";
import MainCardInfo from "../components/HomeScreen/homeView/MainCardInfo";
import CardEinfo from "../components/HomeScreen/homeView/CardEinfo";

const ResumeView = ({ props }) => {

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
        />
        
        <ResumeList/>
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