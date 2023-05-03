import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Mainview from '@/views/Mainview.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Harjutused',
    component: Mainview,
    props: (route) => ({
      compid: route.query.compid,
      id: route.query.id,
      tenant: route.query.tenant,
    }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
