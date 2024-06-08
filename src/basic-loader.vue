<script lang="ts" setup>
import { BASE_PRIMARY_COLOR, BASE_SECONDARY_COLOR, BASE_SIZE } from './const'
import LoaderPrimitive from './loader-primitive.vue'
import type { LoaderPrimitiveProps } from './types'
import { cn } from './utils/cn'
import { computed } from 'vue'

export interface BasicLoaderProps extends LoaderPrimitiveProps {
  primaryColor?: string
  secondaryColor?: string
  size?: number
}

const props = withDefaults(defineProps<BasicLoaderProps>(), {
  primaryColor: BASE_PRIMARY_COLOR,
  secondaryColor: BASE_SECONDARY_COLOR,
  size: BASE_SIZE,
})

const borderSize = computed(() => props.size / 7)

const baseStyles = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
  borderRadius: '50%',
  border: `${borderSize.value}px solid`,
  borderColor: props.secondaryColor,
  borderRightColor: props.primaryColor,
}))
</script>

<template>
  <LoaderPrimitive
    role="alert" aria-busy="true"
    :class="cn('v-basic-animation', props.class)"
    :style="baseStyles"
  />
</template>

<style>
.v-basic-animation
{
    transform-origin: center;
    -webkit-animation: v-basic-rotation 0.6s 0s infinite linear;
            animation: v-basic-rotation 0.6s 0s infinite linear;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
}

@-webkit-keyframes v-basic-rotation
{
    to {
      transform: rotate(1turn);
   }
}

@keyframes v-basic-rotation
{
    to {
      transform: rotate(1turn);
   }
}
</style>
