import type { Meta, StoryObj } from '@storybook/vue3'
import { MoonLoader as MoonLoaderComp } from '@alexanderkrust/vue-loading'
import { BASE_PRIMARY_COLOR, BASE_SIZE, BASE_SPEED } from '../../packages/vue-loading/src/const'

const meta = {
  title: 'MoonLoader',
  // @ts-ignore
  component: MoonLoaderComp,
  argTypes: {
    class: { control: 'text' },
    size: { control: 'number' },
    color: { control: 'color' },
    speed: { control: 'number' },
  },

} satisfies Meta<typeof MoonLoaderComp>

export default meta
type Story = StoryObj<typeof meta>

export const MoonLoader: Story = {
  args: {
    class: '',
    size: BASE_SIZE,
    color: BASE_PRIMARY_COLOR,
    speed: BASE_SPEED,
  },
}
