<script lang="ts">
import type { LoaderPrimitiveProps } from './types'
import type { StyleValue } from 'vue'

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

const borderSize = computed(() => Math.floor(props.size / 7))

const baseStyles = computed<StyleValue>(() => ({
  width: `${`${props.size + borderSize.value * 2}px`}`,
  height: `${`${props.size + borderSize.value * 2}px`}`,
  borderRadius: '50%',
  border: `${borderSize.value}px solid`,
  borderColor: props.secondaryColor,
  borderRightColor: props.primaryColor,
}))
</script>

<template>
  <LoaderPrimitive
    role="progress" aria-busy="true"
    :class="cn('vl-basic-loader', $props.class as string)"
    :style="[baseStyles, $props.style as Record<string, string>]"
  />
</template>

<style>
.vl-basic-loader
{
    transform-origin: center;
    -webkit-animation: vl-basic-rotation 0.6s 0s infinite linear;
            animation: vl-basic-rotation 0.6s 0s infinite linear;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
}

@-webkit-keyframes vl-basic-rotation
{
    to {
      transform: rotate(1turn);
   }
}

@keyframes vl-basic-rotation
{
    to {
      transform: rotate(1turn);
   }
}
</style>
