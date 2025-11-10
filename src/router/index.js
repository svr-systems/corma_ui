import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/views/Main.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/servicios',
    redirect: '/#services',
  },
  {
    path: '/clientes',
    redirect: '/#clients',
  },
  {
    path: '/ubicacion',
    redirect: '/#location',
  },
  {
    path: '/contacto',
    redirect: '/#contact',
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },
});

export default router;