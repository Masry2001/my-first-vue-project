import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeVue.vue"
import AboutView from "@/views/AboutVue.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    }
  ],
})

export default router
