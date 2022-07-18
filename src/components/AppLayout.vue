<script lang="ts" setup>
import GlobalHeader from '@/components/global/GlobalHeader.vue'
import GlobalFooter from '@/components/global/GlobalFooter.vue'
</script>

<template>
  <main class="page-wrapper">
    <global-header />
    <div class="main-content">
      <slot></slot>
    </div>
    <global-footer />
  </main>
</template>
