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
      <n-menu
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
      />
    </n-layout-sider>
    <n-layout>
      <n-layout-header bordered>
        <Header />
      </n-layout-header>
      <n-layout-content embedded content-style="padding: 24px;">
        <n-card>
          <p>content</p>
          <p>
            <n-icon size="40">
              <book-icon />
            </n-icon>
          </p>
        </n-card>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup>
import { ref, h } from "vue";
import { NIcon } from "naive-ui";
import {
  Book20Filled as BookIcon,
  Person12Filled as PersonIcon,
  Bug16Filled as BugIcon,
} from "@vicons/fluent";
import Header from "./Header.vue";

const collapsed = ref(false);

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: "Hear the Wind Sing",
    key: "hear-the-wind-sing",
    icon: renderIcon(BookIcon),
  },
  {
    label: "Pinball 1973",
    key: "pinball-1973",
    icon: renderIcon(PersonIcon),
    disabled: false,
    children: [
      {
        label: "Rat",
        key: "rat",
        icon: renderIcon(BugIcon),
      },
    ],
  },
];
</script>


<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: row;
  flex: auto;
}
.layout-sider {
  min-height: 100vh;
  box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
  position: relative;
  z-index: 13;
  transition: all 0.2s ease-in-out;
}
.n-layout-content {
  min-height: calc(100vh - 51px); // header height
}
</style>
