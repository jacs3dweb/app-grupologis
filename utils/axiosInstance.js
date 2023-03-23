import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://apps.grupologis.co/WsMovilApp/",
});

export default axiosInstance;
