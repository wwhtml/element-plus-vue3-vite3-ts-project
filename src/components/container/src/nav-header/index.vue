<script lang="ts">
export default {
  name: "nav-header",
};
</script>

<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean;
}>();

let emits = defineEmits(["update:collapse"]);

let toggle = () => {
  // 需要修改父组件的数据
  emits("update:collapse", !props.collapse);
};
</script>

<template>
  <div class="header">
    <span class="toggle" @click="toggle">
      <el-icon v-if="collapse"><Expand /></el-icon>
      <el-icon v-else><Fold /></el-icon>
    </span>
  </div>
</template>

<style scoped lang="scss">
.header {
  // padding: 0;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  .toggle {
    cursor: pointer;
    line-height: 0;
  }
}
</style>
