<script lang="ts" setup>
import FilterRange from "@/features/FilterRange";
import FilterCheckbox from "@/features/FilterCheckbox";
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
    <a-divider class="divider" />
    <FilterRange
      title="Время пути"
      :isTime="true"
      :range="filterData.time.range"
      v-model:rangeValue="filterData.time.value"
    />
    <a-divider class="divider" />
    <FilterRange
      title="Отправление"
      :isTime="true"
      :range="filterData.from.range"
      v-model:rangeValue="filterData.from.value"
    />
    <a-divider class="divider" />
    <FilterRange
      title="Прибытие"
      :isTime="true"
      :range="filterData.to.range"
      v-model:rangeValue="filterData.to.value"
    />
    <a-divider class="divider" />
    <FilterCheckbox
      title="Тип вагона"
      :items="filterData.wagons.items"
      v-model:value="filterData.wagons.value"
    />
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
.divider {
  background-color: #ffffff47;
  margin: 0;
}
</style>
