<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { Props } from "../model/Props";

const { title, range, isTime } = defineProps<Props>();

const rangeValue = defineModel<[number, number]>("rangeValue");

const marks = ref<Record<number, any>>();
onMounted(() => {
  marks.value = getMarks();
});

const getMarks = () => {
  const res: Record<number, any> = {};

  res[range[0]] = {
    label: isTime ? min2hour(range[0]) : range[0] + " р",
    style: {
      color: "#fff",
      whiteSpace: "nowrap",
      paddingLeft: "25px",
    },
  };
  res[range[1]] = {
    label: isTime ? min2hour(range[1]) : range[1] + " р",
    style: {
      color: "#fff",
      whiteSpace: "nowrap",
      paddingRight: "25px",
    },
  };

  return res;
};

const min2hour = (minutes: number): string => {
  let h: string | number = Math.floor(minutes / 60);
  if (h < 10) h = "0" + h;

  let m: string | number = minutes % 60;
  if (m < 10) m = "0" + m;

  return `${h}:${m}`;
};

const formatter = (value: number) => {
  if (isTime) return min2hour(value);
  return value;
};
</script>

<template>
  <div class="filter">
    <div class="filter__title title">{{ title }}</div>
    <a-slider
      v-model:value="rangeValue"
      range
      :marks="marks"
      :tip-formatter="formatter"
      :min="range[0]"
      :max="range[1]"
    />
  </div>
</template>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;

  &__title {
    text-transform: uppercase;
    font-size: 16px;
  }
}
</style>
