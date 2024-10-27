import { api } from ".";

export const getProfile = () => {
   const a = new Promise((resolve) => {
        api.get(`users`).then(({ data }) => {
          resolve(data.detail);
        });
      });
    console.log(a);
  return a
};
