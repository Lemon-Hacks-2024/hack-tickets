<script setup lang="ts">
import { NavigationProfile } from '@/features/NavigationProfile';
import { InfoProfile } from '@/features/InfoProfile';

</script>

<template>
    <div class="profile container">
        <NavigationProfile mail="example@mail.ru" bio="Дмитрий Битков"/>
        <InfoProfile />
    </div>
</template>


<style scoped>

.profile {
    margin-top: 20px; 
    display: flex;
    gap: 20px;
}
</style>