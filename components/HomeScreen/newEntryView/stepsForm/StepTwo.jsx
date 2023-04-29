import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Toast from "react-native-toast-message";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";
import FormCountry from "./formSteps/FormCountry";
import { colors, widthPercentageToPx } from "../../../../utils";
import GLButton from "../../../common/buttons/GLButton";
import SpecialCalendar from "../../../common/form/SpecialCalendar";
import FormStepTwo from "./formSteps/FormStepTwo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getSer } from "../../../../utils/axiosInstance";
import { Ionicons } from "@expo/vector-icons";

const StepTwo = ({ formData, onComplete, completed }) => {
  const [laborOrden, setLaborOrden] = useState("");
  const [listCont, setListCont] = useState([]);
  const [listConvenio, setConvenio] = useState([]);
  const [dateIng, setDateIng] = useState("");
  const [dateEgr, setDateEgr] = useState("");
  const [isDay31, setIsDay31] = useState(false);
  const [infoForm, setInfoForm] = useState({});
  const toggleSwitchDay = () => setIsDay31((previousState) => !previousState);

  useEffect(() => {
    if (completed) {
      console.log("listConvenio useEffect", listConvenio);
      const getServiciosSel = async () => {
        console.log("buscar servicios ");
        let infoLog = await AsyncStorage.getItem("logged");
        infoLog = JSON.parse(infoLog);
        const empSel = infoLog.empSel.toUpperCase();
        const codEmp = infoLog.codEmp;

        const pathReg = `GetTiposContrato.php?empresa=${empSel}`;
        const pathOrd = `GetDatosOrdenIngreso.php?cod_cli=${codEmp}&empresa=${empSel}`;
        console.log("pathReg", pathReg);
        console.log("pathOrd", pathOrd);
        const respReg = await getSer(pathReg);
        console.log("respReg", respReg);
        if (respReg == "limitExe") {
          console.log("limitExe");
        } else {
          const respOrd = await getSer(pathOrd);
          console.log("respOrd", respOrd);
          if (respOrd == "limitExe") {
            console.log("limitExe");
          } else {
            respReg.status
              ? setListCont(respReg.data.tipcontratos)
              : console.log("error al traer tipos contrato");

            respOrd.status
              ? setConvenio(respOrd.data.convenios)
              : console.log("error al traer orden ingreso");
          }
        }
      };
      getServiciosSel();
    }
  }, [completed]);

  const setSeleccForm = (selec) => {
    console.log("selecciones formulario step 2", selec);
    setInfoForm(selec);
  };

  const showToast = (smg, type) => {
    Toast.show({
      type: type, //"success", error
      text1: smg,
      position: "bottom",
      visibilityTime: 2000,
    });
  };

  const handlePress = () => {
    console.log("retornar informacion");
    console.log("laborOrden", laborOrden);
    console.log("dateIng", dateIng);
    console.log("dateEgr", dateEgr);
    console.log("infoForm", infoForm);
    const { year, month, day } = dateIng;
    let fechaIng = new Date(parseInt(year), parseInt(month - 1), parseInt(day));
    console.log("dateIng.date", fechaIng.getTime());
    let hoy = new Date();
    const tresDiasMs = 3 * 24 * 60 * 60 * 1000; // milisegundos en 3 días
    const nuevaFechaMs = hoy.getTime() + tresDiasMs;

    const { cargo, contrato, convenio, jornada, trabajador, jornadaPer } =
      infoForm;
    if (
      !laborOrden ||
      !dateIng ||
      !dateEgr ||
      nuevaFechaMs > fechaIng.getTime() ||
      contrato.label == "Tipo de contrato" ||
      cargo.label == "Cargo" ||
      convenio.label == "Convenio" ||
      jornada.label == "Tipo de jornada" ||
      trabajador.label == "Tipo de trabajador"
    ) {
      showToast("Por favor, rellene todos los campos", "error");
      console.log("Por favor, rellene todos los campos", "error");
    } else if (
      jornada.label == "Jonada incompleta (Especificar la jornada)" &&
      jornadaPer.label == ""
    ) {
      showToast("Por favor, rellene todos los campos", "error");
      console.log("Por favor, rellene todos los campos", "error");
    } else {
      console.log("enviar todo");
      onComplete({
        stepTwoData: {
          select: infoForm,
          laborOrden: laborOrden,
          pago31: isDay31,
          fecIngreso: dateIng.date,
          fecEgreso: dateEgr.date,
        },
      });
    }
  };

  return (
    <View>
      {/* <SpecialCalendar
        placeholder={"Fecha de Ingreso"}
        value={new Date()}
        dayAdd={3}
        onChange={(e) => setDateIng(e)}
      />
      <SpecialCalendar
        placeholder={"Fecha de Egreso"}
        value={new Date()}
        onChange={(e) => setDateEgr(e)}
      /> */}

      <FormStepTwo
        lisCont={listCont}
        listConv={listConvenio}
        onSelectionChange={setSeleccForm}
      />

      <TextInput
        placeholder="Labor / Orden"
        onChangeText={setLaborOrden}
        style={styles.input}
        placeholderTextColor={colors.placeholderColor}
        value={laborOrden}
      />
      <Text>Pago dia 31</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isDay31 ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitchDay}
        value={isDay31}
      />
      <GLButton
        onPressAction={handlePress}
        type="default"
        placeholder={"Siguiente"}
        width={widthPercentageToPx(70)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F3F3FF",
    width: "100%",
  },
  select: {
    backgroundColor: colors.mainBackgroundColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  input: {
    backgroundColor: colors.mainBackgroundColor,
    height: 50,
    paddingLeft: 20,
    marginBottom: 10,
    borderRadius: 10,
    width: "100%",
    fontFamily: "Volks-Serial-Medium",
    fontSize: 16,
    fontWeight: "normal",
  },
});

export default StepTwo;
