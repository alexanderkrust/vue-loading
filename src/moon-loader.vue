<script lang="ts" setup>
import type { HTMLAttributes, StyleValue } from 'vue'
import { computed, defineProps } from 'vue'
import { cn } from './utils/cn'

export interface MoonLoaderProps {
  color: string
  size: number
  class?: HTMLAttributes['class']
  radius?: string | number
  speed: number
}

const props = withDefaults(defineProps<MoonLoaderProps>(), {
  color: '#42b883',
  size: 60,
  radius: '100%',
  speed: 1,
})

const moonSize = computed(() => props.size / 7)

function sharedStyles(width: number): Record<string, string> {
  return {
    width: `${width}px`,
    height: `${width}px`,
    borderRadius: '100%',
  }
}

const wrapperStyles = computed(() => {
  return {
    display: 'inherit',
    position: 'relative',
    width: `${`${props.size + moonSize.value * 2}px`}`,
    height: `${`${props.size + moonSize.value * 2}px`}`,
  } as StyleValue
})

const ballStyles = computed(() => {
  return {
    ...sharedStyles(moonSize.value),
    backgroundColor: props.color,
    opacity: 0.8,
    position: 'absolute',
    top: `${props.size / 2 - moonSize.value / 2}px`,
  } satisfies StyleValue
})

const circleStyles = computed(() => {
  return {
    ...sharedStyles(props.size),
    border: `${moonSize.value}px solid ${props.color}`,
    opacity: 0.1,
    boxSizing: 'content-box',
    position: 'absolute',
  } satisfies StyleValue
})
</script>

<template>
  <span
    role="alert" aria-busy="true"
    :class="cn('v-spinner moon-animation', props.class)"
    :style="wrapperStyles"
  >
    <span
      class="moon-animation ball"
      :style="ballStyles"
    />
    <span
      class="circle"
      :style="circleStyles"
    />
  </span>
</template>

<style>
.moon-animation
{
    transform-origin: center;
    -webkit-animation: v-moon-rotation 0.6s 0s infinite linear;
            animation: v-moon-rotation 0.6s 0s infinite linear;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
}

@-webkit-keyframes v-moon-rotation
{
    to {
      transform: rotate(1turn);
   }
}

@keyframes v-moon-rotation
{
    to {
      transform: rotate(1turn);
   }
}
</style>
