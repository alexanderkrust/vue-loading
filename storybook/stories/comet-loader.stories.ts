import type { Meta, StoryObj } from '@storybook/vue3'
import { CometLoader as CometLoaderComp } from '@alexanderkrust/vue-loading'
import { BASE_PRIMARY_COLOR, BASE_SIZE } from '../../packages/vue-loading/src/const'

const meta = {
  title: 'CometLoader',
  // @ts-ignore
  component: CometLoaderComp,
  argTypes: {
    class: { control: 'text' },
    size: { control: 'number' },
    color: { control: 'color' },
    thickness: { control: 'number' },
  },
} satisfies Meta<typeof CometLoaderComp>

export default meta
type Story = StoryObj<typeof meta>

export const CometLoader: Story = {
  args: {
    class: '',
    size: BASE_SIZE,
    color: BASE_PRIMARY_COLOR,
  },
}
