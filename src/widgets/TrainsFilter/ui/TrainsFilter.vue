<script lang="ts" setup>
import FiltersTitle from "@/entities/FiltersTitle";
import FiltersBlock from "@/widgets/FiltersBlock";
</script>

<template>
  <div class="trains-filter">
    <FiltersTitle :count="2" />
    <FiltersBlock />
  </div>
</template>

<style lang="scss" scoped>
.trains-filter {
  padding-bottom: 40px;
}
</style>
