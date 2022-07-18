<script lang="ts" setup>
import { PropType } from 'vue'

export interface RetProps {
  title: string
  msg: string
}

defineProps({
  list: {
    type: Array as PropType<RetProps[]>,
    required: true
  }
})
</script>

<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      <router-link class="d-block" :to="'#'">{{ item.title }}</router-link>
      <span class="cate">{{ item.msg }}</span>
    </li>
  </ul>
</template>
