import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import authContext from "../../../context/auth/authContext";

import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  images,
  widthPercentageToPx,
} from "../../../utils";

const UserInfo = () => {
  const { userData } = useContext(authContext);
  return (
    <View style={styles.userInfoContainer}>
      {userData.image ? (
        <View>
          <Image style={styles.userImg} source={{ uri: userData.image }} />
        </View>
      ) : (
        <View>
          {userData.gender === "male" ? (
            <Image style={styles.userImg} source={{ uri: userData.imgmale }} />
          ) : (
            <Image
              style={styles.userImg}
              source={{ uri: userData.imgfemale }}
            />
          )}
        </View>
      )}
      <Text style={styles.nameText}>{userData.name}</Text>
      <Text style={styles.roleText}>
        {userData.role === "business" ? "Empresa" : "Empleado"}
      </Text>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  userInfoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    height: 88,
    width: 88,
  },
  nameText: {
    fontFamily: "Poppins-Bold",
    marginTop: 10,
    ...getFontStyles(17, 0.5, 0.9),
  },
  roleText: {
    fontFamily: "Volks-Serial-Light",
    color: colors.descriptionColors,
    ...getFontStyles(14, 0.5, 0.9),
  },

  userImg: {
    height: heightPercentageToPx(10),
    width: widthPercentageToPx(20),
    height: 85,
    width: 85,
    borderRadius: 50,
    backgroundColor: colors.purpleIcons,
  },
});
