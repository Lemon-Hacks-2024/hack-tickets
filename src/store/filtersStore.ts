import { defineStore } from "pinia";

interface RangeType {
  value: [number, number];
  range: [number, number];
}

export const useFiltersStore = defineStore("filters", () => {
  const data: Record<string, RangeType> = {
    price: {
      value: [3000, 10000],
      range: [1000, 10000],
    },
    time: {
      value: [420, 970],
      range: [500, 1200],
    },
    from: {
      value: [0, 100],
      range: [0, 100],
    },
    to: {
      value: [0, 100],
      range: [0, 100],
    },
  };

  return { data };
});
