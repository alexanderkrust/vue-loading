import type { Meta, StoryObj } from '@storybook/vue3'
import { MaterialLoader as MaterialLoaderComp } from '@alexanderkrust/vue-loading'
import { BASE_PRIMARY_COLOR, BASE_SIZE } from '../../packages/vue-loading/src/const'

const meta = {
  title: 'MaterialLoader',
  // @ts-ignore
  component: MaterialLoaderComp,
  argTypes: {
    class: { control: 'text' },
    size: { control: 'number' },
    color: { control: 'color' },
  },

} satisfies Meta<typeof MaterialLoaderComp>

export default meta
type Story = StoryObj<typeof meta>

export const MaterialLoader: Story = {
  args: {
    class: '',
    size: BASE_SIZE,
    color: BASE_PRIMARY_COLOR,
  },
}
