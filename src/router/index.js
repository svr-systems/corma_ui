import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Services from '@/views/Services.vue';
import Clients from '@/views/Clients.vue';
import Contact from '@/views/Contact.vue';
import Location from '@/views/Location.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/servicios',
    name: 'Services',
    component: Services,
  },
  {
    path: '/clientes',
    name: 'Clients',
    component: Clients,
  },
  {
    path: '/ubicacion',
    name: 'Location',
    component: Location,
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;