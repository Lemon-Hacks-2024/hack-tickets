
<script lang="ts" setup>
import AppBtn from '@/shared/ui/AppBtn.vue';
const open = defineModel<boolean>("open");

</script>

<template>
    <a-modal v-model:open="open" title="У пассажира действительно нет отчества?">
        <p>Если в документе есть отчество, его указание является обязательным требованием законодательства Российской Федерации.</p>
        <p>Пассажир, имеющий отчество, но не указавший его, может быть не допущен в поезд.</p>
        <p>Продолжить оформление без указания отчества?</p>
        <template #footer>
            <AppBtn class="cancel">НЕТ ОТЧЕСТВА</AppBtn>
            <AppBtn>ЕСТЬ ОТЧЕСТВО</AppBtn>
        
      </template>
    </a-modal>
</template>
