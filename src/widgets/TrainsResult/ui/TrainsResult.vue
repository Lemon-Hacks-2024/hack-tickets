<script lang="ts" setup>
import TrainsFilter from "@/widgets/TrainsFilter";
import CardTrain from "@/entities/CardTrain";
import SortBlock from "@/features/SortBlock";
</script>

<template>
  <a-layout class="layout-bg">
    <a-layout-sider class="layout-bg" width="250">
      <TrainsFilter />
    </a-layout-sider>
    <a-layout-content class="layout-bg layout-content">
      <SortBlock />

      <CardTrain />
      <CardTrain />
      <CardTrain />
      <CardTrain />
      <CardTrain />
      <CardTrain />
      <CardTrain />
      <CardTrain />
      <CardTrain />
      <CardTrain />
      <CardTrain />
      <CardTrain />
      <CardTrain />
      <CardTrain />
      <CardTrain />
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
.layout-bg {
  background-color: transparent;
}
.layout-content {
  padding-left: 40px;
}
</style>
