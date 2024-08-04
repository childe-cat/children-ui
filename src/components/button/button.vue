<script lang="ts">
export default {
  name:"EnButton",
}
</script>
<script setup lang="ts">

import {computed, onMounted, ref, watch} from "vue";
let buttonSize = ref('');
const text = ref<HTMLElement | null>(null);

interface componentProps{
  //按钮颜色类型
  type:string,
  //按钮图标
  icon:string,
  //按钮大小
  size:string,
  //是否圆形
  circle:boolean,
  //是否禁用
  disabled:boolean,
  //是否朴素按钮
  plain:boolean,
  //是否文本按钮
  text:boolean,
  //是否加载中
  isLoading:boolean,
  //是否启用波纹点击效果
  isRipple:boolean
}

const props = withDefaults(defineProps<componentProps>(),{
  type:"primary",
  icon:"",
  size:"default",
  circle:false,
  disabled:false,
  plain:false,
  text:false,
  isLoading:false,
  isRipple:false,
})

const clickButton = (e:MouseEvent)=>{
  if(props.isRipple){
    const button = e.currentTarget as HTMLButtonElement;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.classList.add('en-ripple');
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';
    button.appendChild(ripple);
    setTimeout(()=>{
      ripple.remove();
    },500)
  }
}

const moveButton = (e:MouseEvent)=>{
  const button = e.currentTarget as HTMLButtonElement;
  button.style.opacity = '0.7';
}

const leaveButton = (e:MouseEvent)=>{
  const button = e.currentTarget as HTMLButtonElement;
  button.style.opacity = '1';
}

const moveButtonRipple = (e:MouseEvent)=>{
  const button = e.currentTarget as HTMLButtonElement;
  button.style.boxShadow = '1px 2px 10px 2px rgba(0,0,0,0.2)';
}

const leaveButtonRipple = (e:MouseEvent)=>{
  const button = e.currentTarget as HTMLButtonElement;
  button.style.boxShadow = 'none'
}

const hoverFlag = computed(()=>{
  return props.isRipple && !props.plain && !props.text && !props.disabled;
})

watch(() => props.size,(n)=>{buttonSize.value = ['default','small','large'].includes(n) ? n : 'default';},{immediate:true})
onMounted(()=>{
  if(text.value && text.value.innerHTML.length === 0 && props.icon){
    text.value.style.paddingLeft = '0';
  }
})
</script>

<template>
<button
    @mouseenter="hoverFlag ? moveButtonRipple($event) : moveButton($event)"
    @mouseleave="hoverFlag ? leaveButtonRipple($event) : leaveButton($event)"
    @click="clickButton($event)" :disabled="disabled"
    :class="['en-button en-button-'+type + ' en-button-' + buttonSize,{
  'is-text':props.text,
  'is-plain':props.plain,
  'is-circle':props.circle
}]">
  <i class="loading bi-arrow-clockwise" v-if="isLoading"></i>
  <i class="uIcon" :class="props.icon" v-if="icon && !isLoading"></i>
  <span v-show="!props.circle" class="buttonText" ref="text"><slot></slot></span>
</button>
</template>

<style scoped lang="scss">
@import "../../style/button/button";
</style>