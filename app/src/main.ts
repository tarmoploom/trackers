import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import { createPinia } from 'pinia';
import 'virtual:windi.css';
import Axios from 'axios';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('Axios', Axios);

app.mount('#app');
