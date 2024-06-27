<script lang="ts">
import type { LoaderPrimitiveProps } from './types'

export interface MaterialLoaderProps extends LoaderPrimitiveProps {
  color?: string
  size?: number
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import { cn } from './utils/cn'
import { BASE_PRIMARY_COLOR, BASE_SIZE } from './const'

const props = withDefaults(defineProps<MaterialLoaderProps>(), {
  color: BASE_PRIMARY_COLOR,
  size: BASE_SIZE,
})

const borderSize = computed(() => Math.floor(props.size / 8))
const border = computed(() => `${borderSize.value}px`)
const css_width = computed(() => `${`${props.size + borderSize.value * 2}px`}`)

const { color } = props
</script>

<template>
  <svg
    :class="cn('vl-material-loader', $props.class as string)"
    role="progress" aria-busy="true"
    viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"
  >
    <circle class="vl-material-loader-circle" fill="none" :stroke-width="border" cx="33" cy="33" r="30" />
  </svg>
</template>

<style>
.vl-material-loader {
  width: v-bind(css_width);
  height: v-bind(css_width);
  animation: vl-rotation-animation 1.35s linear infinite;
  -webkit-animation: vl-rotation-animation 1.35s linear infinite;
}

.vl-material-loader > circle {
  stroke-dasharray: 180;
  stroke-dashoffset: 0;
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
  -webkit-animation: turn 1.35s ease-in-out infinite;
  animation: turn 1.35s ease-in-out infinite;
  stroke: v-bind(color);
  stroke-width: v-bind(border);
}

@-webkit-keyframes vl-rotation-animation {
   0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}

@keyframes vl-rotation-animation {
   0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}

@-webkit-keyframes turn
{
  0% {
    stroke-dashoffset: 180;
  }

  50% {
    stroke-dashoffset: 45;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  100% {
    stroke-dashoffset: 180;
    -webkit-transform: rotate(450deg);
    transform: rotate(450deg);
  }
}

@keyframes turn
{
  0% {
    stroke-dashoffset: 180;
  }

  50% {
    stroke-dashoffset: 45;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  100% {
    stroke-dashoffset: 180;
    -webkit-transform: rotate(450deg);
    transform: rotate(450deg);
  }
}
</style>
