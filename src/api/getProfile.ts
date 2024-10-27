import { api } from ".";

export const getProfile = () => {
  return new Promise((resolve) => {
    api.get(`/ax-train/users/`).then(({ data }) => {
      resolve(data.detail);
    });
  });
};
