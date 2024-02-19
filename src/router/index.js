import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashoardVue from '@/views/Dashoard.vue'
import AdminDashboard from '../views/AdminDashboard.vue';


import ProductVue from '@/views/Product.vue';
import ArtistVue from '@/views/Artist.vue';
import BookingVue from '@/views/Booking.vue';

import HomeWebVue from '@/client/HomeWeb.vue';

import UserTestVue from '@/client/UserTest.vue';
import ServiceAndProductVue from '@/client/ServiceAndProduct.vue';
import ContactUsVue from '@/client/ContactUs.vue';
import AboutUs from '@/client/AboutUs.vue';
import BookingUser from '@/client/Booking.vue';
import FeedbackVue from '@/client/Feedback.vue';

import AddProductVue from '@/views/AddProduct.vue';
import ProductDeatilVue from '@/views/ProductDeatil.vue';
import AddArtistVue from '@/views/AddArtist.vue';

import LoginVue from '@/views/Login.vue';
import SiginUpVue from '@/views/SiginUp.vue';
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
      },
      {
        path: '/productandservice',
        name: 'productandservice',
        component: ServiceAndProductVue
      },
      {
        path: '/contactus',
        name: 'contactus',
        component: ContactUsVue
      },
      {
        path: '/aboutus',
        name: 'aboutus',
        component: AboutUs
      },
      {
        path: '/bookingUser',
        name: "bookingUser",
        component: BookingUser
      }, {
        path: '/feedback',
        name: 'feedback',
        component: FeedbackVue
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
      }, {
        path: '/addproducts',
        name: "addproducts",
        component: AddProductVue,
        props: true
      }, {
        path: '/addartist',
        name: "addartist",
        component: AddArtistVue
      }
    ]
  }
  , {
    path: "/products/:id",
    name: "productdetail",
    component: ProductDeatilVue,
    props: true
  },
  {
    path: '/signup',
    name: 'signup',
    component: SiginUpVue
  },
  {
    path: '/login',
    name: 'login',
    component: LoginVue
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
