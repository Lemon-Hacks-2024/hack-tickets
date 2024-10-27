import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.t-app.ru/ax-train/",
  headers: {
    Accept: "",
    "Content-Type": "application/json",
    Authorization: localStorage.token ? `Bearer ${localStorage.token}` : "",
  },
});
