import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { 
    BiSun,
    BiMoon,
    BiHouseDoorFill,
    MdEmailOutlined,
    BiLinkedin,
    BiGithub,
    MdPlayarrowRound,
    BiFiletypePdf,
    FaRegularBuilding,
    IoCaretBack,
    IoCaretForward,
} from "oh-vue-icons/icons";

addIcons(
    BiSun, 
    BiMoon,
    BiHouseDoorFill,
    MdEmailOutlined,
    BiLinkedin,
    BiGithub,
    MdPlayarrowRound,
    BiFiletypePdf,
    FaRegularBuilding,
    IoCaretBack,
    IoCaretForward,
);

const app = createApp(App);

app.use(router)

app.component("v-icon", OhVueIcon);

app.mount('#app')
