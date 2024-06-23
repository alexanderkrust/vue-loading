<script lang="ts">
import type { LoaderPrimitiveProps } from './types'

export interface BasicLoaderProps extends LoaderPrimitiveProps {
  primaryColor?: string
  secondaryColor?: string
  size?: number
}
</script>

<script lang="ts" setup>
import { BASE_PRIMARY_COLOR, BASE_SECONDARY_COLOR, BASE_SIZE } from './const'
import LoaderPrimitive from './loader-primitive.vue'
import { cn } from './utils/cn'
import { computed } from 'vue'

const props = withDefaults(defineProps<BasicLoaderProps>(), {
  primaryColor: BASE_PRIMARY_COLOR,
  secondaryColor: BASE_SECONDARY_COLOR,
  size: BASE_SIZE,
})

const borderSize = computed(() => Math.floor(props.size / 8))
const css_border = computed(() => `${borderSize.value}px`)
const css_width = computed(() => `${`${props.size + borderSize.value * 2}px`}`)

const { primaryColor, secondaryColor } = props
</script>

<template>
  <LoaderPrimitive
    role="progress" aria-busy="true"
    :class="cn('vl-basic-loader', $props.class as string)"
  />
</template>

<style>
.vl-basic-loader {
  width: v-bind(css_width);
  height: v-bind(css_width);
  border-radius: 50%;
  border-color: v-bind(secondaryColor);
  border-right-color: v-bind(primaryColor);
  border-width: v-bind(css_border);
  border-style: solid;
  transform-origin: center;
  -webkit-animation: vl-basic-rotation 0.6s 0s infinite linear;
          animation: vl-basic-rotation 0.6s 0s infinite linear;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

@-webkit-keyframes vl-basic-rotation {
  to {
    transform: rotate(1turn);
  }
}

@keyframes vl-basic-rotation {
  to {
    transform: rotate(1turn);
  }
}
</style>
