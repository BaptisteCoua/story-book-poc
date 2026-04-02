import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BaseChip from './BaseChip.vue'

const meta = {
  title: 'Components/BaseChip',
  component: BaseChip,
} satisfies Meta<typeof BaseChip>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    color: 'info',
    variant: 'tonal',
    label: "par défaut piaodzjdpajzd"
  },
}
