<script lang="ts" setup>
import type { Props } from "../model/Props";
import arrowRight from "@/shared/icons/arrowRight.vue";
import arrowLeft from "@/shared/icons/arrowLeft.vue";
import route from "@/shared/icons/route.vue";
import { ref } from "vue";
import dayjs from "dayjs";

const emit = defineEmits(["prev"]);

const props = defineProps<Props>();
const items = ref<{ title: string }[]>([]);
for (let i = 0; i < props.countSteps; i++) {
  items.value.push({ title: "" });
}
</script>

<template>
  <div class="steps-card">
    <div class="steps-card__head">
      <arrowRight @click="emit('prev')" />

      <a-steps
        :current="props.step"
        size="small"
        :items="items"
        class="steps-card__steps"
      />
    </div>
    <div class="steps-card__title title">
      <slot />
    </div>
    <div class="steps-card__footer">
      <route />
      <span>{{ props.trainInfo.cityFrom }}</span>
      <arrowLeft class="white arrow-left" />
      <span>{{ props.trainInfo.cityTo }}</span>
      <span>{{ dayjs(props.trainInfo.date).format("DD.MM.YYYY HH:mm") }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.steps-card {
  background-color: var(--dark-color-2);
  padding: 20px 30px;
  border-radius: 10px;

  &__head {
    display: flex;
    align-items: center;
    gap: 25px;
    margin-bottom: 5px;
  }
  &__steps {
    width: 300px;
  }

  &__title {
    font-size: 24px;
    color: #fff;
    margin-bottom: 24px;
    font-weight: bold;
  }

  &__footer {
    display: flex;
    align-items: center;
    gap: 20px;
    color: #fff;
    font-size: 16px;
  }
}

.ant-steps {
  :deep(.ant-steps-item-wait .ant-steps-item-icon) {
    background-color: #d9d9d9;
  }
  :deep(.ant-steps-item-active .ant-steps-icon) {
    color: var(--dark-color-2);
  }
  :deep(.ant-steps-item-title::after) {
    background-color: #fff !important;
  }
  :deep(.ant-steps-item-wait .ant-steps-item-icon) {
    border-color: #d9d9d9 !important;
  }
  :deep(.ant-steps-item-container:hover .ant-steps-icon) {
    color: var(--dark-color-2) !important;
  }
  :deep(.ant-steps-item-finish svg) {
    fill: var(--dark-color-2);
  }
}

.arrow-left {
  width: 30px;
}
</style>
