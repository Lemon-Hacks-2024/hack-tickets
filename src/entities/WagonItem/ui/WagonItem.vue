<script lang="ts" setup>
import { Props } from "../model/Props";
import { getPluralWord } from "@/shared/utils/pluralWord";

const { number, freePlaces } = defineProps<Props>();
</script>

<template>
  <div class="wagon-input">
    <div class="wagon-input__name title">ВАГОН {{ number }}</div>
    <div class="wagon-input__desc">
      {{ freePlaces }}
      {{ getPluralWord(freePlaces, ["мето", "метса", "мест"]) }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
