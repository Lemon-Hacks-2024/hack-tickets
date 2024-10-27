
<script lang="ts" setup>
import AppBtn from '@/shared/ui/AppBtn.vue';
const open = defineModel<boolean>("open");

</script>

<template>
    <a-modal v-model:open="open" title="Вы успешно встали в очередь!">
        <p>Когда найдется место, Вам придет оповещение на почту. Также Вы можете отслеживать статус заявки в списке забронированных мест.</p>
        <template #footer>
            <AppBtn class="cancel">НА ГЛАВНУЮ</AppBtn>
            <AppBtn>К СПИСКУ БРОНЕЙ</AppBtn>
        
      </template>
    </a-modal>
</template>
