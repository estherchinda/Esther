import { createRouter, createWebHistory } from "vue-router";

import OverviewView from '../views/OverviewView.vue';
import SkillsView from '../views/SkillsView.vue';
import ExperienceView from '../views/ExperienceView.vue';
import PersonalProjectsView from '../views/PersonalProjectsView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'overview',
            component: OverviewView,
        },
        {
            path: '/skills',
            name: 'skills',
            component: SkillsView,
        },
        {
            path: '/experience',
            name: 'experience',
            component: ExperienceView,
        },
        {
            path: '/personal-projects',
            name: 'personalProjects',
            component: PersonalProjectsView,
        },
    ],
})

export default router