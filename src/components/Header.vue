<template>
  <div class="layout-header">
    <div
      class="ml-1 layout-header-trigger layout-header-trigger-min"
      @click="() => $emit('update:collapsed', !collapsed)"
    >
      <n-icon size="24" v-if="collapsed">
        <right-icon />
      </n-icon>
      <n-icon size="24" v-else>
        <left-icon />
      </n-icon>
    </div>
  </div>
  <!--项目配置-->
  <ProjectSetting ref="drawerSetting" />
</template>

<script>
import { defineComponent } from "vue";

import {
  ChevronDoubleLeft16Filled as LeftIcon,
  ChevronDoubleRight16Filled as RightIcon,
} from "@vicons/fluent";

export default defineComponent({
  components: {
    LeftIcon,
    RightIcon,
  },
});
</script>

<style lang="scss" scoped>
.layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  height: 50px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  transition: all 0.2s ease-in-out;
  width: 100%;
}
.layout-header-trigger {
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
}
</style>