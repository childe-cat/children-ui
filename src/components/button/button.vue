<script lang="ts">
export default {
  name:"EnButton",
}
</script>
<script setup lang="ts">

import {onMounted, ref, watch} from "vue";
let buttonSize = ref('');

interface componentProps{
  type:string,
  icon:string,
  size:string,
  round:boolean,
  disabled:boolean,
  plain:boolean,
  text:boolean,
  loading:boolean,
}

const props = withDefaults(defineProps<componentProps>(),{
  type:"primary",
  icon:"",
  size:"default",
  round:false,
  disabled:false,
  plain:false,
  text:false,
  loading:false
})

watch(() => props.size,()=>{buttonSize.value = ['default','small','large'].includes(props.size) ? props.size : 'default';},{immediate:true})
onMounted(()=>{
  console.log(props.icon)
})
</script>

<template>
<button :disabled="disabled" :class="['en-button en-button-'+type + ' en-button-' + buttonSize,{
  'is-text':props.text,
  'is-plain':props.plain
}]">
  <i v-if="loading"></i>
  <i class="uIcon" :class="props.icon" v-if="icon && !loading"></i>
  <span><slot></slot></span>
</button>
</template>

<style scoped lang="scss">
@import "button";
</style>