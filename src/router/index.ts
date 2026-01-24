import Index from '@/pages/Index.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Index },
  { path: '/about', component: () => import('@/pages/AboutUs.vue') },
  { path: '/treatments', component: () => import('@/pages/OurTreatments.vue') },
  { path: '/contact', component: () => import('@/pages/ContactUs.vue') },
  { path: '/treatments/spine-surgery', component: () => import('@/pages/SpineSurgery.vue') },
  { path: '/treatments/non-surgical', component: () => import('@/pages/NonSurgicalTreatments.vue') },
  { path: '/treatments/hip-replacement', component: () => import('@/pages/HipReplacementSurgery.vue') },
  { path: '/treatments/hand-foot', component: () => import('@/pages/HandFootSurgery.vue') },
  { path: '/treatments/knee-surgery', component: () => import('@/pages/KneeSurgery.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('@/pages/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
