import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../utils";

const getTextByStatus = (status) => {
  switch (status) {
    case 1:
      return "Enviado";
    case 2:
      return "Aprobado";
    case 3:
      return "Nómina";
    case 4:
      return "Completado";
    default:
      return "Sin Estado";
  }
};

const LineElement = ({ completed }) => {
  return (
    <View style={styles.lineElement}>
      <View style={styles.line(completed)}></View>
      <FontAwesome
        name="circle"
        size={18}
        color={completed ? colors.gray : colors.green}
      />
    </View>
  );
};

const StatusLine = ({ status }) => {
  return (
    <View style={styles.statusContainer}>
      <Text style={styles.textStyle}>{getTextByStatus(status)}</Text>

      <View style={styles.statusLine}>
        <LineElement completed={status <= 0} />
        <LineElement completed={status <= 1} />
        <LineElement completed={status <= 2} />
        <LineElement completed={status <= 3} />
      </View>
    </View>
  );
};

export default StatusLine;

const styles = StyleSheet.create({
  statusContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  statusLine: {
    display: "flex",
    flexDirection: "row",
    gap: 27,
  },
  line: (isOn) => ({
    width: 43,
    height: 2,
    backgroundColor: isOn ? colors.gray : colors.green,
    position: "absolute",
    top: 8,
    left: -13,
    zIndex: -1000,
  }),
  textStyle: {
    color: colors.boldGray,
    fontFamily: "Poppins-Bold",
  },
});
