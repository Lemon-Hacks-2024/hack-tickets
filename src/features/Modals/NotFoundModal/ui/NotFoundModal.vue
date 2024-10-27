<script lang="ts" setup>
import AppBtn from '@/shared/ui/AppBtn.vue';
import { ref } from 'vue';
import TimeRangePickerModal from '../../TimeRangePickerModal/ui/TimeRangePickerModal.vue';

const open = defineModel<boolean>("open");
const secondModalOpen = ref(false); 

// Функция для открытия второго окна
function openSecondModal() {
    open.value = false; 
    secondModalOpen.value = true; 
}
</script>

<template>
    <!-- Первое модальное окно -->
    <a-modal v-model:open="open" title="Не найдено рейсов">
        <p>К сожалению, доступных рейсов по Вашему маршруту не найдено. Хотите ли воспользоваться автоматическим бронированием? Когда сервис найдет подходящее место, Вам придет письмо на почту.</p>
        <template #footer>
            <AppBtn class="cancel" @click="open = false">НЕ ХОЧУ</AppBtn>
            <AppBtn @click="openSecondModal">ХОЧУ</AppBtn>
        </template>
    </a-modal>

    <!-- Второе модальное окно -->
    <TimeRangePickerModal v-model:open="secondModalOpen" />
</template>
