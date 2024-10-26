<script lang="ts" setup>
import SchemeWagon from "@/widgets/SchemeWagon";
</script>

<template>
  <div class="wagon">
    <div class="wagon__title title">Вагон 11</div>

    <SchemeWagon />
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
}
</style>
