<script setup>
import { RouterLink, useRoute }from 'vue-router';

const route = useRoute();

import { useModeContext } from '../context/useModeContext.js';

const { isLightMode, toggleMode } = useModeContext();

</script>

<template>
    <div :class="isLightMode ? 'bg-color1 text-color4' : 'bg-color4 text-color1'">
        <nav class="flex justify-end items-center">
            <div :class="`${isLightMode ? 'text-color4 border-color4' : 'text-color1 border-color1'} flex text-4xl mx-5 my-2.5 space-x-4 border-b pb-2 relative`">
                <button @click="toggleMode" v-if="isLightMode">
                    <v-icon name="bi-sun" scale="2.1"/>
                </button>
                <button @click="toggleMode" v-else>
                    <v-icon name="bi-moon" scale="2.1"/>
                </button>
                <RouterLink :to="{ name: 'overview' }">
                    <v-icon name="bi-house-door-fill" scale="2.1"/>
                </RouterLink>
                <div :className="`${route.path === '/' ? 'block' : 'hidden'} ${isLightMode ? 'bg-color4' : 'bg-color1 '} h-[3px] w-10 absolute -bottom-0.5 right-0`"></div>
            </div>
        </nav>
        <div class="flex mx-20">
            <slot/>
            <div class="w-full flex justify-center items-center text-color4">
                <div :class="`${isLightMode ? 'border-color4' : 'border-color1'} border-8 h-[471px] w-[471px] rounded-full relative flex justify-center items-center`">
                    <div :class="`${isLightMode ? 'border-color2' : 'border-white'} border-8 rounded-full h-[360px] w-[360px]`">
                        <img v-if="route.path === '/'" src="https://res.cloudinary.com/dygn4o3nv/image/upload/v1735082137/IMG_1268_oxffwa.jpg" alt="" class="h-full w-full object-cover rounded-full">

                        <img v-if="route.path === '/skills'" src="https://res.cloudinary.com/dygn4o3nv/image/upload/v1735310770/IMG_E0376_maqtun.jpg" alt="" class="h-full w-full object-cover rounded-full">

                        <img v-if="route.path === '/experience'" src="https://res.cloudinary.com/dygn4o3nv/image/upload/c_crop,h_1000/v1735310745/IMG_E0374_hsrp1k.jpg" alt="" class="h-full w-full object-cover rounded-full">

                        <img v-if="route.path === '/personal-projects'" src="https://res.cloudinary.com/dygn4o3nv/image/upload/v1735311159/IMG_E0377_nacupz.jpg" alt="" class="h-full w-full object-cover rounded-full">
                    </div>


                    <div :className="`${isLightMode && 'border-color4'} h-14 w-14 rounded-full bg-color2 absolute top-0 right-20 border-2`"></div>

                    <RouterLink :to="{name: 'personalProjects'}">
                        <div :className="`${isLightMode && 'border-color4'} h-20 w-20 rounded-full bg-color2 absolute -bottom-10 right-48 border-2 flex justify-center items-center uppercase text-xs`">
                            projects
                        </div>
                    </RouterLink>

                    <RouterLink :to="{name: 'experience'}">
                        <div :className="`${isLightMode && 'border-color4'} h-20 w-20 rounded-full bg-color2 absolute bottom-32 -right-10 border-2 flex justify-center items-center uppercase text-xs`">
                            xp
                        </div>
                    </RouterLink>

                    <RouterLink :to="{name: 'skills'}">
                        <div :className="`${isLightMode && 'border-color4'} h-20 w-20 rounded-full bg-color2 absolute top-3 left-10 border-2 flex justify-center items-center uppercase text-xs`">
                            skills
                        </div>
                    </RouterLink>

                    <div :className="`${isLightMode && 'border-color4'} h-14 w-14 rounded-full bg-color2 absolute bottom-40 -left-7 border-2`"></div>

                </div>
            </div>
        </div>
        <footer :className="`${isLightMode ? 'bg-color1 text-color4' : 'bg-color4 text-color1'} flex justify-center items-center py-[22px]`">
            <p>Copyright Esther Chinda. &copy; All Rights Reserved 2024.</p>
        </footer>
    </div>
</template>