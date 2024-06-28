<script lang="ts">
import type { LoaderPrimitiveProps } from './types'
import LoaderPrimitive from './loader-primitive.vue'

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
  <LoaderPrimitive
    :as="$props.as as string ?? 'div'"
    :class="cn('vl-material-loader', $props.class as string)"
    role="progress" aria-busy="true"
  />
</template>

<style>
.vl-material-loader {
  width: v-bind(css_width);
  height: v-bind(css_width);
  border-radius: 50%;
  border-width: v-bind(border);
  border-style: solid;
  border-color: v-bind(color);
  box-sizing: border-box;
  -webkit-animation: vl-sweep-animation 1s linear alternate infinite, vl-rotation-animation 0.8s linear infinite;
          animation: vl-sweep-animation 1s linear alternate infinite, vl-rotation-animation 0.8s linear infinite;
}

@keyframes vl-rotation-animation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes vl-rotation-animation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes vl-sweep-animation {
  0% {
    -webkit-clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);
    clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);
  }
  50% {
    -webkit-clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);
    clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);
  }
  100% {
    -webkit-clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);
  }
}

@-webkit-keyframes vl-sweep-animation {
  0% {
    -webkit-clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);
  }
  50% {
    -webkit-clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);
  }
  100% {
    -webkit-clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);
  }
}
</style>
