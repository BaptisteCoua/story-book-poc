import type { StorybookConfig } from '@storybook/vue3-vite'
import vue from '@vitejs/plugin-vue'

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins = config.plugins || []
    config.plugins.push(vue())
    return config
  },
}

export default config
