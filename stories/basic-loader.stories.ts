import type { Meta, StoryObj } from '@storybook/vue3'
import { BasicLoader as BasicLoaderComp } from 'vue-loading'
import { BASE_PRIMARY_COLOR, BASE_SECONDARY_COLOR, BASE_SIZE } from '../packages/vue-loading/src/const'

const meta = {
  title: 'BasicLoader',
  // @ts-ignore
  component: BasicLoaderComp,
  argTypes: {
    class: { control: 'text' },
    size: { control: 'number' },
    primaryColor: { control: 'color' },
    secondaryColor: { control: 'color' },
  },
} satisfies Meta<typeof BasicLoaderComp>

export default meta
type Story = StoryObj<typeof meta>

export const BasicLoader: Story = {
  args: {
    class: '',
    size: BASE_SIZE,
    primaryColor: BASE_PRIMARY_COLOR,
    secondaryColor: BASE_SECONDARY_COLOR,
  },
}
