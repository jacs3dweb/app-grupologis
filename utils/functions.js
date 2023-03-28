import { get, post } from "./axiosInstance";

export function validatePhone(phone) {
  phone = phone.toString();
  return phone.length != 10 ? false : /^\d+$/.test(phone);
}

async function getToken() {
  const path = "usuario/GetToken.php";
  const respToken = await get(path);
  return respToken.substring(5, respToken.length - 5);
}

function characteres() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const init = Array.from({ length: 5 }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join("");
  const fin = Array.from({ length: 5 }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join("");

  return [init, fin];
}

export async function fetchPost(body) {
  const token = await getToken();
  const carac = await characteres();

  body += `&token=${token}`;
  //   const data = `value=${carac[0]}${window.atob(body)}${carac[1]}`;
  return body;
  //   const path = "usuario/saveUsuarioNew.php";

  //   return await post(path, data);
}
