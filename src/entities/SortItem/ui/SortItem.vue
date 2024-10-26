<script lang="ts" setup>
import sort from "@/shared/icons/sort.vue";
import { Props } from "../model/Props";

const { item } = defineProps<Props>();
</script>

<template>
  <div class="sort-item" :class="{ active: item.active }">
    <sort
      v-if="item.active"
      class="sort-item__icon show"
      :class="{ reverse: item.type == 'ASC' }"
    />
    <span v-else class="sort-item__icon">&mdash;</span>
    {{ item.name }}
  </div>
</template>

<style lang="scss" scoped>
.sort-item {
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: 0.2s;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 13px;

  &:hover {
    opacity: 0.8;
  }

  &.active {
    opacity: 1;
  }

  &__icon {
    width: 25px;
    transition: 0.2s;
  }
}
.reverse {
  transform: scaleY(-1);
}
</style>
