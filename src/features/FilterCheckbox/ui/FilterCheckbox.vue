<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { Props } from "../model/Props";

const { title, items } = defineProps<Props>();

const value = defineModel<string[]>("value");
</script>

<template>
  <div class="filter">
    <div class="filter__title title">{{ title }}</div>

    <a-checkbox-group
      v-model:value="value"
      :options="items"
      class="checkbox-group"
    />
  </div>
</template>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;

  &__title {
    text-transform: uppercase;
    font-size: 16px;
  }
}
.checkbox-group {
  flex-direction: column;
  width: 100%;

  :deep(.ant-checkbox-group-item) {
    color: #fff;
  }
}
</style>
