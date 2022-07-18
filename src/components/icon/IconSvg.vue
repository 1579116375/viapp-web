<script lang="ts" setup>
import feather from 'feather-icons'

interface IconProps {
  name: string
  size?: number | string
  iconClass?: string
}

const props = withDefaults(defineProps<IconProps>(), {
  size: () => 16,
  iconClass: () => ''
})

function iconSvg(iconName: string) {
  return feather.icons[iconName].toSvg()
}
</script>

<template>
  <i
    v-html="iconSvg(props.name)"
    :class="`size-${props.size} ${props.iconClass}`"
  ></i>
</template>
