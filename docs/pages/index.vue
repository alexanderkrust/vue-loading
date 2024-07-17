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
  comet: {
    component: CometLoader,
    name: 'CometLoader',
    importSnippet: `import { CometLoader } from '${packageName}'`,
    codeSnippet: generateCodeSnippet('CometLoader'),
    props: [
      { name: 'color', type: 'string' },
      { name: 'size', type: 'number' },
      { name: 'thickness', type: 'number' },
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
  },
  circularBarSharp: {
    component: CircularBarSharp,
    name: 'CircularBarSharp',
    importSnippet: `import { CircularBarSharp } from '${packageName}'`,
    codeSnippet: generateCodeSnippet('CircularBarSharp'),
    props: [
      { name: 'color', type: 'string' },
      { name: 'size', type: 'number' },
      { name: 'asChild', type: 'boolean' },
      { name: 'as', type: 'AsTag | Component'}
    ]
  }
}

const codeSnippetClass = "bg-slate-900 mt-2 p-4 tracking-normal rounded-md w-full text-gray-300"
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
      <div :class="`${codeSnippetClass} min-h-20 flex items-center shadow-xl`">
        <code class="leading-normal font-bold">{{ loader.importSnippet }}</code>
      </div>
      <div :class="`${codeSnippetClass} shadow-xl`">
        <code class="text-sm font-bold">
          {{ loader.codeSnippet }}
        </code>
      </div>
      <div :class="`${codeSnippetClass} flex-1 shadow-xl`">
        <div class="font-bold mb-1"># Props: </div>
        <template v-for="(prop) of loader.props">
          <code class="text-sm leading-tight">
            <b class="text-gray-200">{{ prop.name }}:</b>
            <TooltipProvider v-if="prop.name === 'asChild'">
              <TooltipRoot>
                <TooltipTrigger>
                  <span class="text-green-300 ml-2">{{ prop.type }};</span>
                </TooltipTrigger>
                <TooltipPortal>
                  <TooltipContent
                    class="bg-slate-800 p-4 rounded-md text-gray-200"
                    :side-offset="5"
                  >
                    Change the default rendered element for the one <br/> passed as a child,
                     merging their props and behavior.<br/>
                     See <a class="text-blue-300" target="_blank" ref="noopener" href="https://www.radix-vue.com/utilities/primitive.html">here</a>.
                    <TooltipArrow
                      class="fill-white"
                      :width="8"
                    />
                  </TooltipContent>
                </TooltipPortal>
              </TooltipRoot>
            </TooltipProvider>

            <TooltipProvider v-if="prop.type === 'AsTag | Component'">
              <TooltipRoot>
                <TooltipTrigger>
                  <span class="text-green-300 ml-2">{{ prop.type }};</span>
                </TooltipTrigger>
                <TooltipPortal>
                  <TooltipContent
                    class="bg-slate-800 p-4 rounded-md text-gray-300 flex flex-col"
                    :side-offset="5"
                  >
                    <div>'a'</div></br>
                    <div>| 'button'</div></br>
                    <div>| 'div'</div></br>
                    <div>| 'form'</div></br>
                    <div>| 'h2'</div></br>
                    <div>| 'h3'</div></br>
                    <div>| 'img'</div></br>
                    <div>| 'input'</div></br>
                    <div>| 'label'</div></br>
                    <div>| 'li'</div></br>
                    <div>| 'nav'</div></br>
                    <div>| 'ol'</div></br>
                    <div>| 'p'</div></br>
                    <div>| 'span'</div></br>
                    <div>| 'svg'</div></br>
                    <div>| 'ul'</div></br>
                    <div>| 'template'</div></br>
                    <div>| ({} & string)</div>
                    <TooltipArrow
                      class="fill-white"
                      :width="8"
                    />
                  </TooltipContent>
                </TooltipPortal>
              </TooltipRoot>
            </TooltipProvider>
            <span v-if="prop.type !== 'AsTag | Component' && prop.name !== 'asChild'" class="text-green-300 ml-2">{{ prop.type }}; </span>
          </code>
          <br/>
        </template>
      </div>
    </div>
  </div>
</template>

