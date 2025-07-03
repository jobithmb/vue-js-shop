import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import AccountView from '@/views/AccountView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
    }
  ],
})

// router guard
// if page requiresAuth, check if user is loggedIn
// if not redirect to login page
// else allow access
router.beforeEach((to, from) => {
  const auth = useAuthStore()
  
  // route needs authentication
  if (to.meta.requiresAuth){
    // user must be authenticated
    if(!auth.isAuthenticated) {
      // goto login page
      return { name: 'login' }
    } else {
      // allow access
      return true
    }
  }

  return true
})

export default router
