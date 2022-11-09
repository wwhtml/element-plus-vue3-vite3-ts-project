<script lang="ts">
export default {
  name: "chooseIcon-com",
};
</script>

<script lang="ts" setup>
import { watch, ref } from "vue";
//引入图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { useCopy } from "../../../hooks/useCopy";

const props = defineProps<{
  title: string; //弹出框的标题sss
  visible: boolean; //显示或者隐藏
}>();

const emits = defineEmits(["update:visible"]);

//拷贝一份父组件传递过来的visible
const dialogVisible = ref<boolean>(props.visible);

//控制dialog是否打开
const handleClick = () => {
  //需要修改父组件的内容（注意：因为在当前组件使用到了父组件中的数据，所以直接修改父组件的属性不好，最好拷贝一份数据）
  emits("update:visible", !props.visible);
};

// 点击图标
let clickItem = (item: string) => {
  let text = `<el-icon><${item} /></el-icon>`;
  // 复制文本
  useCopy(text);
  // 关闭弹框
  dialogVisible.value = false;
};

// 监听visible的变化 只能监听第一次的变化
watch(
  () => props.visible,
  (val) => {
    console.log(val);
    dialogVisible.value = val;
  }
);
// 监听组件内部的dialogVisible变化
watch(
  () => dialogVisible.value,
  (val) => {
    emits("update:visible", val);
  }
);
</script>

<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>

  <div class="m-choose-icon-dialog-body-height">
    <!-- visible：是props中的数据，当关闭dialog的时候，porps.visible会变成false，但是父组件中的visible却没有改变 -->
    <!-- 简单来说：就是在当前组件更改了props.visibel的属性；如果给dialog添加一个函数改变父组件的visible，就是同时修改了父组件的visible和props.visible;不提倡修改props，所以v-model最好不要直接使用props中的数据，拷贝一下 -->
    <el-dialog :title="title" v-model="dialogVisible">
      <div class="container">
        <div
          class="item"
          v-for="(item, index) in Object.keys(ElementPlusIconsVue)"
          :key="index"
          @click="clickItem(item)"
        >
          <div class="text">
            <component :is="item"></component>
          </div>
          <div class="icon">{{ item }}</div>
        </div>
      </div>

      弹窗
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.item {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
  height: 70px;
}
.text {
  font-size: 14px;
}
.icon {
  flex: 1;
}
//为什么不设置width、height就不现实(如果父级元素内没有文字，那么就不能使用1em)
svg {
  //默认是1em
  width: 2em;
  height: 2em;
}
</style>
