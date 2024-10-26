<script lang="ts" setup>
import { BookingStatus } from "@/widgets/SchemeWagon/model/BookingStatus";
import { WagonData } from "@/widgets/SchemeWagon/model/WagonData";
import ReservedTemplate from "../templates/ReservedTemplate.vue";

import { reservedSeats } from "../model/reservedSeats";
import { reservedTextSeats } from "../model/reservedTextSeats";

const placesData = defineModel<WagonData[]>("placesData");

const getSeatData = (seatNum: number) => {
  if (!placesData.value) return;

  return placesData.value.find((item) => item.seatNum == seatNum);
};

const isFreeSeat = (seatNum: number) => {
  const seatData = getSeatData(seatNum);

  if (!seatData) return;

  return seatData.bookingStatus == "FREE";
};

const isSelectedSeat = (seatNum: number) => {
  const seatData = getSeatData(seatNum);

  if (!seatData) return;

  return seatData.bookingStatus == "SELECTED";
};

const changeSeat = (seatNum: number) => {
  const seatData = getSeatData(seatNum);
  if (!seatData) return;

  switch (seatData.bookingStatus) {
    case "FREE":
      seatData.bookingStatus = BookingStatus.SELECTED;
      break;
    case "SELECTED":
      seatData.bookingStatus = BookingStatus.FREE;
      break;
  }
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
        :class="{
          shadow: i % 2 == 1,
          'seat-free': isFreeSeat(i + 1),
          'seat-selected': isSelectedSeat(i + 1),
        }"
        @click="changeSeat(i + 1)"
      >
      </path>
    </template>
    <template #numbers>
      <text
        v-for="(item, i) in reservedTextSeats"
        :key="i"
        :transform="item"
        class="seat-text"
        :class="{ 'seat-text-selected': isSelectedSeat(i + 1) }"
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

  &:hover {
    fill: var(--hoverFreePlace);
  }
}
.seat-selected {
  fill: var(--selectedPlace);

  &:hover {
    fill: var(--hoverSelectedPlace);
  }
}
.seat-free,
.seat-selected {
  cursor: pointer;
}
.seat-text {
  fill: #000;
  transition: 0.2s;
  font-size: 20px;

  &-selected {
    fill: #fff;
  }
}
</style>
