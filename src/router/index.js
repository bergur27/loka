import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NykaupView from '../views/NykaupView.vue'
import Top10View from '../views/Top10View.vue'
import AeldiView from "@/views/AeldiView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/leikir',
      name: 'leikir',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/leikirView.vue')
    },
    {
      path: '/nykaup',
      name: 'nykaup',
      component: NykaupView
    },
    {
      path: '/top10',
      name: 'top10',
      component: Top10View
    },
    {
      path: '/Aeldi',
      name: 'Aeldi',
      component: AeldiView
    }
  ]
})

export default router
