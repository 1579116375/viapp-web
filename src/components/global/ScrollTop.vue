<script lang="ts" setup>
import IconSvg from '@/components/icon/IconSvg.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const visible = ref(true)

function toggleVisible() {
  const scrolled = document.documentElement.scrollTop
  if (scrolled > 300) {
    visible.value = true
  } else if (scrolled <= 300) {
    visible.value = false
  }
}

window.addEventListener('scroll', toggleVisible)

onMounted(() => {
  toggleVisible()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', toggleVisible)
})
</script>

<template>
  <div
    class="rn-back-top"
    @click="scrollToTop"
    :class="[visible ? 'd-inline' : 'd-none']"
  >
    <icon-svg name="chevron-up" size="27" />
  </div>
</template>
