import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from '@/views/Article.vue'
import Login from '@/views/Login.vue'
import Admin from '@/views/Admin.vue'
import Add from '@/views/Add.vue'
import AdminHome from '@/views/Admin/AdminHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: Article
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: 'add',
    name: 'Admin-Add',
    component: Add
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    // childredn: [
    //   {
    //     path: 'addhome',
    //     name: 'Admin-Home',
    //     component: AdminHome
    //   },
    //   {
    //     path: 'add',
    //     name: 'Admin-Add',
    //     component: Add
    //   },
    // ]
  },

  {
    path: '*',
    redirect: { name: 'Home' }
  },
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
