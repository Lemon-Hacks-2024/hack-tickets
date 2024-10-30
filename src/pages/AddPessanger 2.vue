<script lang="ts" setup>
import trash from "@/shared/icons/trashIcon.vue";
import man from "@/shared/icons/manIcon.vue";
import woman from "@/shared/icons/womanIcon.vue"
import AppBtn from "@/shared/ui/AppBtn.vue";
import { reactive } from "vue";
import type { UnwrapRef } from 'vue';
import { Dayjs } from 'dayjs';

const onChange = (date: Dayjs) => {
    if (date) {
        console.log('Date: ', date);
    } else {
        console.log('Clear');
    }
};


interface FormState {
    layout: 'horizontal' | 'vertical' | 'inline';
    firstName: string,
    lastName: string,
    middleName: string,
    documents: string,
    mail: string,
    middleNameRemember: boolean;
    useMailRemember: boolean;
}
const formState: UnwrapRef<FormState> = reactive({
    layout: 'vertical',
    firstName: '',
    lastName: '',
    middleName: '',
    documents: '',
    mail: '',
    middleNameRemember: false,
    useMailRemember: false,
});

</script>


<template>
    <div class="sub-header">
        <h2>Данные пользователя</h2>
    </div>
    <div class="main-information-title">
        <h2>Основная информация</h2>
        <AppBtn class="text">
            <trash />
        </AppBtn>
    </div>
    <div class="custom-divider"></div>
    <div class="main-information">
        <a-flex gap="middle" horizontal>
            <div class="second-name">
                <a-flex vertical>
                    <a-form-item>
                        <a-input v-model:value="formState.lastName" placeholder="Фамилия *" />
                    </a-form-item>
                    <div>
                        <a-flex vertical>
                            <div class="pessanger-label">
                                <h5>Пассажир*</h5>
                            </div>
                            <div class="gender-toggle">
                                <input type="radio" id="male" name="gender" value="male" checked>
                                <label for="male">
                                    <span class="icon">
                                        <man />
                                    </span> Мужской
                                </label>
                                <input type="radio" id="female" name="gender" value="female">
                                <label for="female">
                                    <span class="icon">
                                        <woman />
                                    </span> Женский
                                </label>
                            </div>
                        </a-flex>
                    </div>

                </a-flex>
            </div>
            <div>
                <a-flex vertical>
                    <a-form-item>
                        <a-input v-model:value="formState.firstName" placeholder="Имя *" />
                    </a-form-item>
                    <a-space>
                        <a-date-picker @change="onChange" />
                    </a-space>
                </a-flex>
            </div>
            <div>
                <a-flex vertical>
                    <div class="patronymic">
                        <a-form-item>
                            <a-input v-model:value="formState.middleName" placeholder="Отчество *" />
                        </a-form-item>
                    </div>
                    <a-form-item name="remember">
                        <a-checkbox v-model:checked="formState.middleNameRemember">Нет отчества</a-checkbox>
                    </a-form-item>
                </a-flex>
            </div>
        </a-flex>
    </div>
    <div class="main-information-title">
        <h2>Паспорт РФ</h2>
        <AppBtn class="text">
            <trash />
        </AppBtn>
    </div>
    <div class="custom-divider"></div>
    <div class="main-information">
        <div>
            <a-form-item>
                <a-input v-model:value="formState.documents" placeholder="Номер документа *" />
            </a-form-item>
        </div>
    </div>
    <div class="main-information-title">
        <h2>Почта</h2>
        <AppBtn class="text">
            <trash />
        </AppBtn>
    </div>
    <div class="custom-divider"></div>
    <div class="main-information">
        <div>
            <a-flex vertical>
                <a-form-item name="remember">
                    <a-checkbox v-model:checked="formState.useMailRemember">Использовать мою почту
                        example@mail.ru</a-checkbox>
                </a-form-item>
                <a-form-item>
                    <a-input v-model:value="formState.mail" placeholder="Электронная почта *" />
                </a-form-item>
            </a-flex>

        </div>
    </div>
</template>


<style scoped>
.sub-header {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 10px;
    margin-bottom: 50px;
    background-color: var(--light-dark-color);
    text-align: center;

}

.sub-header h2 {
    color: #FFFFFF;
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

.main-information-title svg {
    width: 30px;
    height: 30px;
    fill: transparent;
    stroke: #FFFFFF;

}

.custom-divider {
    width: 76%;
    height: 2px;
    margin: 0 auto;
    background-color: var(--gray-color);
    display: flex;
}

.main-information {
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

.ant-input {
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 33px;
    padding-right: 33px;
    stroke: var(--gray-color);
    background-color: var(--light-dark-color);
}

.ant-input::placeholder {
    color: var(--gray-color);
}

.ant-form-item {
    padding-bottom: 0px;
}

.patronymic .ant-form-item {
    margin-bottom: 0px;
}

.second-name .ant-form-item {
    margin-bottom: 6px;
}

.pessanger-label h5 {
    color: var(--gray-color);
    margin-bottom: 0px;
}

.ant-checkbox-wrapper {
    color: #FFFFFF;
}

.ant-picker-input {
    width: 169px;
    height: 36px;
    background-color: var(--light-dark-color);
}

.ant-picker-input::placeholder {
    color: #FFFFFF
}

.gender-toggle {
    display: flex;
    border-radius: 8px;
    overflow: hidden;
    font-family: Arial, sans-serif;
}

.gender-toggle input[type="radio"] {
    display: none;
}

.gender-toggle label {
    flex: 1;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

.gender-toggle label:first-of-type {
    background-color: var(--main-color);
    color: black;
}

.gender-toggle label:last-of-type {
    background-color: var(--gray-color);
    color: white;
}

.gender-toggle input[type="radio"]:checked+label {
    background-color: var(--main-color);
    color: black;
}

.gender-toggle input[type="radio"]:not(:checked)+label {
    background-color: var(--gray-color);
    color: white;
}

.gender-toggle .icon svg {
    width: 20px;
    height: 20px;
}
</style>