import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../../../utils";
import CardElement from "../newsView/components/CardElement";
import Toast from "react-native-toast-message";

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
      <View style={styles.topContent}>
        <CardElement head={"Año"} content={props.año} />
        <CardElement head={"Mes"} content={props.mes} />
        <CardElement head={"No.Factura"} content={props.noFactura}/>
        <Pressable
          onPress={showToast}
        >
          <View style={styles.actionButton("ghost")}>
            <AntDesign name="download" size={18} color={colors.darkGray} />
          </View>
        </Pressable>
      </View>
      <View style={styles.topContent}>
        <CardElement head={"Subtipo"} content={props.subtipo} />
        <CardElement head={"Fecha"} content={props.fecha} />
        <CardElement head={"Descripcion"} content={props.descripcion} />
        <Pressable
          onPress={() => {
            console.log(`Visualizar: ${props.subtipo}`);
          }}
        >
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

  },
  topContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
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