import axios from "axios";
import getConfig from "next/config";
const backendURL = getConfig().publicRuntimeConfig.backendUrl;
const instance = axios.create({
  baseURL: backendURL,
});

export default instance;
