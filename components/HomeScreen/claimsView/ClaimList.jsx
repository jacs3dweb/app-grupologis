import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import claimsContext from "../../../context/claims/claimsContext";
import { colors, getFontStyles, widthPercentageToPx } from "../../../utils";
import { fetchPost } from "../../../utils/functions";

import { FontAwesome5 } from "@expo/vector-icons";
import ClaimCard from "./ClaimCard";

const ClaimList = () => {
  const [claimsList, setClaimsList] = useState([]);

  useEffect(() => {
    const getQuejas = async () => {
      let infoLog = await AsyncStorage.getItem("logged");
      infoLog = JSON.parse(infoLog);
      const empSel = infoLog.empSel;
      const codEmp = infoLog.codEmp;

      const info = `Empresa=${empSel}&CodEmpleado=${codEmp}`;
      const path = "usuario/getListadoQuejas.php";
      const respApi = await fetchPost(path, info);
      if (respApi.status) {
        const data = respApi.data;
        if (data.Correcto === 1) {
          // data tiene la informacion de la api
          // console.log(data.Programa);
          setClaimsList(data.Programa);
        } else {
          console.log("error en el servidor");
        }
      } else {
        console.log("error en el servidor");
      }
    };
    getQuejas();
  }, []);

  return (
    <View style={styles.newsListContainer}>
      <View style={styles.titleContainer}>
        <FontAwesome5 name="calendar-alt" size={24} color={colors.mainBlue} />
        <Text style={styles.firstTitle}>Quejas /</Text>
        <Text style={styles.secondTitle}>Enviadas</Text>
      </View>
      <View>
        {claimsList.length > 0 &&
          claimsList.map((n2, index2) => (
            // <Text>{JSON.stringify(n2)}</Text>
            <ClaimCard key={index2} {...n2} />
          ))}
      </View>
    </View>
  );
};

export default ClaimList;

const styles = StyleSheet.create({
  newsListContainer: {
    width: widthPercentageToPx(90),
    height: "100%",
  },
  titleContainer: {
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  firstTitle: {
    fontFamily: "Poppins-Regular",
    ...getFontStyles(18, 0.5, 0.9),
  },
  secondTitle: {
    fontFamily: "Poppins-Bold",
    color: colors.mainBlue,
    ...getFontStyles(18, 0.5, 0.9),
  },
});
