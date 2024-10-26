<script lang="ts" setup>
import RadioBlock from "@/shared/ui/RadioBlock";
import { useBookingStore } from "@/store/bookingStore";
import AppBtn from "@/shared/ui/AppBtn.vue";

const bookingStore = useBookingStore();

const emit = defineEmits(["next"]);
</script>

<template>
  <div class="select-type-wagon">
    <a-radio-group v-model:value="bookingStore.typeWagon">
      <RadioBlock value="reserved" label="Плацкарт">
        <span>От 1 591₽</span>
        <span>317 мест</span>
      </RadioBlock>
      <RadioBlock value="compartment" label="Купе">
        <span>От 2 846₽</span>
        <span>26 мест</span>
      </RadioBlock>
    </a-radio-group>

    <div class="select-type-wagon__btn">
      <AppBtn @click="emit('next')">Продолжить</AppBtn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.select-type-wagon {
  display: flex;
  flex-direction: column;

  &__btn {
    text-align: right;
  }
}
</style>
