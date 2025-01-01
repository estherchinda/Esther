<script setup>
import { RouterView } from 'vue-router';
import '@fontsource/nunito';

import Nav from './components/Nav.vue';
import ModeProvider from './context/ModeProvider.vue'

</script>

<template>
  <ModeProvider>
    <div class="font-nunito">
      <Nav>
        <div class="w-full ml-20 my-5">
          <RouterView/>
        </div>
      </Nav>
    </div>
  </ModeProvider>
</template>