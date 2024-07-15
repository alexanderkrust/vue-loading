<script setup lang="ts">
import { BasicLoader, CircularBarSharp, CircularBarSimple, MaterialLoader, MoonLoader, CometLoader } from '@alexanderkrust/vue-loading'

const generateCodeSnippet = (componentName: string) => {
  return `
    <${componentName} :size="36" />
  `
}

const packageName = `@alexanderkrust/vue-loading`

const loaderDefinition = {
  basic: {
    component: BasicLoader,
    name: 'BasicLoader',
    importSnippet: `import { BasicLoader } from '${packageName}'`,
    codeSnippet: generateCodeSnippet('BasicLoader'),
    props: [
      { name: 'primaryColor', type: 'string' },
      { name: 'secondaryColor', type: 'string' },
      { name: 'size', type: 'number' },
      { name: 'asChild', type: 'boolean' },
      { name: 'as', type: 'AsTag | Component'}
    ]
  },
  material: {
    component: MaterialLoader,
    name: 'MaterialLoader',
    importSnippet: `import { MaterialLoader } from '${packageName}'`,
    codeSnippet: generateCodeSnippet('MaterialLoader'),
    props: [
      { name: 'color', type: 'string' },
      { name: 'size', type: 'number' },
      { name: 'asChild', type: 'boolean' },
      { name: 'as', type: 'AsTag | Component'}
    ]
  },
  moon: {
    component: MoonLoader,
    name: 'MoonLoader',
    importSnippet: `import { MoonLoader } from '${packageName}'`,
    codeSnippet: generateCodeSnippet('MoonLoader'),
    props: [
      { name: 'color', type: 'string' },
      { name: 'size', type: 'number' },
      { name: 'speed', type: 'number' },
      { name: 'asChild', type: 'boolean' },
      { name: 'as', type: 'AsTag | Component'}
    ]
  },
  moon: {
    component: MoonLoader,
    name: 'MoonLoader',
    importSnippet: `import { MoonLoader } from '${packageName}'`,
    codeSnippet: generateCodeSnippet('MoonLoader'),
    props: [
      { name: 'color', type: 'string' },
      { name: 'size', type: 'number' },
      { name: 'speed', type: 'number' },
      { name: 'asChild', type: 'boolean' },
      { name: 'as', type: 'AsTag | Component'}
    ]
  },
  comet: {
    component: CometLoader,
    name: 'CometLoader',
    importSnippet: `import { CometLoader } from '${packageName}'`,
    codeSnippet: generateCodeSnippet('CometLoader'),
    props: [
      { name: 'color', type: 'string' },
      { name: 'size', type: 'number' },
      { name: 'asChild', type: 'boolean' },
      { name: 'as', type: 'AsTag | Component'}
    ]
  },
  circularBarSimple: {
    component: CircularBarSimple,
    name: 'CircularBarSimple',
    importSnippet: `import { CircularBarSimple } from '${packageName}'`,
    codeSnippet: generateCodeSnippet('CircularBarSimple'),
    props: [
      { name: 'color', type: 'string' },
      { name: 'size', type: 'number' },
      { name: 'asChild', type: 'boolean' },
      { name: 'as', type: 'AsTag | Component'}
    ]
  }
}

const codeSnippetClass = "bg-slate-900 mt-2 p-4 tracking-tight rounded-md w-full text-gray-300"
</script>

<template>
  <Header />
  <div class="">
    <h1 class="text-5xl leading-tight font-bold tracking-tighter text-center py-24 px-4 text-gray-800">
      Collection of loading indicator components <br/> for your <VueLogo /> project
    </h1>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto text-sm">
    <div v-for="(loader) of Object.values(loaderDefinition)" class="flex flex-col justify-start items-center p-4">
      <component :is="loader.component" :size="38" />

      <h3 class="font-semibold py-4">{{ loader.name }}</h3>
      <div :class="`${codeSnippetClass} min-h-20 flex items-center`">
        <code class="leading-snug">{{ loader.importSnippet }}</code>
      </div>
      <div :class="codeSnippetClass">
        <code class="text-sm leading-tight">
          {{ loader.codeSnippet }}
        </code>
      </div>
      <div :class="`${codeSnippetClass} flex-1`">
        <div class="font-bold mb-1"># Props: </div>
        <template v-for="(prop) of loader.props">
          <code class="text-sm leading-tight"><b>{{ prop.name }}:</b> {{ prop.type }};</code><br/>
        </template>
      </div>
    </div>
  </div>
</template>

