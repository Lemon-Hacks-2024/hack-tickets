import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.t-app.ru",
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.token ?? "",
  },
});
