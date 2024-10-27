<script setup lang="ts">
import AppHeader from "@/widgets/AppHeader";

import ruRU from "ant-design-vue/es/locale/ru_RU";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { useRouter } from "vue-router";
dayjs.locale("ru");

const route = useRouter();

function goToOrderPage() {
  route.push('/order');
}

const theme = {
  token: {
    colorError: "#be1d1d",
    colorPrimary: "#e7ef59",
    colorPrimaryHover: "#c4cf03",
  },
};
</script>

<template>
  <a-config-provider :theme="theme" :locale="ruRU">
    <a-app>
      <div class="main">
        <AppHeader />
        <button @click="goToOrderPage()">Go to OrderPage</button>
        <router-view v-slot="{ Component, route }">
          <Transition appear>
            <div :key="route.name">
              <component :is="Component" />
            </div>
          </Transition>
        </router-view>
      </div>
    </a-app>
  </a-config-provider>
</template>

<style lang="scss">
@import url("./shared/scss/vars.scss");
@import url("./shared/scss/custom.scss");
@import url("./shared/scss/style.scss");
</style>

<style lang="scss" scoped>
.main {
  background-color: var(--main-light-color);
  min-height: 100vh;
}
</style>
