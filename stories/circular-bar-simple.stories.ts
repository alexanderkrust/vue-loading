import type { Meta, StoryObj } from '@storybook/vue3'
import { CircularBarSimple as CircularBarSimpleComp } from 'vue-loading'
import { BASE_PRIMARY_COLOR, BASE_SIZE } from '../packages/vue-loading/src/const'

const meta = {
  title: 'CircularBarSimple',
  component: CircularBarSimpleComp,
  argTypes: {
    class: { control: 'text' },
    size: { control: 'number' },
    color: { control: 'color' },
  },

} satisfies Meta<typeof CircularBarSimpleComp>

export default meta
type Story = StoryObj<typeof meta>

export const CircularBarSimple: Story = {
  args: {
    class: '',
    size: BASE_SIZE,
    color: BASE_PRIMARY_COLOR,
  },
}
