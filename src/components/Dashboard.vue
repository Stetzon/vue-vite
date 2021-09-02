<template>
  <n-layout class="layout" has-sider>
    <n-layout-sider
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
      :collapsed="collapsed"
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :native-scrollbar="false"
      class="layout-sider"
    >
      <p>sider</p>
    </n-layout-sider>
    <n-layout>
      <n-layout-content>
        <p>content</p>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup>
  import {ref} from 'vue';

  const collapsed = ref(false);
</script>


<style scoped>

</style>
