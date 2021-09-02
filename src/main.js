import { createApp } from 'vue'
import naive from 'naive-ui'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import 'vfonts/Lato.css' // sans
import 'vfonts/FiraCode.css' // monospace

import HelloWorld from './components/HelloWorld.vue';

const About = { template: '<h1>About</h1>' }

const routes = [
  { path: '/', component: HelloWorld, props: {msg : "Hello Vue 3 + Vite"} },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App)
    .use(router)
    .use(naive)
    .mount('#app')
