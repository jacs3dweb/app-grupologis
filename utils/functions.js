import { get, getDes, post } from "./axiosInstance";
import { decode, encode } from "base-64";
// import RNFetchBlob from "rn-fetch-blob";
// const RNFetchBlob = require("rn-fetch-blob");
export function validatePhone(phone) {
  phone = phone.toString();
  return phone.length != 10 ? false : /^\d+$/.test(phone);
}

async function getToken() {
  const path = "usuario/GetToken.php";
  const respToken = await get(path);
  return respToken.substring(5, respToken.length - 5);
}

const characteres = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const init = Array.from({ length: 5 }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join("");
  const fin = Array.from({ length: 5 }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join("");

  return [init, fin];
};

export async function fetchPost(path, body) {
  const token = await getToken();
  const carac = await characteres();

  body += `&token=${token}`;
  const encodedBody = encode(body);
  const data = `value=${carac[0]}${encodedBody}${carac[1]}`;

  return await post(path, data);
}

export const downloadArchivo = async (file, type, nameArc) => {
  console.log("en proceso de descargar");
  return false;
  //   try {
  //     // verificamos la extension
  //     let ext = "";
  //     if (type === "application/pdf") {
  //       ext = ".pdf";
  //     } else if (type === "application/vnd.ms-excel") {
  //       ext = ".xls";
  //     }
  //     // verificamos el dispositivo
  //     const { dirs } = RNFetchBlob.fs;
  //     const dirToSave =
  //       Platform.OS === "android" ? dirs.DownloadDir : dirs.DocumentDir;
  //     // realizamos las configuraciones del archivo
  //     // creamos el archivo
  //     RNFetchBlob.fs.createFile(filePath, file, "base64").then(() => {
  //       RNFetchBlob.config({
  //         addAndroidDownloads: {
  //           useDownloadManager: true,
  //           notification: true,
  //           path: filePath,
  //           mime: type,
  //         },
  //         fileCache: true,
  //         appendExt: ext,
  //       })
  //         .fetch("GET", `file://${filePath}`)
  //         .then((res) => {
  //           console.log(`Archivo ${nameArc} guardado en: `, res.path());
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     return false;
  //   }
};
