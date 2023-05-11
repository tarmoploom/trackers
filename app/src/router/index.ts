import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Mainview from '@/views/Mainview.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Harjutused',
    component: Mainview,
    props: (route) => ({
      compid: route.query.compid,
      tenant: route.query.tenant,
      id: route.query.id,
    }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
