<script lang="ts" setup>
import { Props } from "../model/Props";
import { getPluralWord } from "@/shared/utils/pluralWord";

const { number, freePlaces, active } = defineProps<Props>();
</script>

<template>
  <div class="wagon-item" :class="{ active }">
    <div class="wagon-item__name title">
      Вагон {{ number >= 10 ? number : "0" + number }}
    </div>
    <div class="wagon-item__desc">
      {{ freePlaces }}
      {{ getPluralWord(freePlaces, ["меcто", "места", "мест"]) }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wagon-item {
  background-color: #d9d9d9;
  border-radius: 8px;
  padding: 15px 25px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #c1c1c1;
  }

  &.active {
    background-color: var((--main-color));
  }

  &__name {
    text-transform: uppercase;
    font-weight: bold;
  }
  &__desc {
  }
}
</style>
