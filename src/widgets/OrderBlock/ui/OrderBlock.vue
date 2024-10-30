<script setup lang="ts">
import AppBtn from "@/shared/ui/AppBtn.vue";
</script>

<template>
  <div class="success-window">
    <a-result
      status="success"
      title="Билеты успешны забронированы!"
      sub-title="Бронь действует в течение следующих 20 минут. Вам будет необходимо оплатить ее, иначе бронь будет отменена."
    >
      <template #extra>
        <router-link to="/" style="color: #000">
          <AppBtn>На главную</AppBtn>
        </router-link>
      </template>
    </a-result>
  </div>
</template>

<style scoped>
.success-window {
  padding: 40px 0;
  border-radius: 15px;
  background: var(--dark-color-hover);
}

:deep(.ant-result-title) {
  color: #fff;
}

:deep(.ant-result-subtitle) {
  color: #fff;
}

:deep(.anticon-check-circle svg) {
  fill: var(--main-color);
}
</style>
