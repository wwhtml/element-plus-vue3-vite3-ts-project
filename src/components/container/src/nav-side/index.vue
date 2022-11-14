<script lang="ts">
export default {
  name: "nav-side",
};
</script>

<script lang="ts" setup>
import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const props = defineProps<{
  collapse: boolean;
}>();

const route = useRoute();
const router = useRouter();
console.log(route);
console.log(route.path);
// console.log(router);
</script>

<template>
  <el-scrollbar>
    <el-menu
      :default-active="route.path"
      class="el-menu-vertical-demo"
      :collapse="collapse"
      router
    >
      <el-menu-item index="/home">
        <el-icon><Expand /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/chooseIcon">
        <el-icon><Expand /></el-icon>
        <span>图标选择器</span>
      </el-menu-item>
      <el-menu-item index="/chooseArea">
        <el-icon><Expand /></el-icon>
        <span>省市区选择器</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><Expand /></el-icon>
        <span>趋势标记</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><Expand /></el-icon>
        <span>时间选择</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><Expand /></el-icon>
        <span>通知菜单</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><Expand /></el-icon>
        <span>城市选择</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><Expand /></el-icon>
        <span>进度条</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><Expand /></el-icon>
        <span>导航菜单</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><Expand /></el-icon>
        <span>日历</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
}
:deep(.el-scrollbar__view) {
  height: 100%;
}
</style>
