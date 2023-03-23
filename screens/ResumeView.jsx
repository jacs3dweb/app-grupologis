import React, { useState } from "react";
import { Modal, ScrollView, StyleSheet, View } from "react-native";
import BillsList from "../components/HomeScreen/billView/BillsList";
import Layout from "../components/layout/Layout";
import { heightPercentageToPx, images, widthPercentageToPx } from "../utils";
const ResumeView = ({ props }) => {

  return (
    <Layout props={{ ...props }}>
      
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <BillsList />
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