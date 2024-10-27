<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import AppLoader from "@/shared/ui/AppLoader.vue";
import StepsCard from "@/entities/StepsCard/ui/StepsCard.vue";
import BookingSteps from "@/widgets/BookingSteps";
import { useRouter } from "vue-router";

const router = useRouter();

const step = ref<number>(0);
const isLoad = ref(true);

const trainInfo = {
  cityFrom: "Ростов-на-Дону",
  cityTo: "Адлер",
  date: "2024-12-02 13:32",
};

const fetchGetTrain = () => {
  isLoad.value = true;
  setTimeout(() => {
    isLoad.value = false;
  }, 1000);
};

onMounted(() => {
  fetchGetTrain();
});

const stepTitle = computed(() => {
  switch (step.value) {
    case 0:
      return "Выберите класс обслуживания";
    case 1:
      return "Выберите места";
    case 2:
      return "Заказ готов к оплате";
  }
  return "";
});

const onBack = () => {
  if (step.value == 0) router.go(-1);
  else step.value--;
};
</script>

<template>
  <div class="booking">
    <div class="container">
      <Transition>
        <AppLoader v-if="isLoad" />
        <div v-else>
          <StepsCard :count-steps="3" :step="step" :train-info="trainInfo" class="booking__steps" @prev="onBack">
            {{ stepTitle }}
          </StepsCard>

          <BookingSteps v-model:step="step" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.booking {
  padding: 40px 0;

  &__steps {
    margin-bottom: 30px;
  }
}
</style>
>
