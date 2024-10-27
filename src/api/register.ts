import { api } from ".";

interface RegisterType {
  first_name: "";
  last_name: "";
  email: "";
  password: "";
}

export const register = async (data: RegisterType) => {
  try {
    const request = await api.post("register", data);

    const token = request.data.details.Token;

    localStorage.token = token;
    api.defaults.headers["Authorization"] = token;

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
