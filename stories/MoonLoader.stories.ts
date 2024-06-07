import type { Meta, StoryObj } from '@storybook/vue3'
import MoonLoaderComp from '../src/moon-loader.vue'

const meta = {
  title: 'MoonLoader',
  component: MoonLoaderComp,
  argTypes: {

  },

} satisfies Meta<typeof MoonLoaderComp>

export default meta
type Story = StoryObj<typeof meta>

export const MoonLoader: Story = {
  args: {
    color: '#000',
    size: 28,
    speed: 1,
  },
}
