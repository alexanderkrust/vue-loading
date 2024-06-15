<script lang="ts">
import type { PrimitiveProps } from 'radix-vue'

interface CirularBarSharp extends PrimitiveProps {
  color?: string
  size?: number
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from './utils/cn'
import { BASE_PRIMARY_COLOR, BASE_SIZE } from './const'

const props = withDefaults(defineProps<CirularBarSharp>(), {
  color: BASE_PRIMARY_COLOR,
  size: BASE_SIZE,
})

const borderSize = computed(() => Math.floor(props.size / 7))
const size = computed(() => `${`${props.size + borderSize.value * 2}px`}`)
</script>

<template>
  <div :class="cn('vl-circular-bar-sharp', $props.class as string)" role="progressbar" aria-busy="true">
    <svg v-for="index in 12" :key="index" class="vl-blade" viewBox="0 0 64 64">
      <line transform="translate(32,32)" y1="17" y2="29" />
    </svg>
  </div>
</template>

 <style>
  .vl-circular-bar-sharp {
    display: inline-block;
    position: relative;
    width: v-bind(size);
    height: v-bind(size);
    color: var(--color);
    user-select: none;
  }

  .vl-circular-bar-sharp .vl-blade {
    transform-origin: center center;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    -webkit-animation: vl-bar-sharp-animation 1s linear infinite;
    animation: vl-bar-sharp-animation 1s linear infinite;
  }

  .vl-circular-bar-sharp .vl-blade line {
    stroke-width: 4px;
    stroke-linecap: round;
    stroke: v-bind(color);
  }

  .vl-circular-bar-sharp .vl-blade {
    animation-duration: 1000ms;
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(1) {
    animation-delay: -500ms;
    transform: rotate(30deg);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(2) {
    animation-delay: -416.667ms;
    transform: rotate(60deg);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(3) {
    animation-delay: -333.333ms;
    transform: rotate(90deg);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(4) {
    animation-delay: -250ms;
    transform: rotate(120deg);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(5) {
    animation-delay: -166.667ms;
    transform: rotate(150deg);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(6) {
    animation-delay: -83.3333ms;
    transform: rotate(180deg);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(7) {
    animation-delay: -1000ms;
    transform: rotate(210deg);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(8) {
    animation-delay: -916.667ms;
    transform: rotate(240deg);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(9) {
    animation-delay: -833.333ms;
    transform: rotate(270deg);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(10) {
    animation-delay: -750ms;
    transform: rotate(300deg);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(11) {
    animation-delay: -666.667ms;
    transform: rotate(330deg);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(12) {
    animation-delay: -583.333ms;
    transform: rotate(360deg);
  }

  @-webkit-keyframes vl-bar-sharp-animation {
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

  @keyframes vl-bar-sharp-animation {
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
