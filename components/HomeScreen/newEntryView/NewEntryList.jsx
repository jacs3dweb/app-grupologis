import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import newEntryContext from "../../../context/newentry/newEntryContext";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../utils";

import NewEntryCard from "./NewEntryCard";

const NewEntryList = () => {
  const { newEntryList } = useContext(newEntryContext);

  return (
    <View style={styles.newsListContainer}>
      <View>
        {newEntryList.map((n4, index4) => (
          <NewEntryCard key={index4} {...n4} />
        ))}
      </View>
    </View>
  );
};

export default NewEntryList;

const styles = StyleSheet.create({
  newsListContainer: {
    width: widthPercentageToPx(90),
    height: "100%",
    marginTop: heightPercentageToPx(1),
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
