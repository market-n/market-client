import axios from "axios";
import { api } from "../constant";
const ACCESS_TOKEN = localStorage.getItem("token") || "";
export const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    "Content-type": "application/json",
    Authorization: ACCESS_TOKEN,
  },
});
