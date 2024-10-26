<script lang="ts" setup>
import { Props } from "../model/Props";

const { label, value } = defineProps<Props>();
const checked = defineModel<boolean>("checked");
</script>

<template>
  <label class="radio-block">
    <a-radio v-model:checked="checked" :value="value">{{ label }}</a-radio>
    <div class="radio-block__text">
      <slot />
    </div>
  </label>
</template>

<style lang="scss" scoped>
.radio-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dark-color-2);
  padding: 20px 30px;
  border-radius: 15px;
  cursor: pointer;
  margin-bottom: 15px;

  :deep(span),
  &__text {
    color: #fff;
    font-size: 18px;
  }

  &__text {
    display: flex;
    align-items: center;
    gap: 60px;

    :deep(span) {
      white-space: nowrap;
      width: 100px;
    }
  }
}
</style>
