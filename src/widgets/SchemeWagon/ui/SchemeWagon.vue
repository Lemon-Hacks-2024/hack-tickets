<script lang="ts" setup>
import ReservedScheme from "@/entities/WagonsTemplate/ui/ReservedScheme.vue";
import CompartmentScheme from "@/entities/WagonsTemplate/ui/CompartmentScheme.vue";
import { testData } from "../model/testData";
import { useBookingStore } from "@/store/bookingStore";
import { onMounted, ref } from "vue";
// import { useRoute } from "vue-router";

// import { getWagons } from "@/api/getWagons";

// const route = useRoute();

const bookingStore = useBookingStore();

const placesData = ref();
onMounted(() => {
  placesData.value = [...testData];

  // getWagons(+route.params.trainId).then((res) => {
  //   console.log(res);
  // });
});
</script>

<template>
  <div class="scheme-wagon">
    <ReservedScheme
      v-if="bookingStore.typeWagon == 'reserved'"
      v-model:placesData="placesData"
    />
    <CompartmentScheme
      v-if="bookingStore.typeWagon == 'compartment'"
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
