<h1>⏳ vue-loading</h1>

<h2>A collection of loading spinner components for vue.</h2>

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Nuxt][nuxt-src]][nuxt-href]

<h3>Documentation:</h3>
<p><a href="https://vue-loading-docs.vercel.app">vue-loading-docs.vercel.app</a></p>

<h3>Storybook:</h3>
<p><a href="https://vue-loading-storybook.vercel.app">vue-loading-storybook.vercel.app</a></p>


<h3>Installation</h3>

```sh
pnpm add @alexanderkrust/vue-loading
# or
bun add @alexanderkrust/vue-loading
# or
npm install @alexanderkrust/vue-loading
# or
yarn add @alexanderkrust/vue-loading
```

<h3>Setup</h3>

#### Add styles to any entrypoint of your app

```js
import 'vue-loading/index.css'
```

#### Use any loading spinner component in your app

```js
<script lang="ts" setup>
  import { BasicLoader } from 'vue-loading'
</script>

<template>
  <BasicLoader />
</template>
```

<h3>Setup (Nuxt)</h3>

#### Add styles to any entrypoint of your app

```js
export default defineNuxtConfig({
  modules: ['@alexanderkrust/vue-loading/nuxt'],
  css: [/*...other css */, '@alexanderkrust/vue-loading/index.css'],
  vueLoading: {},
})
```

#### Use any loading spinner component in your app (no import needed)

```js
<template>
  <BasicLoader />
</template>
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@alexanderkrust/vue-loading

[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/@alexanderkrust/vue-loading

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
