<script setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'

defineProps({
  msg: String
})

const count = ref(0)

const message = useMessage()
const hello = () => { message.success('Hello!') } 

</script>

<template>
  <img alt="Vue logo" src="../assets/logo.png" />

  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <n-space justify="center">
    <n-button @click="count++"> count is: {{ count }} </n-button>
    <n-button @click="hello"> Say Hello </n-button>
  </n-space>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
