import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutUsPage.vue'),
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/TeamPage.vue'),
  },
  // {
  //   path: '/services',
  //   name: 'services',
  //   component: () => import('../views/ServicesPage.vue'),
  // },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../views/GalleryPage.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactPage.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router;
