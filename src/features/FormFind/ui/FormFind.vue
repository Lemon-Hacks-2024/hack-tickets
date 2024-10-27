<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import type { FormModel } from "../model/FormModel";
import { rules } from "../model/rules";
import { cities } from "@/shared/model/cities";
import type { Option } from "../model/Option";
import arrowLeft from "@/shared/icons/arrowLeft.vue";
import AppBtn from "@/shared/ui/AppBtn.vue";
import dayjs, { Dayjs } from "dayjs";
import { useTrainsStore } from "@/store/trainsStore";


const emit = defineEmits(["sendForm"]);

const trainsStore = useTrainsStore();
const router = useRouter();

const formData = reactive<FormModel>({
  cityFrom: "",
  cityTo: "",
  dateFrom: null,
  dateTo: null,
});

const optionsCity: Option[] = cities.map((c) => ({ value: c.name }));

const filterOption = (input: string, option: Option) => {
  return option.value.toUpperCase().indexOf(input.toUpperCase()) >= 0;
};

const refDateTo = ref<HTMLInputElement>();
const disabledDate = (current: Dayjs) => {
  return current && current < dayjs().endOf("day").subtract(1, "day");
};
const disabledDateTo = (current: Dayjs) => {
  return (
    current &&
    current < (formData.dateFrom ?? dayjs().endOf("day").subtract(1, "day"))
  );
};

const onChangeDateFrom = () => {
  formData.dateTo = null;
  refDateTo.value?.focus();
};

const onFinish = (values: any) => {
  const res = {
    ...values,
    dateFrom: values.dateFrom.format("YYYY-MM-DD"),
    dateTo: values.dateTo?.format("YYYY-MM-DD") || null,
  };
  console.log(res);

  trainsStore.findParams = { ...res };
  router.push("/trains");

  emit("sendForm");
};
const onFinishFailed = (errorInfo: any) => {
  console.log(errorInfo);
};

onMounted(() => {
  formData.cityFrom = trainsStore.findParams.cityFrom;
  formData.cityTo = trainsStore.findParams.cityTo;
  if (trainsStore.findParams.dateFrom)
    formData.dateFrom = dayjs(trainsStore.findParams.dateFrom);
  if (trainsStore.findParams.dateTo)
    formData.dateTo = dayjs(trainsStore.findParams.dateTo);
});
</script>

<template>
  <a-form class="form" layout="inline" :model="formData" :rules="rules" @finish="onFinish"
    @finishFailed="onFinishFailed">
    <a-flex class="form__wrap">
      <a-form-item name="cityFrom" class="form__input">
        <a-auto-complete v-model:value="formData.cityFrom" :options="optionsCity" placeholder="Откуда"
          :filter-option="filterOption" />
      </a-form-item>

      <arrowLeft class="arr-left" />

      <a-form-item name="cityTo" class="form__input">
        <a-auto-complete v-model:value="formData.cityTo" :options="optionsCity" placeholder="Куда"
          :filter-option="filterOption" />
      </a-form-item>
    </a-flex>

    <a-flex class="form__wrap">
      <a-form-item name="dateFrom" class="form__input">
        <a-date-picker v-model:value="formData.dateFrom" format="DD.MM.YYYY" placeholder="Туда"
          :disabledDate="disabledDate" @change="onChangeDateFrom" class="form__date-input" />
      </a-form-item>

      <a-form-item name="dateTo" class="form__input">
        <a-date-picker ref="refDateTo" v-model:value="formData.dateTo" format="DD.MM.YYYY" placeholder="Обратно"
          :disabledDate="disabledDateTo" class="form__date-input" />
      </a-form-item>

      <a-form-item class="form__btn">
        <AppBtn>Найти</AppBtn>
      </a-form-item>
    </a-flex>
  </a-form>
</template>

<style lang="scss" scoped>
.form {
  flex-wrap: nowrap;
  gap: 10px 20px;

  &__wrap {
    width: 100%;
    gap: 10px 20px;
  }

  &__input {
    flex: 1;
    margin: 0;
  }

  &__date-input {
    width: 100%;
  }

  @media (max-width: 950px) {
    flex-wrap: wrap;

    &__wrap {
      flex-wrap: wrap;
    }

    &__btn {
      width: 100%;

      .btn {
        width: 100%;
      }
    }
  }
}

.arr-left {
  margin-right: 16px;
  min-width: 30px;
  width: 30px;
  height: 52px;
  margin: 0;
}
</style>
