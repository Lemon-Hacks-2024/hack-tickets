import { defineStore } from "pinia";
import { ref } from "vue";
import { FormModel } from "@/features/FormFind/model/FormModel";

export const useTrainsStore = defineStore("trains", () => {
  const findParams = ref<FormModel>({
    cityFrom: "",
    cityTo: "",
    dateFrom: null,
    dateTo: null,
  });

  return { findParams };
});
