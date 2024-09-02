import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/LandingPage.vue';
import InspirationPage from '../components/InspirationPage.vue'; // images
import CocktailsPage from '../components/CocktailsPage.vue'; // accordion
import PlantsPage from '../components/PlantsPage.vue'; // grid

const routes = [
  {
    path: '/',
    name: 'Gardens & Sips',
    component: LandingPage
  },
  {
    path: '/inspiration',
    name: 'Inspiration',
    component: InspirationPage
  },
  {
    path: '/cocktails',
    name: 'Cocktails',
    component: CocktailsPage
  },
  {
    path: '/plants',
    name: 'Plants',
    component: PlantsPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
