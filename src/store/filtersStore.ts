import { defineStore } from "pinia";
import type { CheckboxType } from "@/shared/model/CheckboxType";

interface RangeType {
  value: [number, number];
  range: [number, number];
}

interface filterData {
  price: RangeType;
  time: RangeType;
  from: RangeType;
  to: RangeType;
  wagons: {
    value: string[];
    items: CheckboxType[];
  };
}

export const useFiltersStore = defineStore("filters", () => {
  const data: filterData = {
    price: {
      value: [3000, 10000],
      range: [1000, 10000],
    },
    time: {
      value: [420, 970],
      range: [500, 1200],
    },
    from: {
      value: [0, 1440],
      range: [0, 1440],
    },
    to: {
      value: [0, 1440],
      range: [0, 1440],
    },
    wagons: {
      value: [],
      items: [
        { value: "reserved", label: "Плацкарт", selected: false },
        { value: "compartment", label: "Купе", selected: false },
      ],
    },
  };

  return { data };
});
