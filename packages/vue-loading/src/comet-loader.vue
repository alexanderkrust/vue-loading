<script lang="ts">
import type { LoaderPrimitiveProps } from './types'

export interface CometLoaderProps extends LoaderPrimitiveProps {
  color?: string
  size?: number
  thickness?: number
}
</script>

<script lang="ts" setup>
import { BASE_PRIMARY_COLOR, BASE_SIZE } from './const'
import LoaderPrimitive from './loader-primitive.vue'
import { cn } from './utils/cn'
import { computed } from 'vue'

const props = withDefaults(defineProps<CometLoaderProps>(), {
  color: BASE_PRIMARY_COLOR,
  thickness: undefined,
  size: BASE_SIZE,
})

const borderSize = computed(() => Math.floor(props.size / 8))
const css_width = computed(() => `${`${props.size + borderSize.value * 2}px`}`)

const { color, thickness } = props

const background = `radial-gradient(farthest-side,${color} 94%,#0000) top/${thickness ?? borderSize.value}px ${thickness ?? borderSize.value}px no-repeat,
          conic-gradient(#0000 30%, ${color})`
const mask = `radial-gradient(farthest-side,#0000 calc(100% - ${thickness ?? borderSize.value}px),#000 0)`
</script>

<template>
  <LoaderPrimitive
    :as="$props.as as string || 'div'"
    role="progress" aria-busy="true"
    :class="cn('vl-comet-loader', $props.class as string)"
  />
</template>

<style>
.vl-comet-loader {
  width: v-bind(css_width);
  height: v-bind(css_width);
  border-radius: 50%;
  background: v-bind(background);
  -webkit-animation: vl-basic-rotation 1s infinite linear;
          animation: vl-basic-rotation 1s infinite linear;
  -webkit-mask: v-bind(mask);
          mask: v-bind(mask);
}

@-webkit-keyframes vl-comet-rotation {
  to {
    transform: rotate(1turn);
  }
}

@keyframes vl-comet-rotation {
  to {
    transform: rotate(1turn);
  }
}
</style>
