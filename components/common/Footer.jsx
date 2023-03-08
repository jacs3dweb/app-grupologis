import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, heightPercentageToPx, widthPercentageToPx } from "../../utils";
import { Feather } from "@expo/vector-icons";

const Footer = (props) => {
  const { navigation } = props;
  const tabsScreens = [
    {
      id: "downloads",
      icon: "download",
      screen: "DownloadView",
    },
    {
      id: "news",
      icon: "calendar",
      screen: "NewsView",
    },
    {
      id: "pqr",
      icon: "message-square",
      screen: "ClaimsView",
    },
    {
      id: "profile",
      icon: "user",
      screen: "ProfileView",
    },
  ];
  return (
    <View style={styles.footerContainer}>
      {tabsScreens.map((sc) => (
        <Pressable key={sc.id} onPress={() => navigation.navigate(sc.screen)}>
          <View style={styles.navbarOption(false)}>
            <Feather
              name={sc.icon}
              size={24}
              color={false ? "white" : "#D9D9FE"}
            />
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    marginHorizontal: 20,
    position: "absolute",
    bottom: heightPercentageToPx(3),
    width: widthPercentageToPx(90),
    height: 52,

    backgroundColor: colors.white,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    borderRadius: 30,
  },
  navbarOption: (isSelected) => ({
    width: 45,
    height: 45,
    borderRadius: 40,
    backgroundColor: isSelected ? "#D9D9FE" : colors.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
});
