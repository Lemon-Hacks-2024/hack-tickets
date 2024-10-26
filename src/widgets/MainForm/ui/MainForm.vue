<script lang="ts" setup>
import FindForm from "@/features/FormFind";
</script>

<template>
  <div class="main-form">
    <h1 class="main-form__title title">
      <span>Купить билет,</span> <br />
      посмотреть расписание
    </h1>

    <FindForm />
  </div>
</template>

<style lang="scss" scoped>
.main-form {
  &__title {
    font-size: 40px;
    line-height: 45px;
    margin-bottom: 50px;

    span {
      background-color: var(--main-color);
    }
  }
}
</style>
