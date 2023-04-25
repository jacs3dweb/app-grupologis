import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
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
import Toast from "react-native-toast-message";

import NewsDailyCard from "../components/HomeScreen/newsDaily/newsDailyCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { get } from "../utils/axiosInstance";

const NewsDailyView = (props) => {
  const { navigation } = props;
  const [listNotic, setListNotic] = useState([]);
  const urlImg = "https://appgrupologis.com/app/managers/usuario/";

  const showToast = (smg, type) => {
    Toast.show({
      type: type, //"success", error
      text1: smg,
      position: "bottom",
      visibilityTime: 2000,
    });
  };

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    let infoLog = await AsyncStorage.getItem("logged");
    infoLog = JSON.parse(infoLog);
    const empSel = infoLog.empSel;
    const codEmp = infoLog.codEmp;
    let path = "noticia/getNoticiasHabilitadas.php";
    path += `?empresaId=${empSel}&tipousuarioId=${codEmp}`;
    const respApi = await get(path);
    const { status, data } = respApi;
    if (status) {
      if (data != "ERROR") {
        const cantNews = data.shift();
        setListNotic(data);
      } else {
        setListNotic([]);
      }
    } else {
      showToast("Error al obtener noticias", "error");
      console.log("Error al obtener noticias", "error");
      setListNotic([]);
    }
  };

  return (
    <Layout props={{ ...props }}>
      <CardEinfo
        title={"Noticias"}
        showButton={false}
        showInput={false}
        handleGoBack={() => navigation.navigate("DownloadView")}
      />

      <ScrollView styles={styles.inputContainer}>
        {listNotic.map((e, i) => (
          <NewsDailyCard
            key={i}
            descNot={e.mensaje}
            titleNot={e.titulo}
            id={i}
            imageNot={urlImg + e.ruta}
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
