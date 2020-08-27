import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
// todo below
import errorPage from '../views/ErrorPage.vue'
import Contact from '../views/Contact.vue'
import Drink from '../views/Drink.vue'
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
    path: '/contact',
    name: "contact",
    component: Contact
  },
  {
    path: '/search/:query',
    name: "Search",
    component: Search
  },
  {
    path: '/drink/:id',
    name: "Drink",
    component: Drink
  },
  {
    path: "*",
    name: 'Not Found - 404 Error',
    component: errorPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router
