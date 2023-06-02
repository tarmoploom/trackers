import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Mainview from '@/views/Mainview.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Mainview',
    component: Mainview,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
