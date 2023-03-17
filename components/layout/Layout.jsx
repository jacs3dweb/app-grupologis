import React from "react";
import { StyleSheet, View } from "react-native";
import { colors, heightPercentageToPx } from "../../utils";
import Header from "./Header";

const Layout = ({ children, props }) => {
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
    height: heightPercentageToPx(100),
    backgroundColor: colors.generalBackgroundColor,
  },
});
