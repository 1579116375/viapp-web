<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  subtitle: {
    type: String,
    default: null
  },
  title: {
    type: String,
    default: null
  },
  description: {
    type: String,
    default: null
  },
  textAlign: {
    type: String,
    default: 'left'
  },
  sectionTitleStyle: {
    type: Number,
    default: 1
  }
})

const checkTextAlign = computed(() => {
  if (props.textAlign === 'left') return 'text-start'
  else if (props.textAlign === 'center') return 'text-center'
  else if (props.textAlign === 'end') return 'text-end'
  else return ''
})
</script>

<template>
  <div
    v-if="sectionTitleStyle === 1"
    class="section-title"
    :class="checkTextAlign"
  >
    <h4 class="subtitle">
      <span class="theme-gradient" v-html="subtitle" />
    </h4>
    <h2 class="title w-600" v-html="title" />
    <p v-if="description" class="description b1" v-html="description" />
  </div>

  <div
    v-else-if="sectionTitleStyle === 2"
    :class="`section-title-2 ${checkTextAlign}`"
  >
    <h2 class="title">{{ title }}</h2>
  </div>
</template>
