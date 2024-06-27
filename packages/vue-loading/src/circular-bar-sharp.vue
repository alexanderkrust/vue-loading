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

const css_size = computed(() => `${`${props.size}px`}`)
const { color } = props

// 8.633x2.156
// 5.85x3.38
</script>

<template>
  <div
    :class="cn('vl-circular-bar-sharp', $props.class as string)"
    role="progress" aria-busy="true"
  >
    <div class="vl-blades">
      <div v-for="index in 12" :key="index" class="vl-blade" />
    </div>
  </div>
</template>

 <style>
  .vl-circular-bar-sharp {
    display: inline-block;
    position: relative;
    width: v-bind(css_size);
    height: v-bind(css_size);
    color: v-bind(color);
    user-select: none;
  }

  .vl-circular-bar-sharp .vl-blades {
    position: relative;
    top: 50%;
    left: 50%;
    width: v-bind(css_size);
    height: v-bind(css_size);
  }

  .vl-circular-bar-sharp .vl-blade {
    background: v-bind(color);
    border-radius: 4px;
    height: 7%;
    left: -10%;
    position: absolute;
    top: -3.9%;
    width: 25%;
    -webkit-animation: vl-bar-sharp-animation 1s linear infinite;
    animation: vl-bar-sharp-animation 1s linear infinite;
  }

  .vl-circular-bar-sharp .vl-blade {
    animation-duration: 1000ms;
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(1) {
    animation-delay: -500ms;
    transform: rotate(30deg) translate(146%);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(2) {
    animation-delay: -416.667ms;
    transform: rotate(60deg) translate(146%);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(3) {
    animation-delay: -333.333ms;
    transform: rotate(90deg) translate(146%);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(4) {
    animation-delay: -250ms;
    transform: rotate(120deg) translate(146%);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(5) {
    animation-delay: -166.667ms;
    transform: rotate(146deg) translate(146%);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(6) {
    animation-delay: -83.3333ms;
    transform: rotate(180deg) translate(146%);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(7) {
    animation-delay: -1000ms;
    transform: rotate(210deg) translate(146%);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(8) {
    animation-delay: -916.667ms;
    transform: rotate(240deg) translate(146%);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(9) {
    animation-delay: -833.333ms;
    transform: rotate(270deg) translate(146%);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(10) {
    animation-delay: -750ms;
    transform: rotate(300deg) translate(146%);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(11) {
    animation-delay: -666.667ms;
    transform: rotate(330deg) translate(146%);
  }

  .vl-circular-bar-sharp .vl-blade:nth-child(12) {
    animation-delay: -583.333ms;
    transform: rotate(360deg) translate(146%);
  }

  @-webkit-keyframes vl-bar-sharp-animation {
    0% {
      opacity: 1;
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
      opacity: 1;
    }
    50% {
      opacity: 0.25;
    }
    100% {
      opacity: 0.25;
    }
  }
</style>
