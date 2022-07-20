<script lang="ts" setup>
interface DisplayCardInfo {
  img: string
  title: string
}

defineProps<DisplayCardInfo>()
</script>

<template>
  <div class="rn-card box-card-style-default">
    <div class="inner">
      <div class="thumbnail">
        <img class="w-100" :src="img" :alt="title" />
      </div>
      <div class="content">
        <h4 class="title">{{ title }}</h4>
      </div>
    </div>
  </div>
</template>
