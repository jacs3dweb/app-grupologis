import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, getFontStyles, heightPercentageToPx } from "../../../utils";

const SelectableNew = ({ titleNews, descNews }) => {
  return (
    <View style={styles.scrollStyle}>
      <View>
        {/* <SvgUri
            style={styles.certificadoImage}
            width={70}
            height={70}
            source={image}
          ></SvgUri> */}
        <Text style={styles.title}>{titleNews}</Text>
        <Text style={styles.description}>{descNews}</Text>
      </View>
    </View>
  );
};

export default SelectableNew;

const styles = StyleSheet.create({
  scrollStyle: {
    width: "90%",
    backgroundColor: colors.white,
    borderRadius: 17,
    paddingHorizontal: 25,
    paddingVertical: 20,
    alignItems: "flex-start",
    flexDirection: "column",
  },

  title: {
    ...getFontStyles(15, 0.9, 1.1),
    fontFamily: "Poppins-Bold",
    marginBottom: 5,
    color: colors.darkGray,
  },
  description: {
    fontFamily: "Volks-Serial-Light",
    color: colors.darkGray,
    ...getFontStyles(12, 0.9, 1.2),
  },
});
