import { defineStore } from "pinia";
import { reactive } from "vue";
import { api } from "@/api/";

export const useUserStore = defineStore("user", () => {
  const userData = reactive({
    first_name: "",
    last_name: "",
    email: "",
    isLogin: true,
  });

  const isAuth = () => {
    return !!localStorage.token;
  };

  const logout = () => {
    userData.first_name = "";
    userData.last_name = "";
    userData.email = "";
    userData.isLogin = false;

    delete localStorage.token;

    api.defaults.headers["Authorization"] = "";
  };

  return { userData, isAuth, logout };
});
