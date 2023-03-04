import { Image, StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import React from "react";
import {
  colors,
  heightPercentageToPx,
  images,
  widthPercentageToPx,
} from "../../utils";

const Header = ({}) => {
  return (
    <View style={styles.notbar}>
      <Image style={styles.userImg} source={{ uri: images.userImage }} />
      <Pressable onPress={() => console.log("presion")}>
        <View style={styles.notbar2}>
          <Ionicons name="md-notifications-outline" size={30} color="white" />
        </View>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  notbar: {
    width: widthPercentageToPx(90),
    height: heightPercentageToPx(10),
    marginTop: 10,
    marginBottom: 10,
    overflow: "visible",
    backgroundColor: colors.mainBlue,
    borderRadius: 9,
  },
  notbar2: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: widthPercentageToPx(10),
    height: heightPercentageToPx(5),
    overflow: "visible",
    left: 290,
    bottom: 35,
  },
  userImg: {
    height: heightPercentageToPx(10),
    width: widthPercentageToPx(20),
    height: 40,
    width: 40,
    marginTop: 17,
    left: 20,
  },
});
