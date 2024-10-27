<script setup lang="ts">
import { NavigationProfile } from "@/features/NavigationProfile";
import { InfoProfile } from "@/features/InfoProfile";
import AppBtn from "@/shared/ui/AppBtn.vue";

import { useUserStore } from "@/store/userStore";

const { userData } = useUserStore();
</script>

<template>
  <div class="profile container">
    <NavigationProfile
      :mail="userData.email"
      :bio="`${userData.first_name} ${userData.last_name}`"
    />
    <div class="info-profile-section">
      <InfoProfile />
      <!-- <AppBtn>Сохранить</AppBtn> -->
    </div>
  </div>
</template>

<style scoped>
.profile {
  margin-top: 20px;
  display: flex;
  gap: 20px;
}

.info-profile-section {
  text-align: right;
  justify-content: flex-end;
}

.info-profile-section button {
  width: 200px;
  height: 45px;
  margin-top: 20px;
}
</style>
