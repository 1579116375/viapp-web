<script lang="ts" setup>
import AppLayout from '@/components/AppLayout.vue'
import SliderIntro from '@/components/intro/SliderIntro.vue'
import RbtSeparator from '@/components/separator/RbtSeparator.vue'
import TabIntro from '@/components/intro/TabIntro.vue'
import CustomerIntro from '@/components/intro/CustomerIntro.vue'
</script>

<template>
  <app-layout>
    <slider-intro />
    <rbt-separator />
    <tab-intro />
    <rbt-separator />
    <customer-intro />
  </app-layout>
</template>
