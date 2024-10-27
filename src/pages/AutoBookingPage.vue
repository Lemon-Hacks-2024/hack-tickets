<script lang="ts" setup>
import dayjs from "dayjs";
import "dayjs/locale/ru";
dayjs.locale("ru");
import { reactive } from 'vue';

interface FormState {
    coupe: boolean;
    platzcart: boolean;
    upper: boolean;
    down: boolean;
}

const formState = reactive<FormState>({
    coupe: false,
    platzcart: false,
    upper: false,
    down: false,
});
</script>


<template>
    <div class="main">
        <div class="main-information-title">
            <h2>Ваши предпочтения</h2>
        </div>
        <div class="custom-divider"></div>
        <div class="body">
            <a-flex horizontal justify="space-evenly">
                <div>
                    <a-flex vertical>
                        <h3>Класс обслуживания</h3>
                        <a-form-item name="remember">
                            <a-checkbox v-model:checked="formState.coupe">Купе</a-checkbox>
                        </a-form-item>
                        <a-form-item name="remember">
                            <a-checkbox v-model:checked="formState.platzcart">Плацкарт</a-checkbox>
                        </a-form-item>
                    </a-flex>
                </div>
                <div>
                    <a-flex vertical>
                        <h3>Место</h3>
                        <a-form-item name="remember">
                            <a-checkbox v-model:checked="formState.upper">Верхнее</a-checkbox>
                        </a-form-item>
                        <a-form-item name="remember">
                            <a-checkbox v-model:checked="formState.down">Нижнее</a-checkbox>
                        </a-form-item>
                    </a-flex>
                </div>
            </a-flex>
        </div>
    </div>
</template>

<style scoped>
.main {
    margin-top: 50px;
}

.main-information-title {
    width: 76%;
    padding: 20px;
    align-items: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    justify-content: space-between;
    background-color: var(--light-dark-color);
    margin: 0 auto;
    display: flex;
}

.main-information-title h2 {
    color: #FFFFFF;
    display: flex;
}

.custom-divider {
    width: 76%;
    height: 2px;
    margin: 0 auto;
    background-color: var(--gray-color);
    display: flex;
}

.body {
    width: 76%;
    padding: 20px;
    margin-left: 12%;
    align-items: start;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: var(--light-dark-color);
    margin-bottom: 50px;
}

.body h3 {
    color: #FFFFFF;
}


.bottom {
    width: 76%;
    padding: 20px;
    margin-left: 12%;
    align-items: start;
    justify-content: space-between;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: var(--light-dark-color);
    /* margin: 0 auto; */
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
}

.ant-checkbox .ant-checkbox-inner {
    border-color: var(--gray-color);
    background-color: var(--light-dark-color);
}

.ant-checkbox-wrapper {
    color: #fff;
}
</style>