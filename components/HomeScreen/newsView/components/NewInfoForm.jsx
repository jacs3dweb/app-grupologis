import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import newsContext from "../../../../context/news/newsContext";
import FormStep from "../../../common/FormStep";
import { colors, getFontStyles } from "../../../../utils";
import SpecialCalendar from "../../../common/SpecialCalendar";

const NewInfoForm = ({ confirmInformation }) => {
  const { newForm } = useContext(newsContext);
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.firstTitle}>Nuevo /</Text>
        <Text style={styles.secondTitle}>{newForm.type?.title}</Text>
      </View>
      <FormStep
        number={1}
        description="Ingrese fecha de inicio y fin del permiso"
      />
      <View style={{ paddingHorizontal: 10 }}>
        <SpecialCalendar
          placeholder={"Fecha inicio"}
          value={new Date()}
          onChange={() => console.log("a")}
        />
        <SpecialCalendar
          placeholder={"Fecha fin"}
          value={new Date()}
          onChange={() => console.log("a")}
        />
      </View>
      <FormStep number={2} description="Seleccione el tipo de permiso" />
    </View>
  );
};

export default NewInfoForm;

const styles = StyleSheet.create({
  titleContainer: {
    paddingBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
