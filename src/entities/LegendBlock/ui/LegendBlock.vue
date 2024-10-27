<script lang="ts" setup>
import LegendItem from "./LegendItem.vue";
import { Props } from "../model/Prpos";

const { items } = defineProps<Props>();
</script>

<template>
  <div class="legend-block">
    <LegendItem v-for="(item, i) in items" :key="i" :color="item.color">
      {{ item.label }}
    </LegendItem>
  </div>
</template>

<style lang="scss" scoped>
.legend-block {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
