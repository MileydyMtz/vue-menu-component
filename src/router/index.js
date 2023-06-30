import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/men',
      name: 'men',
      component: () => import('../views/MenView.vue')
    },
    {
      path: '/women',
      name: 'women',
      component: () => import('../views/WomenView.vue')
    },
    {
      path: '/kids',
      name: 'kids',
      component: () => import('../views/KidsView.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/like',
      name: 'like',
      component: () => import('../views/LikeView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/ShooppingCartView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },

  ]
})

export default router
