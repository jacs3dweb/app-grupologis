import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { colors, heightPercentageToPx } from "../../utils";
import Header from "./Header";
import { Text } from "react-native";
import LoaderProgContext from "../../context/loader/LoaderProgContext";

const Layout = ({ children, props }) => {
  const { showLoader } = useContext(LoaderProgContext);

  return (
    <View style={styles.mainContainer}>
      <Header />
      {showLoader && <Text>Cargando</Text>}
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
