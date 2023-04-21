import axios from "axios";
const domain = "https://appgrupologis.com/";
const urlApi = `${domain}prod/app/managers/`;
const urlSer = `${domain}services_app/Routes/`;

// const axiosInstance = axios.create({
//   baseURL: "https://apps.grupologis.co/WsMovilApp/",
// });

// export default axiosInstance;
export const get = async (path) => {
  try {
    const url = `${urlApi}${path}`;
    const response = await axios.get(url);
    return { status: true, data: response.data };
  } catch (error) {
    console.error(error);
    return { status: false, data: null };
  }
};

export const getDes = async (url) => {
  try {
    await axios.get(url);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const post = async (path, data) => {
  try {
    const url = `${urlApi}${path}`;
    const response = await axios.post(url, data);
    return { status: true, data: response.data };
  } catch (error) {
    console.error(error);
    return { status: false, data: null };
  }
};

export const getSer = async (path) => {
  try {
    const url = `${urlSer}${path}`;
    const response = await axios.get(url);
    return { status: true, data: response.data };
  } catch (error) {
    console.error(error);
    return { status: false, data: null };
  }
};

export const postSer = async (path, body) => {
  try {
    const url = `${urlSer}${path}`;
    const response = await axios.post(url, body);
    return { status: true, data: response.data };
  } catch (error) {
    console.error(error);
    return { status: false, data: null };
  }
};
