<script setup>
import { useModeContext } from '../context/useModeContext.js';

const { isLightMode } = useModeContext();

</script>

<template>
    <div class="flex justify-end mt-3.5">
        <a 
        href="/Esther/esther-chinda-resume.pdf" 
        download
        target="_blank"
        :class="`${isLightMode ? 'border border-color4' : 'border-none'} bg-color2 text-color4 w-42 flex justify-center items-center gap-x-1.5 py-4 px-2 rounded-lg btn`"
        >
            <v-icon name="bi-filetype-pdf" scale="1.5"/>
            <p>Request Resume</p>
        </a>
    </div>
</template>