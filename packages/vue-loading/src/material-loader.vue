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
import LoaderPrimitive from './loader-primitive.vue'
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
  <LoaderPrimitive
    :class="cn('vl-material-loader', $props.class as string)"
    :style="$props.style"
    role="progress" aria-busy="true"
  />
</template>

<style>
.vl-material-loader {
  width: v-bind(css_width);
  height: v-bind(css_width);
  border-color: v-bind(color);
  border-width: v-bind(border);
  border-style: solid;
  border-radius: 50%;
  animation: vl-path-animation 0.8s infinite linear alternate, vl-rotation-animation 1.6s infinite linear;
  -webkit-animation: vl-path-animation 0.8s infinite linear alternate, vl-rotation-animation 1.6s infinite linear;
}

@-webkit-keyframes vl-path-animation {
   0% {
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
   }

   12.5% {
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%);
   }

   25% {
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%);
   }

   50% {
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
   }

   62.5% {
      clip-path: polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
   }

   75% {
      clip-path: polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%);
   }

   100% {
      clip-path: polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%);
   }
}

@keyframes vl-path-animation {
   0% {
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
   }

   12.5% {
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%);
   }

   25% {
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%);
   }

   50% {
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
   }

   62.5% {
      clip-path: polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
   }

   75% {
      clip-path: polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%);
   }

   100% {
      clip-path: polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%);
   }
}

@-webkit-keyframes vl-rotation-animation {
   0% {
      transform: scaleY(1) rotate(0deg);
   }

   49.99% {
      transform: scaleY(1) rotate(135deg);
   }

   50% {
      transform: scaleY(-1) rotate(0deg);
   }

   100% {
      transform: scaleY(-1) rotate(-135deg);
   }
}

@keyframes vl-rotation-animation {
   0% {
      transform: scaleY(1) rotate(0deg);
   }

   49.99% {
      transform: scaleY(1) rotate(135deg);
   }

   50% {
      transform: scaleY(-1) rotate(0deg);
   }

   100% {
      transform: scaleY(-1) rotate(-135deg);
   }
}
</style>
