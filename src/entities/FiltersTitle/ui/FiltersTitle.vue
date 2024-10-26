<script lang="ts" setup>
import { computed } from "vue";
import { Props } from "../model/Props";
import { getPluralWord } from "@/shared/utils/pluralWord";
import mageFilter from "@/shared/icons/mageFilter.vue";

const { count } = defineProps<Props>();

const flightWord = computed<string>(() => {
  return getPluralWord(count, ["Рейс", "Рейса", "Рейов"]);
});
</script>

<template>
  <div class="filter">
    <mageFilter class="filter__icon" />
    <div class="filter__title">Фильтры</div>
    <div class="filter__count">{{ count }} {{ flightWord }}</div>
  </div>
</template>

<style lang="scss" scoped>
.filter {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;

  &__icon {
    width: 25px;
    height: 25px;
  }
  &__title {
    font-weight: 600;
    font-size: 18px;
  }
  &__count {
    font-size: 18px;
  }
}
</style>
