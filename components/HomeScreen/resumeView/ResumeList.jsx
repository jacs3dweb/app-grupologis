import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import resumeContext from "../../../context/resume/resumeContext";
import { colors, getFontStyles, widthPercentageToPx } from "../../../utils";

import ResumeCard from "./ResumeCard";

const ResumeList = () => {
  const { resumeList } = useContext(resumeContext);

  return (
    <View style={styles.newsListContainer}>
      <View>
        {resumeList.map((n4, index4) => (
          <ResumeCard key={index4} {...n4} />
        ))}
      </View>
    </View>
  );
};

export default ResumeList;

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
