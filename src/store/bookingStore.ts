import { defineStore } from "pinia";
import { ref } from "vue";

export const useBookingStore = defineStore("booking", () => {
  const typeWagon = ref("reserved");

  return { typeWagon };
});
