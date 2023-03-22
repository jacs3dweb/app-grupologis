import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Toast from "react-native-toast-message";
import { colors } from "../../../utils";
import CardElement from "../newsView/components/CardElement";

const BillsCard = (props) => {
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Descarga Completada",

      position: "bottom",
      visibilityTime: 2000,
    });
  };
  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftContent}>
        <View style={styles.cardColumn}>
          <CardElement head={"Año"} content={props.año} />
          <CardElement head={"Subtipo"} content={props.subtipo} />
        </View>
        <View style={styles.cardColumn}>
          <CardElement head={"Mes"} content={props.mes} />
          <CardElement head={"Fecha"} content={props.fecha} />
        </View>
        <View style={styles.cardColumn}>
          <CardElement head={"No.Factura"} content={props.noFactura} />
          <CardElement
            head={"Descripcion"}
            content={props.descripcion?.slice(0, 10) + "..."}
          />
        </View>
      </View>

      <View style={styles.rightContent}>
        <Pressable onPress={showToast}>
          <View style={styles.actionButton("ghost")}>
            <AntDesign name="download" size={18} color={colors.darkGray} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};
export default BillsCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 17,
    marginBottom: 20,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
  },
  cardColumn: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  actionButton: (type) => ({
    width: 36,
    height: 36,
    borderColor: type === "ghost" ? "#DBDBDB" : null,
    borderWidth: type === "ghost" ? 2 : 0,
    backgroundColor:
      type === "ghost" ? colors.white : colors.mainBackgroundColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  }),
});
