import type { Meta, StoryObj } from '@storybook/vue3'
import { MoonLoader as MoonLoaderComp } from 'vue-loading'

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
    color: '#42b883',
    size: 28,
    speed: 1,
  },
}
