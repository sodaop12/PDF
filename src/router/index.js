import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UploadView from '/Users/fallingrain/work 8 mounth/pdf/src/views/FileuploadView.vue'
import LoginView from '@/views/LoginView.vue'
import ProfileView from '@/views/ProfileView.vue'
import PermissonView from '@/views/FilepermissonView.vue'
import AdduserView  from '@/views/AdduserView.vue'
import ChartView  from '@/views/ChartView.vue'
import store from '@/store/index.js';

const routes = [
  {
    path: '/pdf',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    component: UploadView
  },
  { path: '/', component: LoginView },
{  path: '/profile',
component: ProfileView,
beforeEnter: (to, from, next) => {
  if (store.getters.isAuthenticated) { // Implement this function to check authentication state
    next();
  } else {
    next('/login'); // Redirect to the login page if not authenticated
  }
}
},
  { path: '/permisson', component: PermissonView },
  { path: '/adduser', component: AdduserView },
  { path: '/chart', component: ChartView },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
