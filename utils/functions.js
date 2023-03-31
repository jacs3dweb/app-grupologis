import { get, getDes, post } from "./axiosInstance";
import { decode, encode } from "base-64";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import * as MediaLibrary from "expo-media-library";

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

export const downloadArchivo = async (base64, mime, name) => {
  // return false;
  // try {
  //   const path = `${FileSystem.documentDirectory}${name}`;

  //   await RNFetchBlob.config({
  //     fileCache: true,
  //     addAndroidDownloads: {
  //       useDownloadManager: true,
  //       notification: true,
  //       mediaScannable: true,
  //       title: name,
  //       path,
  //     },
  //   })
  //     .fetch("GET", `data:${mime};base64,${base64}`)
  //     .then(async (res) => {
  //       await RNFS.readFile(path, "base64").then((data) => {
  //         console.log(`File saved to ${path}`);
  //       });
  //     });
  //   return true;
  // } catch (error) {
  //   console.error(error);
  //   return false;
  // }
  // try {
  //   const fileUri = FileSystem.documentDirectory + name;
  //   const downloadObject = FileSystem.createDownloadResumable(base64, fileUri, {
  //     mimeType: mime,
  //   });
  //   const response = await downloadObject.downloadAsync();
  //   console.log("Descarga completada");
  //   return response;
  // } catch (error) {
  //   console.error(error);
  //   return false;
  // }
  try {
    const data = `data:${mime};base64,${base64}`;
    const base64Code = data.split(`data:${mime};base64,`)[1];
    const fileUri = FileSystem.documentDirectory + name;

    await FileSystem.writeAsStringAsync(fileUri, base64Code, {
      encoding: FileSystem.EncodingType.Base64,
    });

    const mediaResult = await MediaLibrary.saveToLibraryAsync(fileUri);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
