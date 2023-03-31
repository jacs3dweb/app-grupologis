import { Entypo, Feather } from "@expo/vector-icons";
import moment from "moment";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  validDates,
  validCountry,
  widthPercentageToPx,
} from "../../../../../utils";
import GLButton from "../../../../../components/common/buttons/GLButton";
import LocationPicker from "../../../../../components/common/form/LocationPicker";

const FormCountry = ({ closeModal, onConfirm }) => {
  const now = moment();
  const [period, setPeriod] = useState({
    start: now.startOf("M"),
    end: now.startOf("M").add(1, "M"),
  });
  const [values, setValues] = useState({
    month: now.get("M"),
    year: now.get("year"),
  });
  const [showYearSelector, setShowYearSelector] = useState(false);
  const [showMonthSelector, setShowMonthSelector] = useState(false);
  const [hasChangedMonth, setHasChangedMonth] = useState(false);
  const [hasChangedYear, setHasChangedYear] = useState(false);

  const handleChangeMonth = (e) => {
    setPeriod({
      start: period.start.set("M", e),
      end: period.end.set("M", e),
    });

    setValues({
      ...values,
      month: e,
    });

    setHasChangedMonth(true);
  };
  const changeYear = (e) => {
    setPeriod({
      start: period.start.set("y", e),
      end: period.end.set("y", e),
    });

    setValues({
      ...values,
      year: e,
    });

    setHasChangedYear(true);
  };
  return (
    <View>
      <Pressable
        style={{ width: "100%" }}
        onPress={() => setShowYearSelector(true)}
      >
        <View style={styles.selectorOption}>
          <Text style={styles.selectorText}>
            {hasChangedYear ? values.year : "Departamento"}
          </Text>
          <Entypo name="chevron-down" size={20} color={colors.boldGray} />
        </View>
      </Pressable>

      <LocationPicker
        showCountry={true}
        changeYear={changeYear}
        setVisible={setShowYearSelector}
        visible={showYearSelector}
        selectedMonthYear={values}
      />

      <Pressable
        style={{ width: "100%" }}
        onPress={() => setShowMonthSelector(true)}
      >
        <View style={styles.selectorOption}>
          <Text style={styles.selectorText}>
            {hasChangedMonth
              ? validDates().validMonths[period.start.get("M")]
              : "Ciudad o municipio"}
          </Text>
          <Entypo name="chevron-down" size={20} color={colors.boldGray} />
        </View>
      </Pressable>

      <LocationPicker
        showCity={true}
        handleChangeMonth={handleChangeMonth}
        setVisible={setShowMonthSelector}
        visible={showMonthSelector}
        selectedMonthYear={values}
      />
    </View>
  );
};

export default FormCountry;

const styles = StyleSheet.create({
  modalContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  selectorOption: {
    height: 50,
    borderRadius: 8,
    backgroundColor: colors.mainBackgroundColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  selectorText: {
    fontFamily: "Volks-Bold",
    color: colors.boldGray,
    ...getFontStyles(16, 0.8, 0.9),
  },
});
