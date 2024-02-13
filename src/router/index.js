import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashoardVue from '@/views/Dashoard.vue'
import AdminDashboard from '../views/AdminDashboard.vue';


import ProductVue from '@/views/Product.vue';
import ArtistVue from '@/views/Artist.vue';
import BookingVue from '@/views/Booking.vue';

import HomeWebVue from '@/client/HomeWeb.vue';

import UserTestVue from '@/client/UserTest.vue';
const routes = [
  {

    path: '/',
    name: 'usertest',
    component: UserTestVue,
  },
  {
    path: '/webclient',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/homeweb',
        name: 'homeweb',
        component: HomeWebVue
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashoardVue,
    children: [
      {
        path: "/admin",
        name: 'admin',
        component: AdminDashboard
      },
      {
        path: '/products',
        name: 'products',
        component: ProductVue
      },
      {
        path: '/artist',
        name: 'artist',
        component: ArtistVue
      },
      {
        path: '/booking',
        name: 'booking',
        component: BookingVue
      }
    ]
  }

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router