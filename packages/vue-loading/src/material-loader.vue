<script lang="ts" setup>
import { computed } from 'vue'
import { cn } from './utils/cn'
import LoaderPrimitive from './loader-primitive.vue'
import type { LoaderPrimitiveProps } from './types'
import { BASE_PRIMARY_COLOR, BASE_SIZE } from './const'

export interface MaterialLoaderProps extends LoaderPrimitiveProps {
  color?: string
  size?: number
}

const props = withDefaults(defineProps<MaterialLoaderProps>(), {
  color: BASE_PRIMARY_COLOR,
  size: BASE_SIZE,
})

const borderSize = computed(() => props.size / 7)

const baseStyles = computed(() => {
  return {
    width: `${props.size}px`,
    height: `${props.size}px`,
    borderRadius: '50%',
    border: `${borderSize.value}px solid`,
    borderColor: props.color,
    animation: 'path-animation 0.8s infinite linear alternate, rotation-animation 1.6s infinite linear',
  }
})
</script>

<template>
  <LoaderPrimitive
    :class="cn('v-material-loader')"
    :style="baseStyles"
  />
</template>

<style>
@keyframes path-animation {
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

@keyframes rotation-animation {
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
