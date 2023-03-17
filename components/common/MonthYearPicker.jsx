import React from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  colors,
  getFontStyles,
  validDates,
  widthPercentageToPx,
} from "../../utils";

import GLButton from "../../components/common/buttons/GLButton";

const MonthYearPicker = ({
  setVisible,
  handleChangeMonth,
  changeYear,
  selectedMonthYear,
  visible,
}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <View style={styles.monthPicker}>
          <Text style={styles.placeholder}>Mes</Text>
          <ScrollView horizontal contentContainerStyle={styles.dayOptions}>
            {validDates().validMonths.map((e, idx) => (
              <Pressable key={idx} onPress={() => handleChangeMonth(idx)}>
                <View
                  style={styles.dayElement(selectedMonthYear.month === idx)}
                >
                  <Text style={styles.dayNumber}>{e}</Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
          <Text style={styles.placeholder}>Año</Text>
          <ScrollView horizontal contentContainerStyle={styles.dayOptions}>
            {validDates().validYears.map((e, idx) => (
              <Pressable key={idx} onPress={() => changeYear(e)}>
                <View style={styles.dayElement(selectedMonthYear.year === e)}>
                  <Text style={styles.dayNumber}>{e}</Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>

          <GLButton
            type="default"
            placeholder={"Continuar"}
            width={widthPercentageToPx(70)}
            onPressAction={() => setVisible(false)}
          ></GLButton>
        </View>
      </View>
    </Modal>
  );
};

export default MonthYearPicker;

const styles = StyleSheet.create({
  monthPicker: {
    width: widthPercentageToPx(80),
    height: 280,
    borderRadius: 17,
    padding: 20,
    backgroundColor: colors.white,
    elevation: 5,
  },
  placeholder: {
    ...getFontStyles(15, 0.5, 0.9),
    color: colors.black,
    fontFamily: "Poppins-Bold",
  },
  dayOptions: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    height: 32,
    marginVertical: 10,
  },
  dayElement: (isSelected) => ({
    width: 70,
    height: 30,
    borderRadius: 8,
    borderWidth: isSelected ? 2 : 0,
    borderColor: isSelected ? colors.green : colors.white,
    backgroundColor: colors.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  dayNumber: {
    fontFamily: "Volks-Bold",
    ...getFontStyles(16, 0.5, 0.9),
  },
});
