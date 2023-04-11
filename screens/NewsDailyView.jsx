import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import CardEinfo from "../components/HomeScreen/homeView/CardEinfo";
import Layout from "../components/layout/Layout";
import {
  colors,
  notices,
  getFontStyles,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../utils";

import NewsDailyCard from "../components/HomeScreen/newsDaily/newsDailyCard";

const NewsDailyView = (props) => {
  const { navigation } = props;

  return (
    <Layout props={{ ...props }}>
      <CardEinfo
        title={"Noticias"}
        showButton={false}
        showInput={false}
        handleGoBack={() => navigation.navigate("DownloadView")}
      />

      <ScrollView styles={styles.inputContainer}>
        {notices.map((e) => (
          <NewsDailyCard
            descNot={e.description}
            titleNot={e.title}
            id={e.id}
            imageNot={e.image}
          />
        ))}
      </ScrollView>
    </Layout>
  );
};

export default NewsDailyView;

const styles = StyleSheet.create({
  titlesContainer: {
    paddingHorizontal: 30,
  },
  subtitle: {
    ...getFontStyles(17),
    marginBottom: 20,
    marginTop: 20,
    fontFamily: "Poppins-Bold",
  },
  inputContainer: {
    width: widthPercentageToPx(90),
  },
  welcomeDesc: {
    fontFamily: "Poppins-Regular",
    color: colors.descriptionColors,
    marginBottom: 15,
    marginTop: 15,
    ...getFontStyles(13, 0.5, 0.9),
  },
  titleContainer: {
    backgroundColor: colors.mainBackgroundColor,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: widthPercentageToPx(70),
    fontFamily: "Poppins-Regular",
    height: 50,
    borderRadius: 17,
    padding: 15,
  },
  descriptionContainer: {
    backgroundColor: colors.mainBackgroundColor,
    width: widthPercentageToPx(70),
    fontFamily: "Poppins-Regular",
    height: heightPercentageToPx(20),
    borderRadius: 17,
    padding: 15,
    display: "flex",
    alignItems: "flex-start",
  },
});
