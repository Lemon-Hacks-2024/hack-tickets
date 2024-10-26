<script lang="ts" setup>
import TrainsFilter from "@/widgets/TrainsFilter/ui/TrainsFilter.vue";
</script>

<template>
  <a-layout class="layout-bg">
    <a-layout-sider class="layout-bg" width="250">
      <TrainsFilter />
    </a-layout-sider>
    <a-layout-content class="layout-bg"> content </a-layout-content>
  </a-layout>
</template>

<style scoped>
.layout-bg {
  background-color: transparent;
}
</style>
