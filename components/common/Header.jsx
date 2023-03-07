import {
  Image,
  StyleSheet,
  View,
  Pressable,
  Platfor,
  Text,
} from "react-native";
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
      <View style={styles.notbarInfoUser}>
        <Image style={styles.userImg} source={{ uri: images.userImage }} />
        <View style={styles.infoUser}>
          <Text style={styles.hello}>Hola!</Text>
          <Text style={styles.nameUser}>Mary Quiñones</Text>
        </View>
      </View>
      <View>
        <Pressable onPress={() => console.log("presion")}>
          <Ionicons name="md-notifications-outline" size={30} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

// ...Platform.select({
//       ios: {
//         backgroundColor: "red",
//       },
//       android: {
//         backgroundColor: "blue",
//       },
//     }),

const styles = StyleSheet.create({
  notbar: {
    width: widthPercentageToPx(90),
    height: heightPercentageToPx(9),
    marginTop: 60,
    marginBottom: 10,
    overflow: "visible",
    backgroundColor: colors.mainBlue,
    borderRadius: 9,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },

  notbarInfoUser: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  hello: {
    color: colors.light,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },

  nameUser: {
    color: colors.light,
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    lineHeight: 17,
  },

  infoUser: {
    marginLeft: 10,
  },

  userImg: {
    height: heightPercentageToPx(10),
    width: widthPercentageToPx(20),
    height: 45,
    width: 45,
  },
});
