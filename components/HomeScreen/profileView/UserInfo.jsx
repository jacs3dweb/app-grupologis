import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import authContext from "../../../context/auth/authContext";
import { getFontStyles, colors } from "../../../utils";

const UserInfo = () => {
  const { userData } = useContext(authContext);
  return (
    <View style={styles.userInfoContainer}>
      <Image style={styles.profileImage} source={{ uri: userData.image }} />
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
});
