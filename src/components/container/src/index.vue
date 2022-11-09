<script lang="ts">
export default {
  name: "container",
};
</script>

<script lang="ts" setup>
import NavHeader from "./nav-header/index.vue";
import NavSide from "./nav-side/index.vue";

import { RouterView } from "vue-router";
import { ref } from "vue";
const isCollapse = ref(false);
</script>

<template>
  <el-container>
    <el-aside width="auto">
      <NavSide :collapse="isCollapse"></NavSide>
    </el-aside>
    <el-container>
      <el-header>
        <NavHeader v-model:collapse="isCollapse"></NavHeader>
      </el-header>
      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.el-header {
  height: 57px;
  border-bottom: 1px solid #eee;
}
</style>
