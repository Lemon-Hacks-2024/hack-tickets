import { api } from ".";

export const getTrains = (startPoint: string, endPoint: string, startDate: string, endDate: string) => {
  return new Promise((resolve, reject) => {
    api
      .get(`trains`, {
        params: {
          booking_available: true,
          start_point: startPoint,
          end_point: endPoint,
          start_date_departure: startDate,
          end_date_departure: endDate
        }
      })
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
