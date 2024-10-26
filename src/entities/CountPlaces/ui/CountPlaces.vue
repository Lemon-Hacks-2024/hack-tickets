<script lang="ts" setup>
import { Props } from "../model/Props";

const props = defineProps<Props>();
</script>

<template>
  <div class="count-places">
    <div class="count-places__type">{{ props.type }}</div>

    <div v-if="props.count > 0" class="count-places__count">
      {{ props.count }}
      <span v-if="props.price">от {{ props.price.toLocaleString() }} ₽</span>
    </div>
    <div v-else class="count-places__count">Мест нет</div>
  </div>
</template>

<style lang="scss" scoped>
.count-places {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;

  &__type {
    color: #fff;
  }
  &__count {
    color: #a6a6a6;

    span {
      color: var(--main-color);
      margin-left: 5px;
    }
  }
}
</style>
