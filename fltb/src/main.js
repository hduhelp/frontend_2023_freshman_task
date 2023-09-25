import { createApp } from 'vue'
import Particles from "vue3-particles";
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'animate.css';

createApp(App).use(Particles).mount('#app')
