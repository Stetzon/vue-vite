<template>
  <NLayout class="layout" has-sider>
    <NLayoutSider
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
    </NLayoutSider>
    <NLayout>
      <NLayoutContent>
        <p>content</p>
      </NLayoutContent>
    </NLayout>
  </NLayout>
</template>

<script setup>
  import {ref} from 'vue';

  const collapsed = ref(false);
</script>


<style scoped>

</style>
