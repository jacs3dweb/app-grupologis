import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, getFontStyles, heightPercentageToPx } from "../../../utils";
import Toast from "react-native-toast-message";
import {
  downloadArchivoAndroid,
  downloadArchivoIOS,
  fetchPost,
} from "../../../utils/functions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const DownloadableCard = ({ title, desc, image, id }) => {
  const [modal, setModal] = useState(false);
  const [showForm, setShowForm] = useState(null);

  const getCerLaboral = async () => {
    // descargar certificado laboral
    let infoLog = await AsyncStorage.getItem("logged");
    infoLog = JSON.parse(infoLog);
    const empSel = infoLog.empSel;
    const codEmp = infoLog.codEmp;

    const info = `Empresa=${empSel}&Cedula=${codEmp}`;
    const path = "usuario/getCertificadoLaboral.php";
    const respApi = await fetchPost(path, info);
    console.log(respApi);
    if (respApi.status) {
      const data = respApi.data;
      if (data.Correcto === 1) {
        dowArchivo(data);
      } else {
        Toast.show({
          type: "error",
          text1: "Error en el servidor",
          position: "bottom",
          visibilityTime: 2000,
        });
      }
    } else {
      Toast.show({
        type: "error",
        text1: "Error en el servidor",
        position: "bottom",
        visibilityTime: 2000,
      });
    }
  };

  const getIngresoRete = async () => {
    // descargar ingreso y retencion
    let infoLog = await AsyncStorage.getItem("logged");
    infoLog = JSON.parse(infoLog);
    const empSel = infoLog.empSel;
    const codEmp = infoLog.codEmp;
    const date = new Date().getFullYear() - 1;

    const info = `Empresa=${empSel}&Cedula=${codEmp}&Anho=${date}`;
    const path = "usuario/getCertificadoRetencion.php";

    const respApi = await fetchPost(path, info);
    console.log(respApi);
    if (respApi.status) {
      const data = respApi.data;
      if (data.Correcto === 1) {
        dowArchivo(data);
      } else {
        Toast.show({
          type: "error",
          text1: "Error en el servidor",
          position: "bottom",
          visibilityTime: 2000,
        });
      }
    } else {
      Toast.show({
        type: "error",
        text1: "Error en el servidor",
        position: "bottom",
        visibilityTime: 2000,
      });
    }
  };

  const getHojaVidaLab = async () => {
    // descargar hoja de vida laboral
    let infoLog = await AsyncStorage.getItem("logged");
    infoLog = JSON.parse(infoLog);
    const empSel = infoLog.empSel;
    const codEmp = infoLog.codEmp;
    const nit = 0;

    const info = `Empresa=${empSel}&CodEmpleado=${codEmp}&NitCliente=${nit}`;
    const path = "usuario/getHojaDeVidaEmp.php";

    const respApi = await fetchPost(path, info);
    console.log(respApi);
    if (respApi.status) {
      const data = respApi.data;
      if (data.Correcto === 1) {
        dowArchivo(data);
      } else if (data.trim() == "VACIO") {
        Toast.show({
          type: "error",
          text1: "El documento no existe",
          position: "bottom",
          visibilityTime: 2000,
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Error en el servidor",
          position: "bottom",
          visibilityTime: 2000,
        });
      }
    } else {
      Toast.show({
        type: "error",
        text1: "Error en el servidor",
        position: "bottom",
        visibilityTime: 2000,
      });
    }
  };

  const getCapacitations = async () => {
    // descargar capacitaciones
    let infoLog = await AsyncStorage.getItem("logged");
    infoLog = JSON.parse(infoLog);
    const codEmp = infoLog.codEmp;

    const info = `NitCliente=${codEmp}`;
    const path = "usuario/getCapacitacion.php";

    const respApi = await fetchPost(path, info);
    console.log(respApi);
    if (respApi.status) {
      const data = respApi.data;
      if (data.Correcto === 1) {
        dowArchivo(data);
      } else if (data.trim() == "VACIO") {
        Toast.show({
          type: "error",
          text1: "El documento no existe",
          position: "bottom",
          visibilityTime: 2000,
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Error en el sistema",
          position: "bottom",
          visibilityTime: 2000,
        });
      }
    } else {
      Toast.show({
        type: "error",
        text1: "Error en el sistema",
        position: "bottom",
        visibilityTime: 2000,
      });
    }
  };
  useEffect(() => {}, [modal]);
  const getPayrollFlyer = async () => {};

  const dowArchivo = async (data) => {
    let archDes;
    if (Platform.OS === "android") {
      archDes = await downloadArchivoAndroid(
        data.file,
        data.mimetype,
        data.name
      );
    } else {
      archDes = await downloadArchivoIOS(data.file, data.mimetype, data.name);
    }
    console.log("archDes", archDes);
    if (archDes) {
      Toast.show({
        type: "success",
        text1: "Descarga Completada",
        position: "bottom",
        visibilityTime: 2000,
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Error al generar el archivo",
        position: "bottom",
        visibilityTime: 2000,
      });
    }
  };

  const showToast = (idSel) => {
    console.log("id", idSel);
    switch (idSel) {
      case "laboralCertificate":
        getCerLaboral();
        break;
      case "laboralCertificate2":
        getIngresoRete();
        break;
      case "laboralCertificate3":
        getHojaVidaLab();
        break;
      case "capacitations":
        getCapacitations();
        break;
      // modales
      case "payrollFlyer":
        getPayrollFlyer();
        break;

      default:
        break;
    }
  };

  return (
    <View style={styles.scrollStyle}>
      <View>
        <View style={styles.imageSvg}>{image}</View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{desc}</Text>
        <Pressable onPress={() => showToast(id)}>
          <View style={styles.downloadButton}>
            <Text style={{ color: colors.light, fontFamily: "Volks-Bold" }}>
              Descargar
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default DownloadableCard;

const styles = StyleSheet.create({
  scrollStyle: {
    width: 180,
    backgroundColor: colors.white,
    borderRadius: 17,
    paddingHorizontal: 25,
    paddingVertical: 25,
    alignItems: "flex-start",
    flexDirection: "column",
  },
  certificadoImage: {
    marginBottom: 10,
    height: 80,
    width: 80,
  },
  imageSvg: {
    marginBottom: 15,
  },
  title: {
    ...getFontStyles(15, 0.9, 1.1),
    fontFamily: "Poppins-Bold",
    marginBottom: 5,
  },
  description: {
    fontFamily: "Volks-Serial-Light",
    color: colors.descriptionColors,
    ...getFontStyles(12, 0.9, 1.2),
    flex: 1,
  },
  downloadButton: {
    backgroundColor: colors.buttonsColor,
    fontFamily: "Volks-Bold",
    height: 41,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginTop: 0,
    padding: 0,
    flex: 0,
  },
});
