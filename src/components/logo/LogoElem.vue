<script lang="ts" setup>
import logoLight from '@/assets/images/logo/logo.png'
import logoDark from '@/assets/images/logo/logo-dark.png'

interface LogoProps {
  url?: string
  lightLogo?: string
  darkLogo?: string
}

const props = withDefaults(defineProps<LogoProps>(), {
  url: () => '/',
  lightLogo: () => logoLight,
  darkLogo: () => logoDark
})
</script>

<template>
  <div class="logo">
    <router-link :to="props.url">
      <img class="logo-light" :src="lightLogo" alt="Corporate Logo" />
      <img class="logo-dark" :src="darkLogo" alt="Corporate Logo" />
    </router-link>
  </div>
</template>
