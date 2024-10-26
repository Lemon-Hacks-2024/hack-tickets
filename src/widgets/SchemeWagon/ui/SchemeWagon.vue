<script lang="ts" setup>
import ReservedScheme from "@/entities/WagonsTemplate/ui/ReservedScheme.vue";
import { testData } from "../model/testData";
import { useBookingStore } from "@/store/bookingStore";
import { onMounted, ref } from "vue";

const bookingStore = useBookingStore();

const placesData = ref();
onMounted(() => {
  placesData.value = [...testData];
});
</script>

<template>
  <div class="scheme-wagon">
    <ReservedScheme
      v-if="bookingStore.typeWagon == 'reserved'"
      v-model:placesData="placesData"
    />
  </div>
</template>

<style lang="scss" scoped>
.scheme-wagon {
  svg {
    width: 100%;
  }
}
</style>
