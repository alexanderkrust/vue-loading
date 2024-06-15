<script lang="ts">
import type { PrimitiveProps } from 'radix-vue'

interface CircularBarSimple extends PrimitiveProps {
  color?: string
  size?: number
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from './utils/cn'
import { BASE_PRIMARY_COLOR, BASE_SIZE } from './const'

const props = withDefaults(defineProps<CircularBarSimple>(), {
  color: BASE_PRIMARY_COLOR,
  size: BASE_SIZE,
})

const borderSize = computed(() => Math.floor(props.size / 7))
const size = computed(() => `${`${props.size + borderSize.value * 2}px`}`)
</script>

<template>
  <div :class="cn('vl-circular-bar-simple', $props.class as string)">
    <svg v-for="index in 8" :key="index" class="v-blade" viewBox="0 0 64 64">
      <line transform="translate(32,32)" y1="14" y2="26" />
    </svg>
  </div>
</template>

<style>
.vl-circular-bar-simple {
  display: inline-block;
  position: relative;
  width: v-bind(size);
  height: v-bind(size);
  color: var(--color);
  user-select: none;
}

.vl-circular-bar-simple .v-blade {
  transform-origin: center center;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  -webkit-animation: vl-bar-simple-animation 1s linear infinite;
  animation: vl-bar-simple-animation 1s linear infinite;
}

.vl-circular-bar-simple .v-blade line {
  stroke-width: 7px;
  stroke-linecap: round;
  stroke: v-bind(color);
}

.vl-circular-bar-simple .v-blade {
  animation-duration: 1000ms;
}

.vl-circular-bar-simple .v-blade:nth-child(1) {
  animation-delay: -500ms;
  transform: rotate(0deg);
}

.vl-circular-bar-simple .v-blade:nth-child(2) {
  animation-delay: -375ms;
  transform: rotate(45deg);
}

.vl-circular-bar-simple .v-blade:nth-child(3) {
  animation-delay: -250ms;
  transform: rotate(90deg);
}

.vl-circular-bar-simple .v-blade:nth-child(4) {
  animation-delay: -125ms;
  transform: rotate(135deg);
}

.vl-circular-bar-simple .v-blade:nth-child(5) {
  animation-delay: -1000ms;
  transform: rotate(180deg);
}

.vl-circular-bar-simple .v-blade:nth-child(6) {
  animation-delay: -875ms;
  transform: rotate(225deg);
}

.vl-circular-bar-simple .v-blade:nth-child(7) {
  animation-delay: -750ms;
  transform: rotate(270deg);
}

.vl-circular-bar-simple .v-blade:nth-child(8) {
  animation-delay: -625ms;
  transform: rotate(315deg);
}

@-webkit-keyframes vl-bar-simple-animation {
  0% {
    opacity: 0.85;
  }

  50% {
    opacity: 0.25;
  }

  100% {
    opacity: 0.25;
  }
}

@keyframes vl-bar-simple-animation {
  0% {
    opacity: 0.85;
  }

  50% {
    opacity: 0.25;
  }

  100% {
    opacity: 0.25;
  }
}
</style>
