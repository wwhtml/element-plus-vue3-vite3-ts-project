<script lang="ts">
export default {
  name: "nav-side",
};
</script>

<script lang="ts" setup>
const props = defineProps<{
  collapse: boolean;
}>();
</script>

<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="collapse"
  >
    <el-menu-item index="1">
      <el-icon><Expand /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><Expand /></el-icon>
      <span>图标选择器</span>
    </el-menu-item>
    <el-menu-item index="3">
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
</template>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
}
</style>
