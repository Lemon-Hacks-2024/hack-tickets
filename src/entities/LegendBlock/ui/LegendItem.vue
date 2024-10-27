<script lang="ts" setup>
interface Props {
  color: string;
}

const { color } = defineProps<Props>();
</script>

<template>
  <div class="legend-item">
    <div class="legend-item__box" :style="{ backgroundColor: color }"></div>
    <div class="legend-item__label">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;

  &__box {
    border: 1px solid #fff;
    border-radius: 6px;
    width: 20px;
    height: 20px;
  }
  &__label {
    color: #fff;
    font-size: 14px;
  }
}
</style>
