import type { Preview } from '@storybook/vue3-vite'
import { setup } from '@storybook/vue3'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { worker } from "../../../app/mocks/handler";

setup((app) => {
  app.use(createVuetify())
})

await worker.start({
  onUnhandledRequest: 'bypass',
})

const preview: Preview = {
  decorators: [
    (story) => ({
      components: { story },
      template: '<v-app><v-main><story /></v-main></v-app>',
    }),
  ],
}

export default preview