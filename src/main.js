import { createApp } from 'vue'
import naive from 'naive-ui'
import App from './App.vue'
import 'vfonts/Lato.css'
// Monospace Font
// import 'vfonts/FiraCode.css'

createApp(App)
    .use(naive)
    .mount('#app')
