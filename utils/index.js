import { Dimensions } from "react-native";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

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
  loginBackgroundColor: "#f1f1fe",
  mainBlue: "#1A68FC",
  buttonsColor: "#999AF6",
  notificationsBackgroundColor: "#F1F1FE",
  formInputsColorBackground: "#F1F1FE",
  workerButtonColor: "#D6007F",
  descriptionColors: "#808080",
};

export const images = {
  loginImage:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2FLoginWorkers.png?alt=media&token=f5dd37cd-ee96-4f3c-a7f6-db0a2bc37549",
  colorLogo:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2FlogoColor.png?alt=media&token=cce21b6a-ad7d-4da4-9015-ec672632f72d",
  whiteLogo:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2FwhiteColor.png?alt=media&token=d506f814-bc0b-4f78-9b28-76460324332a",
};
