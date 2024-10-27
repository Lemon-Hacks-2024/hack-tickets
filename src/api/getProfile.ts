import { api } from ".";

export const getProfile = () => {
  return new Promise((resolve) => {
    api.get("users").then(({ data }) => {
      resolve(data.detail);
    });
  });
};
