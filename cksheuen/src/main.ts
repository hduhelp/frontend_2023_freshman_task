import { createApp } from 'vue';
import { createPinia } from 'pinia';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue';
import router from './router';


const APP = createApp(App);

const pinia = createPinia();

APP.use(router);
APP.use(ElementPlus);
APP.use(pinia);

APP.mount('#app');