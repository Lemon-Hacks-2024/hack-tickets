<script lang="ts" setup>
import { WagonData } from "@/widgets/SchemeWagon/model/WagonData";
import ReservedTemplate from "../templates/ReservedTemplate.vue";

import { reservedSeats } from "../model/reservedSeats";
import { reservedTextSeats } from "../model/reservedTextSeats";

const placesData = defineModel<WagonData[]>("placesData");

const isHasSeat = (seatNum: number) => {
  if (!placesData.value) return;

  const seatData = placesData.value.find((item) => item.seatNum == seatNum);

  if (!seatData) return;

  return seatData.bookingStatus == "FREE";
};
</script>

<template>
  <ReservedTemplate>
    <template #seats>
      <path
        v-for="(item, i) in reservedSeats"
        :key="i"
        :d="item"
        class="seat"
        :class="{ shadow: i % 2 == 1, 'seat-free': isHasSeat(i + 1) }"
      ></path>
    </template>
    <template #numbers>
      <text
        v-for="(item, i) in reservedTextSeats"
        :key="i"
        :transform="item"
        class="seat-text"
      >
        {{ i + 1 }}
      </text>
    </template>
  </ReservedTemplate>
</template>

<style lang="scss" scoped>
.seat {
  transition: 0.2s;
  fill: var(--closedPlace);
  stroke: #d2d7db;

  &.shadow {
    stroke-width: 4;
  }
}
.seat-free {
  fill: var(--freePlace);
  cursor: pointer;

  &:hover {
    fill: var(--hoverPlace);
  }
}
.seat-text {
  color: #000;
  font-size: 20px;
}
</style>
