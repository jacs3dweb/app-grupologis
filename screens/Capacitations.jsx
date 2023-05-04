import { RefreshControl, ScrollView, Text } from "react-native";
import Layout from "../components/layout/Layout";
import React, { useState } from "react";
import CardEinfo from "../components/HomeScreen/homeView/CardEinfo";
import LoaderItemSwitch from "../components/common/loaders/LoaderItemSwitch";
import LoaderItemSwitchDark from "../components/common/loaders/LoaderItemSwitchDark";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchPost } from "../utils/functions";
import CapacitationsList from "../components/HomeScreen/capacitationsView/CapacitationsList";
import { useFocusEffect } from "@react-navigation/native";

const Capacitations = (props) => {
  const { navigation } = props;
  const [refreshing, setRefreshing] = useState(false);
  const [loader, setLoader] = useState(false);
  const [listCapac, setListCapac] = useState([]);

  const getCapacitations = async () => {
    setLoader(true);
    console.log("buscar todas las capacitaciones");
    let infoLog = await AsyncStorage.getItem("logged");
    infoLog = JSON.parse(infoLog);
    const empSel = infoLog.empSel;
    const codEmp = infoLog.codEmp.trim();

    const info = `NitCliente=${codEmp}`;
    const path = "usuario/getCapacitacionesEmp.php";

    const respApi = await fetchPost(path, info);
    console.log("respApi", respApi);
    const { status, data } = respApi;
    if (status) {
      if (data.Correcto == 1 && data.Programa.length > 0) {
        setLoader(false);
        setListCapac(data.Programa);
      } else {
        setLoader(false);
        setListCapac([]);
      }
    } else {
      setLoader(false);
      console.log("error en el servidor");
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      console.log("capacitacions focused");
      getCapacitations();
      return () => {
        console.log("capacitacions unfocused");
      };
    }, [])
  );

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await getCapacitations();
    setRefreshing(false);
  }, []);

  return (
    <Layout props={{ ...props }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <CardEinfo
          title={"Capacitaciones"}
          showButton={false}
          showInput={false}
          handleGoBack={() => navigation.navigate("EmployeeManagement")}
        />

        {!loader ? (
          <CapacitationsList listado={listCapac} />
        ) : (
          <LoaderItemSwitchDark />
        )}
      </ScrollView>
    </Layout>
  );
};

export default Capacitations;
