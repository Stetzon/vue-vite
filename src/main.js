import { createApp } from 'vue'
import naive from 'naive-ui'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createStore } from 'vuex'

import 'vfonts/Lato.css' // sans
import 'vfonts/FiraCode.css' // monospace

import HelloWorld from './components/HelloWorld.vue';
import Dashboard from './components/Dashboard.vue';

const About = { template: '<h1>About</h1>' }

const routes = [
  { path: '/', component: HelloWorld, props: {msg : "Hello Vue 3 + Vite"} },
  { path: '/about', component: About },
  { path: '/dashboard', component: Dashboard },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// Create a new store instance.
const store = createStore({
  state () {},
  mutations: {}
})

createApp(App)
    .use(router)
    .use(store)
    .use(naive)
    .mount('#app')
