import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home.vue';
import Cities from '@/views/cities.vue';
import Map from '@/views/map.vue';
import settings from'@/views/settings.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cities',
    name: 'Cities',
    component: Cities,
  },
  {
    path: '/map',
    name: 'Map',
    component: Map,
  },
  {
    path: '/settings',
    name: 'settings',
    component: settings,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
