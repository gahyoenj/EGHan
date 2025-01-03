import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// import App from '@/App.vue'

import SignUpView from '@/views/SignUpView.vue'
import LoginView from '@/views/LoginView.vue'
import UserView from '@/views/UserView.vue'
import UserUpdateView from '@/views/UserUpdateView.vue'
import ProductView from '@/views/ProductView.vue'
import BoardView from '@/views/BoardView.vue'
import BoardDetailView from '@/views/BoardDetailView.vue'
import BoardCreateView from '@/views/BoardCreateView.vue'
import DetailView from '@/views/DetailView.vue'
import BoardUpdateView from '@/views/BoardUpdateView.vue'
import MapView from '@/views/MapView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/signup',
      name:'signup',
      component: SignUpView
    },
    {
      path:'/login',
      name:'login',
      component: LoginView
    },
    {
      path:'/user',
      name:'user',
      component: UserView
    },
    {
      path:'/userinfoupdate',
      name:'userinfoupdate',
      component: UserUpdateView
    },
    {
      path:'/boards',
      name:'board',
      component: BoardView
    },
    {
      path:'/product',
      name:'product',
      component: ProductView
    },
    {
      path:'/product/:productCode',
      name:'productdetail',
      component: DetailView
    },
    {
      path:'/board/:id',
      name:'board-detail',
      component: BoardDetailView,
    },
    {
      path:'/board/create',
      name: 'board-create',
      component: BoardCreateView,
    },
    {
      path: '/board/update/:id',
      name: 'board-update',
      component: BoardUpdateView,
    },
    {
      path: '/board/map',
      name: 'map',
      component: MapView,
    },
  ]
})

export default router
