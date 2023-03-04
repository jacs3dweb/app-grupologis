import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../common/Header";
import { colors, heightPercentageToPx } from "../../utils";

const Layout = ({ children }) => {
  return (
    <View style={styles.mainContainer}>
      <Header />
      {children}
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: heightPercentageToPx(100),
    backgroundColor: colors.generalBackgroundColor,
  },
});
