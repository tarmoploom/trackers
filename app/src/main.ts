import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import { createPinia } from 'pinia';
import 'virtual:windi.css';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Axios from 'axios';

const app = createApp(App);

app.use(createPinia());
app.use(PrimeVue);
app.use(router);

app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Axios', Axios);

app.mount('#app');
