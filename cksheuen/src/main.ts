import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const APP = createApp(App);

const pinia = createPinia();

APP.use(router);
APP.use(pinia);

APP.mount('#app');
