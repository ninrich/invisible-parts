import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { nextTick } from 'vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { title: "O Projekte" }
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import(/* webpackChunkName: "support" */ '../views/Support.vue')
  },
  {
    path: '/journal',
    name: 'Journal',
    component: () => import(/* webpackChunkName: "journal" */ '../views/Journal.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    meta: { title: "Kontakt" }
  },
  {
    path: '/:pathMatch(.*)',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
router.afterEach((to) => {
  nextTick(() => {
    const customTitle = to.meta.title;
    document.title = customTitle ? customTitle + " | Invisible Parts" : "Invisible Parts";
  })
})

export default router
