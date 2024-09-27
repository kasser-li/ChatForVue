import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'

import Login from '../views/Login/index.vue'
import chartArea from '../views/chartArea/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/chartArea',
          name: 'chartArea',
          component: chartArea
        }
      ]
    },
    {
      // 登录
      path: '/Login',
      name: 'Login',
      component: Login
    },

  ]
})

export default router
