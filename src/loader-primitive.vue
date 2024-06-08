<script setup lang="ts">
import { Primitive } from 'radix-vue'
import type { LoaderPrimitiveProps } from './types'

const props = defineProps<LoaderPrimitiveProps>()
</script>

<template>
  <Primitive
    v-bind="{ ...props, ...$attrs }"
  />
</template>
