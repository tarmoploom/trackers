import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ExercisesVue from '@/views/Exercises.vue';
import AddExerciseVue from '@/views/AddExercise.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Harjutused',
    component: ExercisesVue,
    props: (route) => ({
      id: route.query.id,
      tenant: route.query.tenant,
    }),
  },
  {
    path: '/newexercise',
    name: 'Lisa harjutus',
    component: AddExerciseVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
