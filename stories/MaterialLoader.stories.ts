import type { Meta, StoryObj } from '@storybook/vue3'
import MaterialLoaderComp from '../src/material-loader.vue'

const meta = {
  title: 'MaterialLoader',
  component: MaterialLoaderComp,
  argTypes: {
  },

} satisfies Meta<typeof MaterialLoaderComp>

export default meta
type Story = StoryObj<typeof meta>

export const MaterialLoader: Story = {
  args: {
    size: 28,
    color: '#42b883',
  },
}
