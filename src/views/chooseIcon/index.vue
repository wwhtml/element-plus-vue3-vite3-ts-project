<script lang="ts">
export default {
  name: "chooseIcon",
};
</script>

<script lang="ts" setup>
// import mChooseIcon from "../../components/chooseIcon/src/index.vue";
import { ref } from "vue";
const visible = ref<boolean>(false);
</script>

<template>
  <div>
    <m-choose-icon title="选择图标" v-model:visible="visible">
      选择图标
    </m-choose-icon>
  </div>
</template>

<style scoped lang="scss"></style>
