import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // https://github.com/vuejs/vue-router-next/issues/858
  resolve: { alias: { 'vue': 'vue/dist/vue.esm-bundler.js' } }
})
