import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import IPPopup from "@/components/IPPopup";
import { nextTick } from 'vue'
import store from "@/store";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: () => { return "" } },
    children: [
      {
        path: '/:placeId(\\d+)',
        name: 'Detail',
        component: IPPopup,
        meta: { title: () => { return store.state.currentPlaceName } },
        props: true,
        beforeEnter(to, from, next) {
          const placeId = parseInt(to.params.placeId);
          const place = store.getters['getPlaceById'](placeId);
          if (place === undefined) {
            next({name:'Home'})
          } else {
            // Used as a title in the meta property of this route.
            // I chose this so all window.title management is done within this file.
            store.commit("setCurrentPlaceName", {newCurrentPlaceName: place.name})

            to.params.place = place;
            next()
          }
        },
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { title: () => { return "O Projekte" } },
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
    meta: { title: () => { return "Kontakt" } },
  },
  {
    path: '/:pathMatch(.*)*',
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
    const customTitle = to.meta.title(to);
    document.title = customTitle ? customTitle + " | Invisible Parts" : "Invisible Parts";
  })
})

export default router
