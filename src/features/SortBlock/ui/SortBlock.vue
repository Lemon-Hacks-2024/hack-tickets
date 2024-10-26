<script lang="ts" setup>
import SortItem from "@/entities/SortItem";
import type { SortItemType } from "@/entities/SortItem/model/SortItemType";
import { useSortStore } from "@/store/sortStore";

const { data: sortData } = useSortStore();

const changeSort = (item: SortItemType) => {
  if (item.active) {
    item.type = item.type == "ASC" ? "DESC" : "ASC";
    return;
  }

  sortData.forEach((item) => {
    item.active = false;
  });

  item.active = true;
  item.type = "ASC";
};
</script>

<template>
  <div class="sort-block">
    <SortItem
      v-for="item in sortData"
      :key="item.name"
      :item="item"
      @click="changeSort(item)"
    />
  </div>
</template>

<style lang="scss" scoped>
.sort-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
</style>
