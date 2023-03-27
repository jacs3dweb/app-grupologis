import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import billsContext from "../../../context/bills/billsContext";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../utils";

import { FontAwesome5 } from "@expo/vector-icons";
import BillsCard from "./BillsCard";

const BillsList = () => {
  const { billsList } = useContext(billsContext);

  return (
    <View style={styles.newsListContainer}>
      <View>
        {billsList.map((n3, index3) => (
          <BillsCard key={index3} {...n3} />
        ))}
      </View>
    </View>
  );
};

export default BillsList;

const styles = StyleSheet.create({
  newsListContainer: {
    width: widthPercentageToPx(90),
    height: "100%",
    marginTop: heightPercentageToPx(2),
  },
  titleContainer: {
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
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
