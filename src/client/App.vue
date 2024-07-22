<script setup lang="ts">
import {reactive, ref} from "vue";

const types = reactive(['light','dark','primary','info','success','warning','danger','rich']);
const size = ref('large')
</script>

<template>
  <div style="margin-bottom: 10px">
    <en-button :size="size" v-for="item in types" :key="item" :type="item" style="margin-right: 20px;">默认按钮</en-button>
  </div>
  <div style="margin-bottom: 10px">
  <en-button :size="size" plain v-for="item in types" :key="item" :type="item" style="margin-right: 20px;">朴素按钮</en-button>
  </div>
  <div style="margin-bottom: 10px">
    <en-button :size="size" text v-for="item in types" :key="item" :type="item" style="margin-right: 20px;">文字按钮</en-button>
  </div>
</template>

<style scoped>

</style>