<script lang="ts">
export default {name:"EnButtonGroup"}
</script>
<script setup lang="ts">

import {onMounted, reactive} from "vue";
import EnButton from "./button.vue";

interface Button {
  guid?: string;
  text?: string;
  icon?: string;
}

interface ComponentProps {
  group: Button[];
  type: string;
  size: string;
}

let buttonList: Button[] = reactive([]);

//创建按钮guid
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// 定义 props
const props = withDefaults(defineProps<ComponentProps>(), {
  group: ()=>([
    {
      text: "",
      icon: "bi-hand-thumbs-up"
    },
    {
      text: "转发",
      icon: "bi-star"
    },
    {
      text: "",
      icon: "bi-star"
    }
  ])
})
props.group.forEach(group=>{group.guid = generateUUID();buttonList.push(group)});

onMounted(()=>{

})
</script>

<template>
<div class="buttonGroup">
  <en-button :icon="item.icon" :type="props.type" :size="props.size" v-for="item in buttonList" :key="item.guid">
    {{item.text}}
  </en-button>
</div>
</template>

<style scoped lang="scss">
@import "../../style/button/buttonGroup";
</style>