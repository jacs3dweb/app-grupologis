import { StyleSheet, Text, View, Button } from "react-native";

import React from "react";
import { colors } from "../utils";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        title="Ir a login"
        onPress={() => navigation.navigate("Login")}
      ></Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainBackgroundColor,
  },
});
