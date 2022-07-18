<script lang="ts" setup>
import { PropType } from 'vue'

export interface MenuItemData {
  routerLink: string
  routerName: string
  spanClass: string
  spanContent: string
}

const props = defineProps({
  itemType: {
    type: String,
    required: true
  },
  data: {
    type: Array as PropType<MenuItemData[]>,
    required: true
  }
})
</script>

<template>
  <ul :class="props.itemType">
    <template v-for="(item, index) in props.data" :key="index">
      <li>
        <router-link :to="item.routerLink">
          {{ item.routerName }}
          <span :class="item.spanClass">{{ item.spanContent }}</span>
        </router-link>
      </li>
    </template>
  </ul>
</template>
