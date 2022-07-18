<script lang="ts" setup>
import { PropType } from 'vue'

interface BrandData {
  image: string
}

defineProps({
  brandList: {
    type: Array as PropType<BrandData[]>,
    required: true
  },
  brandStyle: {
    type: Number,
    default: 1
  }
})
</script>

<template>
  <ul
    :class="[
      `brand-list`,
      { 'brand-style-1': brandStyle === 1 },
      { 'brand-style-2': brandStyle === 2 },
      { 'brand-style-2': brandStyle === 3 },
      { 'brand-style-2 variation-2': brandStyle === 4 }
    ]"
  >
    <li v-for="(brand, index) in brandList" :key="index">
      <a href="#"><img :src="brand.image" alt="Brand Image" /></a>
    </li>
  </ul>
</template>
