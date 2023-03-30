import axios from "axios";

const urlApi = "https://appgrupologis.com/prod/app/managers/";
// const axiosInstance = axios.create({
//   baseURL: "https://apps.grupologis.co/WsMovilApp/",
// });

// export default axiosInstance;
export const get = async (path) => {
  try {
    const url = `${urlApi}${path}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return false;
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
