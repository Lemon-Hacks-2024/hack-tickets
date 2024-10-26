<script lang="ts" setup>
import FilterRange from "@/features/FilterRange/ui/FilterRange.vue";
import { useFiltersStore } from "@/store/filtersStore";

const { data: filterData } = useFiltersStore();
</script>

<template>
  <div class="filters-block">
    <FilterRange
      title="Стоимость"
      :range="filterData.price.range"
      v-model:rangeValue="filterData.price.value"
    />
    <FilterRange
      title="Время пути"
      :isTime="true"
      :range="filterData.time.range"
      v-model:rangeValue="filterData.time.value"
    />
    <!-- <FilterRange title="Отправление" />
    <FilterRange title="Прибытие" /> -->
  </div>
</template>

<style lang="scss" scoped>
.filters-block {
  background-color: var(--dark-color-2);
  border-radius: 15px;
  color: #fff;
  display: flex;
  flex-direction: column;
}
</style>
