<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import type { FormModel } from "@/features/FormFind/model/FormModel";
import { rules } from "../models/rules";
import AppBtn from "@/shared/ui/AppBtn.vue";
import dayjs, { Dayjs } from "dayjs";
import { useTrainsStore } from "@/store/trainsStore";

const emit = defineEmits(["sendForm"]);
const open = defineModel<boolean>("open");

const router = useRouter();
const formData = reactive<FormModel>({
  cityFrom: "",
  cityTo: "",
  dateFrom: null,
  dateTo: null,
});

const trainsStore = useTrainsStore();

// const handleNextStep = async () => {
//   try {
//     await $refs.form.validate(); // Предположим, что у вас есть ссылка на форму
//     goToBooking();
//   } catch (error) {
//     console.log("Валидация не пройдена:", error);
//   }
// };

// Функция для перехода на страницу бронирования
function goToBooking() {
    router.push('/auto_booking');
}

const disabledDate = (current: Dayjs) => {
  return current && current < dayjs().endOf("day").subtract(1, "day");
};

const disabledDateTo = (current: Dayjs) => {
  return (
    current &&
    current < (formData.dateFrom ?? dayjs().endOf("day").subtract(1, "day"))
  );
};

const refDateTo = ref<HTMLInputElement>();
const onChangeDateFrom = () => {
  formData.dateTo = null;
  refDateTo.value?.focus();
};

const onFinish = (values: any) => {
  const res = {
    ...values,
    dateFrom: values.dateFrom.format("YYYY-MM-DD"),
    dateTo: values.dateTo.format("YYYY-MM-DD"),
  };
  console.log(res);

  trainsStore.findParams = { ...res };
  router.push("/trains");

  emit("sendForm");
};
const onFinishFailed = (errorInfo: any) => {
  console.log(errorInfo);
};
</script>

<template>
    <a-modal v-model:open="open" title="Выберите временные рамки для поиска подходящего рейса">
        <a-form
          class="form"
          layout="inline"
          :model="formData"
          :rules="rules"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-flex class="form__wrap">
            <a-form-item name="dateFrom" class="form__input" :rules="rules.dateFrom">
              <a-date-picker
                v-model:value="formData.dateFrom"
                format="DD.MM.YYYY"
                placeholder="Минимальная дата"
                :disabledDate="disabledDate"
                @change="onChangeDateFrom"
                class="form__date-input"
              />
            </a-form-item>
            <a-form-item name="dateTo" class="form__input" :rules="rules.dateTo">
              <a-date-picker
                ref="refDateTo"
                v-model:value="formData.dateTo"
                format="DD.MM.YYYY"
                placeholder="Обратно"
                :disabledDate="disabledDateTo"
                class="form__date-input"
              />
            </a-form-item>
          </a-flex>
        </a-form>
        <template #footer>
            <AppBtn @click="goToBooking">ДАЛЬШЕ</AppBtn>
        </template>
    </a-modal>
</template>

<style lang="scss" scoped>
.form {
    &__wrap {
        display: flex;
        width: 100%;
        gap: 20px;
    }
    &__input {
        flex: 1;
        margin: 0;
    }
    &__date-input {
        width: 100%;
    }
}

</style>
