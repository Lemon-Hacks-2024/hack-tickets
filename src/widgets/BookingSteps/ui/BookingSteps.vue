<script lang="ts" setup>
import SelectTypeWagon from "@/features/SelectTypeWagon";
import SelectWagonBlock from "@/widgets/SelectWagonBlock";

const step = defineModel<number>("step");
</script>

<template>
  <div class="booking-steps">
    <Transition appear>
      <SelectTypeWagon v-if="step == 0" @next="step++" />
      <SelectWagonBlock v-else-if="step == 1" @next="step++" />
    </Transition>
  </div>
</template>
