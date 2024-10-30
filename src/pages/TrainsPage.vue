<script lang="ts" setup>
import { onMounted, ref } from "vue";
import FormFind from "@/features/FormFind/ui/FormFind.vue";
import AppLoader from "@/shared/ui/AppLoader.vue";
import TrainsResult from "@/widgets/TrainsResult/ui/TrainsResult.vue";
import NotFoundModal from "@/features/Modals/NotFoundModal/ui/NotFoundModal.vue";

const isLoad = ref(true);
const isModalVisible = ref(false);

const fetchTrains = () => {
  isLoad.value = true;
  setTimeout(() => {
    isLoad.value = false;
  }, 1000);
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
