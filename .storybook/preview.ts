import type { Preview } from '@storybook/vue3'
import 'vue-loading/index.css';
import './index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
