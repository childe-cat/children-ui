<script lang="ts">
export default {
  name:'EnInput'
}
</script>
<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";

interface componentProps{
  width:string,
  modelValue:string,
  placeholder:string,
  disabled:boolean,
  readonly:boolean,
  clearable:boolean,
  showPassword:boolean,
  size:string,
  type:string,
}
const props = withDefaults(defineProps<componentProps>(),{
  modelValue:"",
  placeholder:"",
  disabled:false,
  readonly:false,
  clearable:false,
  showPassword:false,
  size:"default",
  type:"text"
})
const data = reactive({
  inputSize:'',
  isFocus:false,
})
const input = ref<HTMLInputElement | null>(null);
const clickInput = ()=>{
  input.value?.focus();
}
onMounted(()=>{
  data.inputSize = ['default','small','large'].includes(props.size) ? props.size : 'default';
})
</script>

<template>
<div class="en-input-box" :class="'en-input-box-'+props.size,{
  'is-focus':data.isFocus,
}" :style="{width:props.width}" @click="clickInput">
  <input ref="input"
         @focus="data.isFocus = true"
         @blur="data.isFocus = false"
         :class="'en-input'"
         :disabled="props.disabled"
         :readonly="props.readonly"
         v-model="props.modelValue"
         :placeholder="props.placeholder"
         :type="props.type"
  ></input>
</div>
</template>

<style scoped lang="scss">
@import "../../style/form/input.scss";
</style>