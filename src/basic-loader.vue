<script lang="ts" setup>
import { cn } from './utils/cn'
import { type HTMLAttributes, computed } from 'vue'

export interface BasicLoaderProps {
  primaryColor: string
  secondaryColor: string
  size: number
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<BasicLoaderProps>(), {
  primaryColor: '#42b883',
  secondaryColor: '#dbdcef',
  size: 56,
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
  <div
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
