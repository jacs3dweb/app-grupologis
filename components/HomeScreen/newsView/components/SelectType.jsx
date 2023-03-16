import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import {
  colors,
  getFontStyles,
  newsInfo,
  widthPercentageToPx,
} from "../../../../utils";
import OptionNews from "./OptionNews";
import newsContext from "../../../../context/news/newsContext";
import { ScrollView } from "react-native";

import GLButton from "../../../common/buttons/GLButton";

const SelectType = ({ continueWithForm }) => {
  const { changeFormField, newForm } = useContext(newsContext);
  const handleChangeType = (element) => {
    changeFormField({
      field: "type",
      value: element,
    });
  };

  return (
    <View>
      <View style={styles.titlesContainer}>
        <Text style={styles.welcomeText}>Seleccione</Text>
        <Text style={styles.subtitle}>tipo de novedad</Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        {newsInfo.map((e) => (
          <Pressable key={e.id} onPress={() => handleChangeType(e)}>
            <OptionNews
              descNews={e.description}
              titleNews={e.title}
              image={e.image}
              id={e.id}
            />
          </Pressable>
        ))}
        <GLButton
          placeholder={"Siguiente"}
          type="default"
          width={widthPercentageToPx(75)}
          onPressAction={() => continueWithForm(2)}
        />
      </ScrollView>
    </View>
  );
};

export default SelectType;

const styles = StyleSheet.create({
  titlesContainer: {
    paddingHorizontal: 30,
  },
  welcomeText: {
    fontFamily: "Poppins-Bold",
    marginBottom: 2,
    marginTop: 2,
    color: colors.mainBlue,
    ...getFontStyles(30),
  },
  subtitle: {
    ...getFontStyles(17),
    marginBottom: 2,
    marginTop: 0,
    fontFamily: "Poppins-Bold",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
