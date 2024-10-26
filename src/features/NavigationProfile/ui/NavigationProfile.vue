<script setup lang="ts">
import user_circle from '@/shared/img/user-circle.svg'

interface Props {
    mail: string
}

defineProps<Props>()
</script>

<template>
    <div class=" flex-center navigation">
        <div class="flex-center ">
            <img :src="user_circle" alt="">
            <p class="email">{{ mail }}</p>
        </div>
        <a-divider/>
    </div>
</template>

<style lang="scss" scoped>
    .navigation {
        background-color: var(--dark-color-2);
        border-radius: 20px;
        width: 30vw;
        height: calc(100vh - 120px);
        padding-top: 60px;

    }
    .email {
            font-size: 20px;
            color: #fff;
        }

    .flex-center {
        display: flex;
        flex-direction: column; 
        align-items: center;
        gap: 10px
    }
</style>