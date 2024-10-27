import { defineStore } from "pinia";
import { reactive } from "vue";

export const useUserStore = defineStore("user", () => {
  const userData = reactive({
    first_name: "",
    last_name: "",
    email: "",
  });

  const isAuth = () => {
    return !!localStorage.token;
  };

  const logout = () => {
    userData.first_name = "";
    userData.last_name = "";
    userData.email = "";

    delete localStorage.token;
  };

  return { userData, isAuth, logout };
});
