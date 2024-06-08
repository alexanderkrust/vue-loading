import type { Meta, StoryObj } from '@storybook/vue3'
import BasicLoaderComp from '../src/basic-loader.vue'

const meta = {
  title: 'BasicLoader',
  component: BasicLoaderComp,
  argTypes: {},

} satisfies Meta<typeof BasicLoaderComp>

export default meta
type Story = StoryObj<typeof meta>

export const BasicLoader: Story = {
  args: {},
}
