<script lang="ts" setup>
import { Props } from "../model/Props";
import slideArrowLeft from "@/shared/icons/slideArrowLeft.vue";
import slideArrowRight from "@/shared/icons/slideArrowRight.vue";

const { align } = defineProps<Props>();
</script>

<template>
  <div class="slide-arrow">
    <slideArrowLeft v-if="align == 'left'" />
    <slideArrowRight v-else-if="align == 'right'" />
  </div>
</template>

<style lang="scss" scoped>
.slide-arrow {
  background-color: var(--main-color);
  border-radius: 100px;
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: var(--main-color-hover);
  }
}
</style>
