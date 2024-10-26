<script lang="ts" setup>
import { PropsReservedSeat } from "../model/PropsReservedSeat";
import SeatPopover from "./SeatPopover.vue";

const { path, seatData } = defineProps<PropsReservedSeat>();
</script>

<template>
  <a-popover :title="`№${seatData?.seatNum}`">
    <template #content>
      <SeatPopover :seatData="seatData" />
    </template>

    <path
      :data-id="seatData?.seat_id"
      :data-num="seatData?.seatNum"
      :d="path"
      :class="{
        'free-seat': seatData?.bookingStatus == 'FREE',
        shadow: seatData?.seatNum % 2 == 0,
      }"
    ></path>
  </a-popover>
</template>

<style lang="scss" scoped>
path {
  transition: 0.2s;
  cursor: pointer;
  fill: var(--closedPlace);

  &.seat-free {
    &:hover {
      fill: var(--hoverPlace);
    }
    fill: var(--freePlace);
  }
}
</style>
