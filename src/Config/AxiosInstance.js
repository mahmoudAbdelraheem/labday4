import axios from "axios";
import { ApiEndPoints } from "./EndPoints";

const axiosInstance = axios.create({
  baseURL: ApiEndPoints.baseUrl,
  headers: {
    accept: "application/json",
    Authorization: "Bearer a1f18955374c022f6404ba14b7acd019",
  },
});
export default axiosInstance;
