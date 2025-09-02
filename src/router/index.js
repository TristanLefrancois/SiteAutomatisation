import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  }
})

export default router 