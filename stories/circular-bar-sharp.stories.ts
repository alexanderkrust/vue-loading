import type { Meta, StoryObj } from '@storybook/vue3'
import { CircularBarSharp as CircularBarSharpComp } from 'vue-loading'
import { BASE_PRIMARY_COLOR, BASE_SIZE } from '../packages/vue-loading/src/const'

const meta = {
  title: 'CircularBarSharp',
  // @ts-ignore
  component: CircularBarSharpComp,
  argTypes: {
    class: { control: 'text' },
    size: { control: 'number' },
    color: { control: 'color' },
  },

} satisfies Meta<typeof CircularBarSharpComp>

export default meta
type Story = StoryObj<typeof meta>

export const CircularBarSharp: Story = {
  args: {
    class: '',
    size: BASE_SIZE,
    color: BASE_PRIMARY_COLOR,
  },
}
