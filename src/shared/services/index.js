import axios from "axios";
import { api } from "../constant";
export const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    "Content-type": "application/json",
  },
});
