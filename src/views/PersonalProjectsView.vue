<script setup>
import { ref } from 'vue';
import { useModeContext } from '../context/useModeContext.js';
const { isLightMode } = useModeContext();


const items = ref([
    {
        id: 1, 
        title: 'Fashion Essentials',
        content: 'A frontend ecommerce store that performs the basic CRUD functionality with API from fakestoreapi.',
        href: 'https://github.com/estherchinda/Fashion_Essentials',
        src: 'https://res.cloudinary.com/dygn4o3nv/image/upload/c_fill,w_1500,h_550/v1740240616/Screenshot_32_eutlgt.png',
    },
    {
        id: 2, 
        title: 'Love Match',
        content: 'An app built just for fun. It is designed to calculate the percentage of compatibility between two individuals.',
        href: 'https://github.com/estherchinda/Love-Match',
        src: 'https://res.cloudinary.com/dygn4o3nv/image/upload/c_crop,w_1500,h_550/v1735307727/Screenshot_96_mogawp.png',
    },
    {
        id: 3, 
        title: 'Tombo Festival',
        content: 'A dynamic and user-friendly website, enabling vistors to seamlessly purchase tickets or register as vendors.',
        href: 'https://github.com/estherchinda/tombo-festival',
        src: 'https://res.cloudinary.com/dygn4o3nv/image/upload/c_crop,w_1500,h_550/v1735307701/Screenshot_95_ix5dyf.png',
    },
    {
        id: 4, 
        title: 'Calculator', 
        content: 'A JavaScript calculator application developed for the purpose of performing basic math operations.',
        href: 'https://github.com/estherchinda/Calculator.github.io',
        src: 'https://res.cloudinary.com/dygn4o3nv/image/upload/c_crop,w_1500,h_550/v1735307753/Screenshot_97_xumrys.png',
    },
]);

const currentIndex = ref(0);

const prev = () => {
    currentIndex.value =  (currentIndex.value - 1 + 3) % 3
};

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % 3
}

</script>

<template>
    <h1 class="text-6xl font-black">Personal projects</h1>
    <div class="my-7">
        <div :class="`${isLightMode ? 'border-color4' : 'border-white'} border-8 rounded-3xl h-[310px] w-[550px] relative mx-auto`">
            <div class="overflow-hidden mx-7">
                <div
                class="flex gap-x-6 transition-transform duration-500 my-6"
                :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
                >
                    <div v-for="(item, index) in items" :key="index">
                        <div :class="`${isLightMode ? 'bg-color2 border-color4' : 'bg-color3 border-white'} h-[250px] w-[280px] rounded-3xl border-4 flex flex-col items-center p-3.5`">
                            <div :class="`${isLightMode ? 'border-color4' : border-white} border-b-2 w-full text-center`">
                                <h3 class="font-light">{{ item.title }}</h3>
                            </div>
                            <p class="text-xs py-4">{{ item.content }}</p>
                            <div>
                                <a :href="item.href" target="_blank">
                                    <img :src="item.src" alt="Image" class="w-full object-cover rounded-xl opacity-80">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button
            @click="prev"
            :class="`${isLightMode ? 'bg-color4 text-white' : 'bg-white text-color4'} absolute top-[65%] -left-6 transform -translate-y-1/2 rounded-full h-10 w-10 flex justify-center items-center active:scale-105 group`"
            >
                <v-icon name="io-caret-back" scale="2" :class="isLightMode ? 'group-hover:text-color2' : 'group-hover:text-color3'"/>
            </button>
            <button
            @click="next"
            :class="`${isLightMode ? 'bg-color4 text-white' : 'bg-white text-color4'} absolute top-[65%] -right-6 transform -translate-y-1/2 rounded-full h-10 w-10 flex justify-center items-center active:scale-105 group`"
            >
                <v-icon name="io-caret-forward" scale="2" :class="isLightMode ? 'group-hover:text-color2' : 'group-hover:text-color3'"/>
            </button>
        </div>
    </div>
</template>