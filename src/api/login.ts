import { api } from ".";

interface LoginType {
  email: "",
  password: ""
}

export const login = async (data: LoginType) => {
  try {
    const request = await api.post("login", data);

    const token = request.data.details.Token;

    localStorage.token = token;
    api.defaults.headers["Authorization"] = token;

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
