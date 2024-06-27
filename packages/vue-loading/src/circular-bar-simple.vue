<script lang="ts">
import type { PrimitiveProps } from 'radix-vue'
import LoaderPrimitive from './loader-primitive.vue'

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

const size = computed(() => `${`${props.size}px`}`)
const { color } = props
</script>

<template>
  <div :class="cn('vl-circular-bar-simple', $props.class as string)" role="progress" aria-busy="true">
    <div class="vl-blades">
      <div v-for="index in 8" :key="index" class="vl-blade" />
    </div>
  </div>
</template>

<style>
.vl-circular-bar-simple {
  display: inline-block;
  position: relative;
  width: v-bind(size);
  height: v-bind(size);
  user-select: none;
}

.vl-circular-bar-simple .vl-blades {
  position: relative;
  top: 50%;
  left: 50%;
  width: v-bind(size);
  height: v-bind(size);
}

.vl-circular-bar-simple .vl-blade {
  transform-origin: center center;
  background: v-bind(color);
  border-radius: 4px;
  height: 11%;
  left: -10%;
  position: absolute;
  top: -3.9%;
  width: 29%;
  -webkit-animation: vl-bar-simple-animation 1s linear infinite;
  animation: vl-bar-simple-animation 1s linear infinite;
}

.vl-circular-bar-simple .vl-blade {
  animation-duration: 1000ms;
}

.vl-circular-bar-simple .vl-blade:nth-child(1) {
  animation-delay: -500ms;
  transform: rotate(0deg) translate(107%);
}

.vl-circular-bar-simple .vl-blade:nth-child(2) {
  animation-delay: -375ms;
  transform: rotate(45deg) translate(107%);
}

.vl-circular-bar-simple .vl-blade:nth-child(3) {
  animation-delay: -250ms;
  transform: rotate(90deg) translate(107%);
}

.vl-circular-bar-simple .vl-blade:nth-child(4) {
  animation-delay: -125ms;
  transform: rotate(135deg) translate(107%);
}

.vl-circular-bar-simple .vl-blade:nth-child(5) {
  animation-delay: -1000ms;
  transform: rotate(180deg) translate(107%);
}

.vl-circular-bar-simple .vl-blade:nth-child(6) {
  animation-delay: -875ms;
  transform: rotate(225deg) translate(107%);
}

.vl-circular-bar-simple .vl-blade:nth-child(7) {
  animation-delay: -750ms;
  transform: rotate(270deg) translate(107%);
}

.vl-circular-bar-simple .vl-blade:nth-child(8) {
  animation-delay: -625ms;
  transform: rotate(315deg) translate(107%);
}

@-webkit-keyframes vl-bar-simple-animation {
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

@keyframes vl-bar-simple-animation {
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
