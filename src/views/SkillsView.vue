<script setup>
import { ref } from 'vue';
import RequestResume from '../components/RequestResume.vue';
import { useModeContext } from '../context/useModeContext.js';
const { isLightMode } = useModeContext();

const activeTab = ref('languages');

const setActiveTab = tab => {
  activeTab.value = tab
};



</script>

<template>
    <h1 class="text-6xl font-black">Core skills</h1>
    <div class="flex mt-10">
        <div :class="`${isLightMode && 'border-color4'} border-r-4 w-2/5 h-[250px] space-y-7`">
            <div class="text-2xl font-semibold flex items-center justify-between h-10">
                <h3 @click="setActiveTab('languages')" :class="`${activeTab === 'languages' ? 'text-inherit' : 'text-gray-400'} hover:cursor-pointer`">Languages</h3>
                <v-icon 
                v-show="activeTab === 'languages'" 
                name="md-playarrow-round" 
                scale="2.5" 
                :class="`${isLightMode ? 'text-color3' : 'text-color2'} mr-4`"
                />
            </div>
            <div class="text-2xl font-semibold flex items-center justify-between h-10">
                <h3 @click="setActiveTab('frameworks')" :class="`${activeTab === 'frameworks' ? 'text-inherit' : 'text-gray-400'} hover:cursor-pointer`">Frameworks</h3>
                <v-icon 
                v-show="activeTab === 'frameworks'" 
                name="md-playarrow-round" 
                scale="2.5" 
                :class="`${isLightMode ? 'text-color3' : 'text-color2'} mr-4`"
                />
            </div>
            <div class="text-2xl font-semibold flex items-center justify-between h-10">
                <h3 @click="setActiveTab('tools')" :class="`${activeTab === 'tools' ? 'text-inherit' : 'text-gray-400'} hover:cursor-pointer`">Tools</h3>
                <v-icon 
                v-show="activeTab === 'tools'" 
                name="md-playarrow-round" 
                scale="2.5" 
                :class="`${isLightMode ? 'text-color3' : 'text-color2'} mr-4`"
                />
            </div>
            <div class="text-2xl font-semibold flex items-center justify-between h-10">
                <h3 @click="setActiveTab('others')" :class="`${activeTab === 'others' ? 'text-inherit' : 'text-gray-400'} hover:cursor-pointer`">Others</h3>
                <v-icon 
                v-show="activeTab === 'others'" 
                name="md-playarrow-round" 
                scale="2.5" 
                :class="`${isLightMode ? 'text-color3' : 'text-color2'} mr-4`"
                />
            </div>
        </div>
        <div :class="`${isLightMode && 'border-color4'} border-l-4 w-3/5 h-[250px] p-3`">
            <!-- languages -->
            <div v-if="activeTab === 'languages'" class="ml-5">
                <h3 class="text-xl font-semibold uppercase">JavaScript</h3>
                <div class="my-3">
                    <div :class="`${isLightMode ? 'bg-color4' : 'bg-white'} rounded-full h-8 flex items-center px-1 overflow-hidden`">
                        <div class="rounded-full h-4/5 w-3/5 bg-[#F7DF1E] bar"></div>
                    </div>
                </div>
            </div>
            <!-- frameworks -->
            <div v-if="activeTab === 'frameworks'" class="ml-5">
                <h3 class="text-xl font-semibold uppercase">React JS</h3>
                <div class="my-3">
                    <div :class="`${isLightMode ? 'bg-color4' : 'bg-white'} rounded-full h-8 flex items-center px-1 overflow-hidden`">
                        <div class="rounded-full h-4/5 w-3/4 bg-[#61DAFB] bar"></div>
                    </div>
                </div>
                <h3 class="text-xl font-semibold uppercase">Vue JS</h3>
                <div class="my-3">
                    <div :class="`${isLightMode ? 'bg-color4' : 'bg-white'} rounded-full h-8 flex items-center px-1 overflow-hidden`">
                        <div class="rounded-full h-4/5 w-2/4 bg-[#42B883] bar"></div>
                    </div>
                </div>
            </div>
            <!-- tools -->
            <div v-if="activeTab === 'tools'" class="ml-5">
                <h3 class="text-xl font-semibold uppercase">Git</h3>
                <div class="my-3">
                    <div :class="`${isLightMode ? 'bg-color4' : 'bg-white'} rounded-full h-8 flex items-center px-1 overflow-hidden`">
                        <div class="rounded-full h-4/5 w-3/4 bg-[#F05033] bar"></div>
                    </div>
                </div>
                <h3 class="text-xl font-semibold uppercase">NPM</h3>
                <div class="my-3">
                    <div :class="`${isLightMode ? 'bg-color4' : 'bg-white'} rounded-full h-8 flex items-center px-1 overflow-hidden`">
                        <div class="rounded-full h-4/5 w-2/4 bg-[#CB3837] bar"></div>
                    </div>
                </div>
            </div>
            <!-- others -->
            <div v-if="activeTab === 'others'" class="ml-5">
                <h3 class="text-xl font-semibold uppercase">html5</h3>
                <div class="my-3">
                    <div :class="`${isLightMode ? 'bg-color4' : 'bg-white'} rounded-full h-8 flex items-center px-1 overflow-hidden`">
                        <div class="rounded-full h-4/5 w-full bg-[#E34F26] bar"></div>
                    </div>
                </div>
                <h3 class="text-xl font-semibold uppercase mt-4">css</h3>
                <div class="ml-5 overflow-y-scroll h-[125px] mt-1">
                    <h5 class="font-light text-sm">Vanilla CSS</h5>
                    <div :class="`${isLightMode ? 'bg-color4' : 'bg-white'} my-3 rounded-full h-5 w-4/5 flex items-center px-1 overflow-hidden`">
                        <div class="rounded-full h-4/5 w-11/12 bg-color2 bar`"></div>
                    </div>
                    <h5 class="font-light text-sm">TailwindCss</h5>
                    <div :class="`${isLightMode ? 'bg-color4' : 'bg-white'} my-3 rounded-full h-5 w-4/5 flex items-center px-1 overflow-hidden`">
                        <div class="rounded-full h-4/5 w-10/12 bg-color2 bar"></div>
                    </div>
                    <h5 class="font-light text-sm">Responsive Design</h5>
                    <div :class="`${isLightMode ? 'bg-color4' : 'bg-white'} my-3 rounded-full h-5 w-4/5 flex items-center px-1 overflow-hidden`">
                        <div class="rounded-full h-4/5 w-full bg-color2 bar"></div>
                    </div>
                    <h5 class="font-light text-sm">Cross Browser Compatibility</h5>
                    <div :class="`${isLightMode ? 'bg-color4' : 'bg-white'} my-3 rounded-full h-5 w-4/5 flex items-center px-1 overflow-hidden`">
                        <div class="rounded-full h-4/5 w-full bg-color2 bar"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <request-resume/>
</template>