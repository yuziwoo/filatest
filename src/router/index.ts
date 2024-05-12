import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import path from '@/constants/path'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: path.root.PATH,
      name: path.root.NAME,
      component: HomeView
    },
    {
      path: path.productDetail.PATH,
      name: path.productDetail.NAME,
      component: () => import('../views/ProductDetailView.vue')
    }
  ]
})

export default router
