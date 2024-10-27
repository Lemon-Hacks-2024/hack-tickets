<script lang="ts" setup>
import SchemeWagon from "@/widgets/SchemeWagon";
import WagonsSelect from "@/features/WagonsSelect";
import LegendBlock from "@/entities/LegendBlock";
import AppBtn from "@/shared/ui/AppBtn.vue";
// import { computed } from "vue";

import { legendData } from "../model/legendData";
// import { useBookingStore } from "@/store/bookingStore";

// const bookingStore = useBookingStore();

// const countSelectedSeat = computed(() => {
//   bookingStore.
// });
</script>

<template>
  <div class="wagon">
    <div class="wagon__title title">Вагон 11</div>

    <SchemeWagon />

    <WagonsSelect class="mb-30" />

    <LegendBlock :items="legendData" />

    <a-divider class="divider" />

    <div class="wagon__footer">
      <div class="wagon__price">
        <p>Вы выбрали <span>3</span> места на сумму <span>23 333 руб.</span></p>
      </div>
      <div class="wagon__btn">
        <AppBtn>Продолжить</AppBtn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wagon {
  background-color: var(--dark-color-2);
  padding: 20px 30px;
  border-radius: 15px;

  &__title {
    color: #fff;
    font-size: 24px;
    margin-bottom: 15px;
  }

  &__footer {
    display: flex;
    align-items: center;
  }

  &__price {
    width: 100%;

    p {
      color: #fff;
      margin: 0;
      font-size: 22px;

      span {
        color: var(--main-color);
      }
    }
  }

  &__btn {
    text-align: right;
    width: 100%;
  }
}
.divider {
  background-color: #ffffff70;
}
</style>
