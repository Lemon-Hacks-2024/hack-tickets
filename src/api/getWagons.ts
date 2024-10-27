import { api } from ".";

export const getWagons = (trainId: number) => {
  return new Promise((resolve) => {
    api.get(`/ax-train/wagons?train_id=${trainId}`).then(({ data }) => {
      resolve(data.detail);
    });
  });
};
