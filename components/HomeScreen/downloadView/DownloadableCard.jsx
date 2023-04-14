import React, { useEffect, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../utils";
import Toast from "react-native-toast-message";
import {
  downloadArchivoAndroid,
  downloadArchivoIOS,
  fetchPost,
} from "../../../utils/functions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import FormBillsModal from "../billView/FormBillsModal";
import FormInicFin from "../newsView/components/FormInicFin";

const DownloadableCard = ({ title, desc, image, id }) => {
  const [modal, setModal] = useState(false);
  const [showForm, setShowForm] = useState("");

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
    console.log(info, path);
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

  const getPayrollFlyer = async (val) => {
    // descargar volante nomina
    setModal(false);
    const path =
      showForm === "generalPayroll"
        ? "usuario/getVolanteNominaGeneral.php"
        : "usuario/getVolanteNomina.php";
    setShowForm("");
    let infoLog = await AsyncStorage.getItem("logged");
    infoLog = JSON.parse(infoLog);
    const empSel = infoLog.empSel.trim();
    const codEmp = infoLog.codEmp.trim();
    const month = parseInt(val.month) + 1;
    const info =
      infoLog.type === "employee"
        ? // es 1
          `empresaId=${empSel}&identificacionId=${codEmp}&anho=${val.year}&mes=${month}`
        : // es 2
          `Empresa=${empSel}&NitCliente=${codEmp}&Anho=${val.year}&Mes=${month}`;
    console.log(path, info);
    const respApi = await fetchPost(path, info);
    console.log("respuesta", respApi);
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

  const getModalHumanAndAusen = async (val) => {
    // descargar Indicador de Gestión humana
    // descargar Ausentismo
    setModal(false);
    let infoLog = await AsyncStorage.getItem("logged");
    infoLog = JSON.parse(infoLog);
    const empSel = infoLog.empSel;
    const codEmp = infoLog.codEmp;
    const fecIni = val.startDate;
    const fecFin = val.endDate;

    const info = `FechaInicial=${fecIni}&FechaFinal=${fecFin}&
    Empresa=${empSel}&NitCliente=${codEmp}`;
    const path =
      showForm == "humanResourcesIndicator"
        ? "usuario/getIGH.php"
        : "usuario/getAusentismo.php";

    const respApi = await fetchPost(path, info);
    setShowForm("");
    console.log(respApi);
    if (respApi.status) {
      const data = respApi.data;
      if (data.Correcto === 1) {
        dowArchivo(data);
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

  useEffect(() => {
    if (!modal) {
      setShowForm("");
    }
  }, [modal]);

  useEffect(() => {
    const idSel = showForm;
    if (idSel != "") {
      console.log("idSel", idSel);
      switch (idSel) {
        case "laboralCertificate":
          setShowForm("");
          getCerLaboral();
          break;
        case "laboralCertificate2":
          setShowForm("");
          getIngresoRete();
          break;
        case "laboralCertificate3":
          setShowForm("");
          getHojaVidaLab();
          break;
        case "capacitations":
          setShowForm("");
          getCapacitations();
          break;
        // modales
        case "payrollFlyer":
          setModal(true);
          break;
        case "generalPayroll":
          setModal(true);
          break;
        case "humanResourcesIndicator":
          setModal(true);
          break;
        case "ausentism":
          setModal(true);
          break;

        default:
          break;
      }
    }
  }, [showForm]);

  return (
    <View style={styles.scrollStyle}>
      <View>
        <View style={styles.imageSvg}>{image}</View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{desc}</Text>
        <Pressable onPress={() => setShowForm(id)}>
          <View style={styles.downloadButton}>
            <Text style={{ color: colors.light, fontFamily: "Volks-Bold" }}>
              Descargar
            </Text>
          </View>
        </Pressable>
      </View>
      {modal && (
        <Modal animationType="slide" visible={modal} transparent={true}>
          {showForm === "payrollFlyer" || showForm === "generalPayroll" ? (
            <View style={styles.modalContainer}>
              <FormBillsModal
                closeModal={() => setModal(false)}
                onConfirm={getPayrollFlyer}
              />
            </View>
          ) : (
            <View style={styles.modalForm}>
              <FormInicFin
                closeModal={() => {
                  setModal(false);
                  setShowForm("");
                }}
                onConfirm={getModalHumanAndAusen}
              />
            </View>
          )}
        </Modal>
      )}
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
  generalView: {
    height: heightPercentageToPx(100),
    width: widthPercentageToPx(100),
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalForm: {
    top: 45,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    transform: [{ translateY: 50 }],
    width: widthPercentageToPx(90),
    height: heightPercentageToPx(90),
  },
});
