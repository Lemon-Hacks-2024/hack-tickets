import { defineStore } from "pinia";
import { ref } from "vue";
import type { SortItemType } from "@/entities/SortItem/model/SortItemType";

export const useSortStore = defineStore("sort", () => {
  const data = ref<SortItemType[]>([
    {
      type: "ASC",
      name: "По времени отправления",
      active: true,
    },
    {
      type: "ASC",
      name: "По времени прибытия",
      active: false,
    },
    {
      type: "ASC",
      name: "По времени прибытия",
      active: false,
    },
    {
      type: "ASC",
      name: "По стоимости",
      active: false,
    },
  ]);

  return { data };
});
