<script setup lang="ts">
import user_circle from "@/shared/img/user-circle.svg";
import { MenuItem } from "@/entities/MenuItem";
import { ref } from "vue";
interface Props {
  mail: string;
  bio: string;
}

defineProps<Props>();

const selectedItem = ref(0);
</script>

<template>
  <div class="flex-center navigation">
    <div class="flex-center">
      <img :src="user_circle" alt="" />
      <div class="">
        <p class="name">{{ bio }}</p>
        <p class="email">{{ mail }}</p>
      </div>
    </div>
    <a-divider class="divider" />
    <MenuItem v-model="selectedItem" />
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  background-color: var(--dark-color-2);
  border-radius: 20px;
  width: 30vw;
  // height: calc(100vh - 120px);
  max-height: 600px;
  min-height: 510px;
  padding-top: 60px;
}
.name {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
  color: #fff;
}
.email {
  font-size: 18px;
  color: #fff;
  margin-bottom: 5px;
  text-align: center;
}

.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.divider {
  background-color: var(--light-gray-color);
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
