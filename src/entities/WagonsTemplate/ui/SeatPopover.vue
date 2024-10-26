<script lang="ts" setup>
import { WagonData } from "@/widgets/SchemeWagon/model/WagonData";

interface Props {
  seatData: WagonData;
}

const { seatData } = defineProps<Props>();
</script>

<template>
  <div class="popover-data">
    <p>{{ seatData.seatNum % 2 == 0 ? "Верхнее" : "Нижнее" }}</p>
    <p>{{ seatData.price.toLocaleString() }}₽</p>
  </div>
</template>
