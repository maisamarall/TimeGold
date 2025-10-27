import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import CadastroUserView from '../views/CadastroUserView.vue'
import ProfissionalView from '../views/ProfissionalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/CadastroUserView.vue',
      name: 'cadastroUser',
      component: CadastroUserView
    },
    {
      path: '/profissional',
      name: 'profissional',
      component: ProfissionalView
    }
  ],
})

export default router