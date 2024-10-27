<script setup lang="ts">
import { NavigationProfile } from '@/features/NavigationProfile';
import { InfoProfile } from '@/features/InfoProfile';
import AppBtn from "@/shared/ui/AppBtn.vue";

</script>

<template>
    <div class="profile container">
        <NavigationProfile mail="example@mail.ru" bio="Дмитрий Битков" />
        <div class="info-profile-section">
            <InfoProfile />
            <AppBtn>Сохранить</AppBtn>
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