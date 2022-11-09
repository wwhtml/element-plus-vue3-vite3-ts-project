<script lang="ts">
export default {
  name: "choose-area",
};
</script>
<script lang="ts" setup>
import MChooseArea from "@/components/chooseArea/src/index.vue";

const changeArea = (val: any) => {
  console.log(val);
};
</script>

<template>
  <m-choose-area @change="changeArea"></m-choose-area>
</template>

<style lang="scss" scoped></style>
