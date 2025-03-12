<script setup>
import { RouterView } from 'vue-router';
import '@fontsource/nunito';

import BaseLayout from './components/BaseLayout.vue';
import ModeProvider from './context/ModeProvider.vue'

</script>

<template>
  <ModeProvider>
    <div class="font-nunito">
      <BaseLayout>
        <div class="w-full ml-20 my-5">
          <RouterView/>
        </div>
      </BaseLayout>
    </div>
  </ModeProvider>
</template>