<script setup>
import { ref } from 'vue';
import RequestResume from '../components/RequestResume.vue';
import { useModeContext } from '../context/useModeContext.js';
const { isLightMode } = useModeContext();


const activeTab = ref('bernode');

const setActiveTab = tab => {
  activeTab.value = tab
};

</script>

<template>
    <h1 class="text-6xl font-black">Experience</h1>
    <div class="flex mt-10">
        <div :class="`${isLightMode && 'border-color4'} border-r-4 w-2/5 h-[250px] space-y-7`">
            <div class="text-2xl font-semibold flex items-center justify-between h-10">
                <h3 @click="setActiveTab('bernode')" :class="`${activeTab === 'bernode' ? 'text-inherit' : 'text-gray-400'} hover:cursor-pointer`">Bernode Hub</h3>
                <v-icon 
                v-show="activeTab === 'bernode'" 
                name="md-playarrow-round" 
                scale="2.5" 
                :class="`${isLightMode ? 'text-color3' : 'text-color2'} mr-4`"
                />
            </div>
            <div class="text-2xl font-semibold flex items-center justify-between h-10">
                <h3 @click="setActiveTab('maina')" :class="`${activeTab === 'maina' ? 'text-inherit' : 'text-gray-400'} hover:cursor-pointer`">Maina and Kids</h3>
                <v-icon 
                v-show="activeTab === 'maina'" 
                name="md-playarrow-round" 
                scale="2.5" 
                :class="`${isLightMode ? 'text-color3' : 'text-color2'}`"
                />
            </div>
        </div>
        <div :class="`${isLightMode && 'border-color4'} border-l-4 w-3/5 h-[250px] px-3`">
            <!-- bernode hub -->
            <div v-if="activeTab === 'bernode'" class="ml-5 slide-in-right">
                <h3 class="text-lg font-semibold">Frontend Web Development Intern</h3>
                <div :class="`${isLightMode ? 'text-color3' : 'text-color2'} my-3 text-sm`">
                    <v-icon name="fa-regular-building" scale="1"/>
                    <span>Bernode Hub</span>
                </div>
                <ul class="ml-8 text-[13px] list-disc">
                    <li>Contributed as a team member for Frontend designs.</li>
                    <li>Created and programmed fresh concepts and features for one of the company's projects.</li>
                    <li>Contributed as a Frontend dev for new projects in the company.</li>
                    <li>Create beautiful and interactive UI/UX for users on company website.</li>
                </ul>
            </div>
            <!-- maina and kids -->
            <div v-if="activeTab === 'maina'" class="ml-5 slide-in-right">
                <h3 class="text-lg font-semibold">Volunteer Frontend Developer</h3>
                <div :class="`${isLightMode ? 'text-color3' : 'text-color2'} my-3 text-sm`">
                    <v-icon name="fa-regular-building" scale="1"/>
                    <span>Maina and Kids Children Foundation</span>
                </div>
                
                <ul class="ml-8 text-[13px] list-disc">
                    <li>Contributed as a team leader and project manager</li>
                    <li>Created a website to showcase the achievements, objectives and portfolio of the company.</li>
                    <li>Innovated key new features and designs for the foundation.</li>
                    <li>Responsiveness across all screens for the company site.</li>
                </ul>
            </div>
        </div>
    </div>
    <request-resume/>
</template>