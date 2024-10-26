<script setup lang="ts">

</script>

<template>
    <div class="info_prof">
        <p>Основная информация</p>
        <a-divider class="divider"/>
        <a-flex wrap="wrap" gap="small">
           
        </a-flex>
    </div>
</template>

<style scoped lang="scss">
    .info_prof {
        display: flex;
        flex-direction: column;
        background-color: var(--dark-color-2);
        border-radius: 20px;
        width: 70vw;
        max-height: 400px;
        
        p {
            font-family: "Jura";
            font-weight: 600;
            color: white;
            font-size: 30px;
            margin: 20px;
        }

    }

    .divider {
        background-color: var(--light-gray-color);
        margin-top: 0;
    }
</style>