import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

import moment from "moment";
import { ScrollView } from "react-native";
import { colors, getFontStyles } from "../../../utils";

import MonthYearPicker from "./MonthYearPicker";

let getDaysArray = function (year, month, day) {
  console.log("getDaysArray", year, month);
  let monthIndex = month - 1;
  let names = ["Dom", "Lun", "Mar", "Mier", "Jue", "Vie", "Sab"];
  const newDay = typeof day == "string" ? 1 : day;
  let date = new Date(year, monthIndex, newDay);
  let result = [];
  while (date.getMonth() == monthIndex) {
    result.push({
      day: date.getDate().toString().padStart(2, "0"),
      isSelectable: ![0, 6].includes(date.getDay()),
      weekdayName: names[date.getDay()],
    });
    date.setDate(date.getDate() + 1);
  }
  return result;
};

const SpecialCalendar = ({ placeholder, onChange, value, dia = "" }) => {
  const [selectedDate, setSelectedDate] = useState(moment(value));
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonthYear, setSelectedMonthYear] = useState({
    month: selectedDate.get("M"),
    year: value.getFullYear(),
  });
  const [dayOptions, setDayOptions] = useState([]);
  const fechaAc = new Date();

  useEffect(() => {
    const result = getDaysArray(value.getFullYear(), value.getMonth() + 1, dia);
    console.log("resltado", result);
    setDayOptions(result);
  }, []);

  const handleChangeMonth = (e) => {
    console.log("cambio mes", e);
    if (typeof dia != "string") {
      const fechaActual = new Date();
      console.log(
        fechaActual.getFullYear(),
        selectedMonthYear.year,
        fechaActual.getMonth(),
        e
      );
      if (
        fechaActual.getFullYear() == selectedMonthYear.year &&
        fechaActual.getMonth() == e
      ) {
        console.log("la fecha es igual a la de hoy");
        setSelectedMonthYear({
          ...selectedMonthYear,
          month: e,
        });
        setSelectedDate(selectedDate.set("M", e));
        const result = getDaysArray(selectedMonthYear.year, e, dia);
        console.log("resultado sss", result);
        setDayOptions(result);
      } else if (
        fechaActual.getFullYear() >= selectedMonthYear.year &&
        fechaActual.getMonth() < e
      ) {
        console.log("la fecha es mayor");
        setSelectedMonthYear({
          ...selectedMonthYear,
          month: e,
        });
        setSelectedDate(selectedDate.set("M", e));
        const result = getDaysArray(selectedMonthYear.year, e, "");
        console.log("resultado sss3", result);
        setDayOptions(result);
      } else {
        console.log("la fecha es menor");
        const monthAct = fechaActual.getMonth();
        console.log("mes actual", monthAct);
        setSelectedMonthYear({
          ...selectedMonthYear,
          month: monthAct,
        });

        setSelectedDate(selectedDate.set("M", monthAct));
        const result = getDaysArray(selectedMonthYear.year, monthAct, dia);
        console.log("resultado es menor", result);
        setDayOptions(result);
      }
    } else {
      setSelectedMonthYear({
        ...selectedMonthYear,
        month: e,
      });

      setSelectedDate(selectedDate.set("M", e));

      // actualizamos lo dias
      const result = getDaysArray(selectedMonthYear.year, e, "");
      console.log("resultado", result);
      setDayOptions(result);
    }
  };

  const changeYear = (e) => {
    console.log("changeYear", e);
    if (typeof dia != "string") {
      const fechaActual = new Date();
      console.log(
        fechaActual.getFullYear(),
        e,
        fechaActual.getMonth(),
        selectedMonthYear.month
      );
      if (
        fechaActual.getFullYear() == e &&
        fechaActual.getMonth() == selectedMonthYear.month
      ) {
        console.log("la fecha es igual a la de hoy");
        setSelectedMonthYear({
          ...selectedMonthYear,
          year: e,
        });
        setSelectedDate(selectedDate.set("y", e));
        const result = getDaysArray(e, selectedMonthYear.month, dia);
        console.log("resultado sss", result);
        setDayOptions(result);
      } else if (
        fechaActual.getFullYear() <= e &&
        fechaActual.getMonth() < selectedMonthYear.month
      ) {
        console.log("la fecha es mayor");
        setSelectedMonthYear({
          ...selectedMonthYear,
          year: e,
        });
        setSelectedDate(selectedDate.set("y", e));
        const result = getDaysArray(e, selectedMonthYear.month, "");
        console.log("resultado sss", result);
        setDayOptions(result);
      } else {
        console.log("la fecha es menor");
        const monthAct = fechaActual.getMonth();
        console.log("mesActual", monthAct);
        console.log("mesActual2", selectedMonthYear.month);
        const yearAct = fechaActual.getFullYear();
        console.log("año actual", yearAct);
        setSelectedMonthYear({
          ...selectedMonthYear,
          year: yearAct,
        });
        setSelectedDate(selectedDate.set("y", yearAct));
        const addDay = monthAct == selectedMonthYear.month ? dia : "";
        const result = getDaysArray(yearAct, selectedMonthYear.month, addDay);
        console.log("resultado", result);
        setDayOptions(result);
      }
    } else {
      // actualizamos los dias
      setSelectedMonthYear({
        ...selectedMonthYear,
        year: e,
      });

      console.log(selectedMonthYear);
      setSelectedDate(selectedDate.set("y", e));
      // actualizamos lo dias
      const result = getDaysArray(e, selectedMonthYear.month, "");
      console.log("resultado", result);
      setDayOptions(result);
    }
  };
  const handleChangeDay = (day) => {
    if (!day.isSelectable) return;
    const dayNumber = day.day;
    const selectedDateCopy = selectedDate.clone();
    selectedDateCopy.set("D", dayNumber);
    let month = (selectedMonthYear.month += 1);
    month = month.toString().padStart(2, "0");
    const selectedDay = {
      date: `${selectedMonthYear.year}/${month}/${dayNumber}`,
      day: dayNumber,
      month: month,
      year: selectedMonthYear.year,
    };
    console.log("selectedDay", selectedDay);
    // setSelectedDate(selectedDate.set("D", dayNumber));
    setSelectedDay(day.day);
    onChange(selectedDay);
  };
  return (
    <SafeAreaView style={styles.specialCalendarContainer}>
      <View style={styles.headerData}>
        <Text style={styles.placeholder}>{placeholder}</Text>
        <Pressable onPress={() => setShowMonthPicker(true)}>
          <View style={styles.monthSelector}>
            <Text style={styles.monthText}>{selectedDate.format("MMMM")}</Text>
          </View>
        </Pressable>
        <MonthYearPicker
          visible={showMonthPicker}
          changeYear={changeYear}
          handleChangeMonth={handleChangeMonth}
          setVisible={setShowMonthPicker}
          selectedMonthYear={selectedMonthYear}
        />
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.dayOptions}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {dayOptions.map((day) => (
          <Pressable key={day.day} onPress={() => handleChangeDay(day)}>
            <View
              style={styles.dayElement(
                selectedDay === day.day,
                day.isSelectable
              )}
            >
              <Text style={styles.weekdayName}>{day.weekdayName}</Text>
              <Text style={styles.dayNumber}>{day.day}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpecialCalendar;

const styles = StyleSheet.create({
  specialCalendarContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginBottom: 5,
  },
  headerData: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  placeholder: {
    ...getFontStyles(15, 0.5, 0.9),
    color: colors.black,
    fontFamily: "Poppins-Bold",
  },
  monthSelector: {
    width: 70,
    height: 20,
    backgroundColor: "transparent",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.mainBlue,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  monthText: {
    fontFamily: "Poppins-Light",
    color: colors.mainBlue,
    ...getFontStyles(10, 0.5, 0.9),
  },
  dayOptions: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    height: 75,
    marginVertical: 10,
    marginLeft: 5,
  },
  dayElement: (isSelected, isSelectable) => ({
    width: 70,
    height: 73,
    borderRadius: 8,
    borderWidth: isSelected ? 2 : 0,
    borderColor: isSelected ? colors.green : colors.white,
    backgroundColor: isSelectable ? colors.white : colors.gray,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.0,

    elevation: 5,
  }),
  dayNumber: {
    fontFamily: "Volks-Bold",
    ...getFontStyles(16, 0.5, 0.9),
  },
  weekdayName: {
    fontFamily: "Volks-Serial-Light",
    color: colors.descriptionColors,
    ...getFontStyles(11, 0.5, 0.9),
  },
});
