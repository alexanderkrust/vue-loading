import { addComponent, defineNuxtModule } from '@nuxt/kit'
import { components } from './components'

// Module options TypeScript interface definition
export interface ModuleOptions {
  prefix?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@alexanderkrust/vue-loading-nuxt',
    configKey: 'vueLoading',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    prefix: '',
  },
  setup(_options, _nuxt) {
    /* const resolver = createResolver(import.meta.url) */

    // add every component from @alexanderkrust/vue-loading
    for (const component of components) {
      addComponent({
        name: `${_options.prefix}${component}`,
        export: component,
        filePath: '@alexanderkrust/vue-loading',
      })
    }
  },
})
