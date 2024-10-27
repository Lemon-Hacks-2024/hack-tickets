<script lang="ts" setup>
import { onMounted, ref } from "vue";
import FormFind from "@/features/FormFind/ui/FormFind.vue";
import AppLoader from "@/shared/ui/AppLoader.vue";
import TrainsResult from "@/widgets/TrainsResult/ui/TrainsResult.vue";
import { getTrains } from "@/api/getTrains";
import { useTrainsStore } from "@/store/trainsStore";
import dayjs from "dayjs";
import NotFoundModal from "@/features/Modals/NotFoundModal/ui/NotFoundModal.vue";


const { findParams } = useTrainsStore();
const isLoad = ref(true);
const isModalVisible = ref(false);


const fetchTrains = () => {
  isLoad.value = true;
  getTrains(
    findParams.cityFrom,
    findParams.cityTo,
    dayjs(findParams.dateFrom).format('DD.MM.YYYY'),
    dayjs(findParams.dateFrom).format('DD.MM.YYYY')
  ).then(res => {
    console.log(res);
  }).catch(() => {
    console.log('err');
    isModalVisible.value = true;
  }).finally(() => {
    isLoad.value = false;
  })
};

onMounted(() => {
  fetchTrains();
});
</script>

<template>
  <div class="trains">
    <div class="container">
      <div class="trains__form">
        <FormFind @send-form="fetchTrains" />
      </div>

      <Transition>
        <AppLoader v-if="isLoad" />
        <TrainsResult v-else />
      </Transition>
    </div>
    <NotFoundModal v-model:open="isModalVisible" />
  </div>
</template>

<style lang="scss" scoped>
.trains {
  &__form {
    margin: 35px 0;
  }
}
</style>
