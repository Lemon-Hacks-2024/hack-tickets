import { api } from ".";

export const getWagons = (trainId: number) => {
  return new Promise((resolve, reject) => {
    api.get(`wagons/`, { params: { train_id: trainId } })
      .then(({ data }) => {
        if (data.message === "OK" && data.details) {
          resolve(data.details);
        } else {
          reject(new Error("Нет данных"));
        }
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        reject(error);
      });
  });
};
