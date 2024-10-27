<script lang="ts" setup>
import WagonItem from "@/entities/WagonItem";
import SlideArrow from "@/shared/ui/SlideArrow";
</script>

<template>
  <div class="wagons-select">
    <SlideArrow align="left" />
    <div class="wagons-select__content">
      <WagonItem :number="9" :freePlaces="1" />
      <WagonItem :number="11" :freePlaces="35" :active="true" />
      <WagonItem :number="13" :freePlaces="4" />
      <WagonItem :number="21" :freePlaces="32" />
    </div>
    <SlideArrow align="right" />
  </div>
</template>

<style lang="scss" scoped>
.wagons-select {
  display: flex;
  gap: 15px;
  align-items: center;

  &__content {
    display: flex;
    gap: 15px;
    max-width: 900px;
    overflow: auto;
  }
}
</style>
