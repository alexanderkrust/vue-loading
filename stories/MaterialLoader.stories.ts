import type { Meta, StoryObj } from '@storybook/vue3'
import { MaterialLoader as MaterialLoaderComp } from 'vue-loading'

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
