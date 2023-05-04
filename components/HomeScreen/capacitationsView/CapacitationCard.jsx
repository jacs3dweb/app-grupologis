import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../../utils";
import { View } from "react-native";
import CardElement from "../newsView/components/CardElement";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const CapacitationsCard = (props) => {
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.topContent}>
        <CardElement head={"Doc."} content={props.Documento} />
        <CardElement head={"Fecha"} content={props.Fecha} />
        <CardElement head={"Estado"} content={props.Estado} />
        <Pressable onPress={() => setModal(!modal)}>
          <View style={styles.actionButton("ghost")}>
            <AntDesign name="eye" size={18} color={colors.darkGray} />
          </View>
        </Pressable>
      </View>

      {/* modal  */}
    </View>
  );
};

export default CapacitationsCard;

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
