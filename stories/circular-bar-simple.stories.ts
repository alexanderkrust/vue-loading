import type { Meta, StoryObj } from '@storybook/vue3'
import { CircularBarSimple as CircularBarSimpleComp } from '@alexanderkrust/vue-loading'
import { BASE_PRIMARY_COLOR } from '../packages/vue-loading/src/const'

const meta = {
  title: 'CircularBarSimple',
  // @ts-ignore
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
    size: 36,
    color: BASE_PRIMARY_COLOR,
  },
}
