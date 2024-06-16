<script lang="ts">
import type { LoaderPrimitiveProps } from './types'

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

const css_width = computed(() => `${`${Math.floor(props.size + moonSize.value * 2)}px`}`)
const css_animation_speed = computed(() => `${0.6 / props.speed}s`)
const css_moonSize = computed(() => `${moonSize.value}px`)
const css_top = computed(() => `${`${props.size / 2 - moonSize.value / 2}px`}`)
const css_border = computed(() => `${moonSize.value}px solid ${props.color}`)
const css_size = computed(() => `${props.size}px`)
const { color } = props
</script>

<template>
  <span :class="cn('vl-moon-spinner', $props.class as string)" role="progress" aria-busy="true">
    <span class="vl-moon-ball" />
    <span class="vl-moon-circle" />
  </span>
</template>

<style>
.vl-moon-spinner {
  display: inherit;
  position: relative;
  width: v-bind(css_width);
  height: v-bind(css_width);
  animation-fill-mode: forwards;
  animation: vl-moon-rotation v-bind(css_animation_speed) 0s infinite linear;
  -webkit-animation: vl-moon-rotation v-bind(css_animation_speed) 0s infinite linear;
}

.vl-moon-spinner .vl-moon-ball {
  width: v-bind(css_moonSize);
  height: v-bind(css_moonSize);
  border-radius: 100%;
  background-color: v-bind(color);
  opacity: 0.8;
  position: absolute;
  top: v-bind(css_top);
  animation: vl-moon-rotation v-bind(css_animation_speed) 0s infinite linear;
  -webkit-animation: vl-moon-rotation v-bind(css_animation_speed) 0s infinite linear;
}

.vl-moon-spinner .vl-moon-circle {
  width: v-bind(css_size);
  height: v-bind(css_size);
  border-radius: 100%;
  border: v-bind(css_border);
  opacity: 0.1;
  box-sizing: content-box;
  position: absolute;
}

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
