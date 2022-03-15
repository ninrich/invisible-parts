import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./assets/styles.css";

import data from "./data/data.json";

const authors = new Set();
const hoods = new Set();

for (const place of data) {
    hoods.add(place.hood);
    authors.add(place.author)
}

store.commit('setPlaces', {newPlaces: data});
store.commit('setAuthors', {newAuthors: authors});
store.commit('setHoods', {newHoods: hoods});

router.app = createApp(App).use(store).use(router).mount('#app');