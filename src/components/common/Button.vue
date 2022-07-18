<script lang="ts" setup>
import IconSvg from '@/components/icon/IconSvg.vue'

export interface BtnProps {
  title: string
  size?: string
  outlined?: boolean
  icon?: string
  url?: string
  isLink?: boolean
  variantButtonClass?: string
  readMoreButton?: boolean
}

withDefaults(defineProps<BtnProps>(), {
  size: () => '',
  outlined: () => false,
  icon: () => '',
  url: () => '#',
  isLink: () => true,
  variantButtonClass: () => '',
  readMoreButton: () => false
})
</script>

<template>
  <router-link
    v-if="isLink && !variantButtonClass && !readMoreButton"
    :to="url"
    :class="[
      'btn-default',
      size ? `btn-${size}` : '',
      outlined ? 'btn-border' : '',
      icon ? 'btn-icon' : ''
    ]"
  >
    {{ title }}
    <icon-svg v-if="icon" :name="icon" size="20" class="icon" />
  </router-link>
  <button
    v-else-if="!isLink && !variantButtonClass && !readMoreButton"
    type="button"
    :class="[
      'btn-default',
      size ? `btn-${size}` : '',
      outlined ? 'btn-border' : '',
      icon ? 'btn-icon' : ''
    ]"
    @click.prevent="$emit('btnClick')"
  >
    {{ title }}
    <icon-svg v-if="icon" :name="icon" size="20" class="icon" />
  </button>
  <router-link
    v-else-if="isLink && variantButtonClass && !readMoreButton"
    :to="url"
    :class="[
      'btn-default',
      size ? `btn-${size}` : '',
      outlined ? 'btn-border' : '',
      icon ? 'btn-icon' : '',
      variantButtonClass ? variantButtonClass : ''
    ]"
  >
    <slot />
  </router-link>
  <button
    v-else-if="!isLink && variantButtonClass && !readMoreButton"
    type="button"
    :class="[
      'btn-default',
      size ? `btn-${size}` : '',
      outlined ? 'btn-border' : '',
      icon ? 'btn-icon' : '',
      variantButtonClass ? variantButtonClass : ''
    ]"
    @click.prevent="$emit('btnClick')"
  >
    <slot />
  </button>
  <router-link
    v-else-if="readMoreButton"
    :to="url"
    :class="[
      'btn-read-more',
      size ? `btn-${size}` : '',
      outlined ? 'btn-border' : '',
      icon ? 'btn-icon' : '',
      variantButtonClass ? variantButtonClass : ''
    ]"
  >
    <slot />
  </router-link>
</template>
