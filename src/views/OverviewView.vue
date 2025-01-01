<script setup>
import { ref } from 'vue';
import jellySound from '../assets/cute-bounce-jump.wav';

import { useModeContext } from '../context/useModeContext.js';

const { isLightMode } = useModeContext();


const links = ref([
    { id: 1, href: 'mailto:davidakachi9@gmail.com', name: 'md-email-outlined', content: 'Say Hi!', },
    { id: 2, href: 'https://www.linkedin.com/in/esther-chinda-4a6136238/', name: 'bi-linkedin', content: 'Let\'s Connect!', },
    { id: 3, href: 'https://www.github.com/estherchinda', name: 'bi-github', content: 'Visit my Repo', },
]);

const audioPlayer = ref(null);

const audioSrc = ref('');

const playAudio = (soundType) => {
    if (soundType === 'clickSound') {
    audioSrc.value = '../assets/cute-bounce-jump.wav';
    audioPlayer.value?.play();
    }
};

</script>

<template>
    <div class="space-y-10">
        <h1 class="text-6xl font-black">Hi there!</h1>
        <div class="space-y-4 text-sm">
            <p>My name is Esther Chinda, and I am a Fullstack Web Developer based in Port Harcourt, Nigeria.</p>
            <p>I generally love the idea and process of building projects, and have been fascinated with programming since I was a tween. I have contributed to various real-world software projects, and I hope to become a Fullstack Game Developer some day.</p>
            <p>In my free time, I love solving a good puzzle, or settling down to watch true crime documentaries on Tiktok or on TV.</p>
        </div>

        <div class="grid grid-cols-3 pt-8 gap-x-3.5">
            <a 
            v-for="(link, index) in links"
            :key="index"
            :href="link.href"
            target="_blank"
            :class="`${isLightMode && 'border border-color4'} bg-color2 text-color4 w-42 flex justify-center items-center gap-x-1.5 py-4 px-2 rounded-lg btn`"
            >
                <v-icon :name="link.name" scale="1.5"/>
                <p>{{ link.content }}</p>
            </a>
        </div>
    </div>
</template>