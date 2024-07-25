<script lang="ts">
export default {name:"EnButtonGroup"}
</script>
<script setup lang="ts">

import EnButton from "./button.vue";
import {onMounted, reactive} from "vue";

interface Button {
  guid?: string;
  text?: string;
  icon?: string;
}

// 定义 ComponentProps 接口
interface ComponentProps {
  group: Button[];
}

// 初始化 buttonList 为响应式数组
let buttonList: Button[] = reactive([]);

// 定义 props
const props = defineProps<ComponentProps>();

onMounted(()=>{
  buttonList.length = 0;
  props.group.forEach(group=>{buttonList.push(group)});
})
</script>

<template>
<div>
  <en-button v-for="item in buttonList" :key="item.guid"></en-button>
</div>
</template>

<style scoped>

</style>