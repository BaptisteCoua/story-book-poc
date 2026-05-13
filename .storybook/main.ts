import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import type { StorybookConfig } from '@storybook/vue3-vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },

  staticDirs: ['../public'],

  viteFinal: async (config) => {
    config.plugins = config.plugins || []
    config.plugins.push(
        vue({
          template: { transformAssetUrls },
        }),
        vuetify({ autoImport: true }),
    )
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      '~': resolve(__dirname, '../app'),
    }
    return config
  },

  addons: ['@storybook/addon-vitest']
}

export default config
