<script lang="ts">
export default {
  name:"EnButton",
}
</script>
<script setup lang="ts">

import {onMounted} from "vue";

const props = defineProps({
  type:{
    type:String,
    default:"primary"
  },
  icon:{
    type:String,
    default:'',
  },
  size:{
    type:String,
    default:"default"
  },
  round:Boolean,
  disabled:Boolean,
  plain:Boolean,
  text: Boolean,
  loading:Boolean,
})

onMounted(()=>{

})
</script>

<template>
<button :disabled="disabled" :class="['en-button en-button-'+type + ' en-button-' + size,{
  'is-text':props.text,
  'is-plain':props.plain
}]">
  <i v-if="loading"></i>
  <i v-if="icon && !loading"></i>
  <span><slot></slot></span>
</button>
</template>

<style scoped lang="scss">
@import "button";
</style>