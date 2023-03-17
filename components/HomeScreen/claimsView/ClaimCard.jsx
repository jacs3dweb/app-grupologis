import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../../../utils";
import StatusLine from "../../common/StatusLine";
import CardElement from "../newsView/components/CardElement";

const ClaimCard = (props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.topContent}>
        <CardElement head={"RAD."} content={props.radicado} />
        <CardElement head={"Fecha"} content={props.fecha} />
        <Pressable
          onPress={() => {
            console.log(`Visualizar: ${props.radicado}`);
          }}
        >
          <View style={styles.actionButton("ghost")}>
            <AntDesign name="eye" size={18} color={colors.darkGray} />
          </View>
        </Pressable>
      </View>
      <StatusLine status={props.estado} />
    </View>
  );
};
export default ClaimCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 17,
    marginBottom: 12,
    padding: 15,
  },
  topContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
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
