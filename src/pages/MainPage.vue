<script lang="ts" setup>
import MainForm from "@/widgets/MainForm/ui/MainForm.vue";
</script>

<template>
  <div class="main-page">
    <div class="container">
      <div class="main-page__content">
        <MainForm />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-page {
  height: calc(100vh - 72px);
  display: flex;
  align-items: center;

  &__content {
    min-height: 230px;
  }
}
</style>
