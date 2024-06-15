<script lang="ts">
import type { LoaderPrimitiveProps } from './types'
import type { StyleValue } from 'vue'

export interface MoonLoaderProps extends LoaderPrimitiveProps {
  color?: string
  size?: number
  speed?: number
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import { cn } from './utils/cn'

import { BASE_PRIMARY_COLOR, BASE_SIZE, BASE_SPEED } from './const'

const props = withDefaults(defineProps<MoonLoaderProps>(), {
  color: BASE_PRIMARY_COLOR,
  size: BASE_SIZE,
  speed: BASE_SPEED,
})

const moonSize = computed(() => Math.floor(props.size / 7))

const wrapper = computed<StyleValue>(() => ({
  'display': 'inherit',
  'position': 'relative',
  'width': `${`${Math.floor(props.size + moonSize.value * 2)}px`}`,
  'height': `${`${Math.floor(props.size + moonSize.value * 2)}px`}`,
  'animation': `vl-moon-rotation ${0.6 / props.speed}s 0s infinite linear`,
  '-webkit-animation': `vl-moon-rotation ${0.6 / props.speed}s 0s infinite linear`,
  'animationFillMode': 'forwards',
}))

function ballStyles(size: number) {
  return {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '100%',
  } satisfies StyleValue
}

const ball = computed<StyleValue>(() => ({
  ...ballStyles(moonSize.value),
  'backgroundColor': `${props.color}`,
  'opacity': '0.8',
  'position': 'absolute',
  'top': `${`${props.size / 2 - moonSize.value / 2}px`}`,
  'animation': `vl-moon-rotation ${0.6 / props.speed}s 0s infinite linear`,
  '-webkit-animation': `vl-moon-rotation ${0.6 / props.speed}s 0s infinite linear`,
}))

const circle = computed<StyleValue>(() => ({
  ...ballStyles(props.size),
  border: `${moonSize.value}px solid ${props.color}`,
  opacity: '0.1',
  boxSizing: 'content-box',
  position: 'absolute',
}))
</script>

<template>
  <span :class="cn('vl-moon-spinner', $props.class as string)" :style="wrapper" role="progress" aria-busy="true">
    <span :style="ball" />
    <span :style="circle" />
  </span>
</template>

<style>
@-webkit-keyframes vl-moon-rotation
{
    to {
      transform: rotate(1turn);
   }
}

@keyframes vl-moon-rotation
{
    to {
      transform: rotate(1turn);
   }
}
</style>
