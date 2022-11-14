<script lang="ts">
export default {
  name: "choose-area",
};
</script>
<script lang="ts" setup>
// import MChooseArea from "@/components/chooseArea/src/index.vue";
import { ref } from "vue";
const address = ref<string>("");

const changeArea = (val: any) => {
  console.log(val);
  const { province, city, area } = val;
  address.value = `${province.name} ${city.name}  ${area.name}`;
};
</script>

<template>
  <m-choose-area @change="changeArea"></m-choose-area>
  {{ address }}
</template>

<style lang="scss" scoped></style>
