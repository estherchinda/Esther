<script setup>
import { ref, provide } from 'vue';

// Create reactive state
const isLightMode = ref(false);

// Function to handle popup close
const toggleMode = () => {
    isLightMode.value = !isLightMode.value;
};

// Provide the state and functions to children
provide('modeContext', {
  isLightMode,
  toggleMode,
});

</script>

<template>
  <div>
    <slot/>
  </div>
</template>
