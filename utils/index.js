import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const getFontStyles = (
  size,
  ptPercentage = 0.6,
  lhPercentage = 0.75
) => {
  return {
    fontSize: size,
    lineHeight: size * lhPercentage,
    paddingTop: size - size * ptPercentage,
  };
};

export const colors = {
  white: "#FFFFFF",
  mainBackgroundColor: "#f0f0fd",
  generalBackgroundColor: "#F1F1FE",
  mainBlue: "#1A68FC",
  buttonsColor: "#999AF6",
  notificationsBackgroundColor: "#F1F1FE",
  formInputsColorBackground: "#F1F1FE",
  mainPink: "#D6007F",
  descriptionColors: "#808080",
  gray: "#CCCCCC",
};

export const images = {
  loginImage:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2FLoginWorkers.png?alt=media&token=f5dd37cd-ee96-4f3c-a7f6-db0a2bc37549",
  colorLogo:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2FlogoColor.png?alt=media&token=cce21b6a-ad7d-4da4-9015-ec672632f72d",
  whiteLogo:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2FwhiteColor.png?alt=media&token=d506f814-bc0b-4f78-9b28-76460324332a",
  BusinessEmployeeLoginImage:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2Fworkers.png?alt=media&token=471853f4-fa12-4500-8113-45871c6829fd",
  employeeLoginImage:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2Fbusiness.png?alt=media&token=65d34ae8-2712-4304-ba00-232acdfad60f",
  certificadoImage1:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2Ficons-sidebar-m-01.svg.png?alt=media&token=df573d80-b95e-439f-ade7-aa83939a00d4",
  userImage:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2Fphotos%252Fwoman%252Fwanna6.ce59a86a87e87831fa7d.png.png?alt=media&token=b5969067-5adb-4412-80c5-f000500ba3e3",
  payrollFlyer:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2Ficons-sidebar-m-02.svg.png?alt=media&token=faad7c32-b792-4417-8cd8-bca82cf81f0e",
  certificadoImage3:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2Ficons-sidebar-m-03.svg.png?alt=media&token=0e81171e-bf75-48a7-b321-542940756328",
  certificadoImage4:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2FGrupo%2063.png?alt=media&token=0d6c5a70-2c24-42a3-aa79-46e8096b3ddc",
};

export const widthPercentageToPx = (percentage) => {
  return (windowWidth * percentage) / 100;
};

export const heightPercentageToPx = (percentage) => {
  return (windowHeight * percentage) / 100;
};

export const employeeDownloadables = [
  {
    id: "laboralCertificate",
    title: "Certificado laboral",
    description:
      "Descargar tu certificado laboral sin necesidad de pedirlo a Grupologis",
    image: images.certificadoImage1,
  },
  {
    id: "payrollFlyer",
    title: "Volante de nómina",
    description:
      "Descargar tu certificado laboral sin necesidad de pedirlo a Grupologis",
    image: images.payrollFlyer,
  },
  {
    id: "laboralCertificate2",
    title: "Certificado laboral",
    description:
      "Descargar tu certificado laboral sin necesidad de pedirlo a Grupologis",
    image: images.certificadoImage3,
  },
  {
    id: "laboralCertificate3",
    title: "Certificado laboral",
    description:
      "Descargar tu certificado laboral sin necesidad de pedirlo a Grupologis",
    image: images.certificadoImage4,
  },
];
