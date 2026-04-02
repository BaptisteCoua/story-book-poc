import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BaseBadge from './BaseBadge.vue'

const meta = {
  title: 'Components/BaseBadge',
  component: BaseBadge,
  tags: ['autodocs'],
  args: {
    label: 'Default badge',
    tone: 'neutral',
  },
  argTypes: {
    tone: {
      control: 'inline-radio',
      options: ['neutral', 'success', 'warning'],
    },
  },
} satisfies Meta<typeof BaseBadge>

export default meta

type Story = StoryObj<typeof meta>

export const Neutral: Story = {}

export const Success: Story = {
  args: {
    label: 'Saved',
    tone: 'success',
  },
}

export const Warning: Story = {
  args: {
    label: 'Pending review',
    tone: 'warning',
  },
}
