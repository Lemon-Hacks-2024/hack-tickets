<script setup lang="ts">
import exit from "@/shared/icons/exit.vue";
import {
  UserOutlined,
  ShoppingCartOutlined,
  IdcardOutlined,
} from "@ant-design/icons-vue";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";

const userStore = useUserStore();
const router = useRouter();

const navItems = ["Профиль", "Заявки на бронь места", "Пассажиры"];
const selectedItem = defineModel<number>({ default: 0 });
const activeColor = "#e7ef59";

const selectItem = (index: number) => {
  selectedItem.value = index;
};

const logout = () => {
  userStore.logout();
  router.push("/login");
  message.success("Вы успешно вышли");
};
</script>

<template>
  <div class="nav-container">
    <div
      v-for="(item, index) in navItems"
      :key="index"
      class="nav-item"
      :class="{ active: selectedItem === index }"
      @click="selectItem(index)"
    >
      <span
        class="indicator"
        :style="{
          backgroundColor: selectedItem === index ? activeColor : 'transparent',
        }"
      ></span>
      <UserOutlined v-if="index === 0" />
      <ShoppingCartOutlined v-if="index === 1" />
      <IdcardOutlined v-if="index === 2" />
      <div>{{ item }}</div>
    </div>

    <div class="nav-item" @click="logout">
      <span class="indicator"></span>
      <exit width="20px" />
      Выход
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.nav-item.active {
  color: var(--main-color);
}

.indicator {
  width: 4px;
  height: 100%;
  margin-right: 8px;
  transition: background-color 0.1s cubic-bezier(0.28, 0.65, 1, 1),
    transform 0.1s ease;
}

.nav-item.active .indicator {
  transform: scaleX(1); /* Слайд-анимация полоски */
}
</style>
