import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BaseButton from '../../components/atoms/BaseButton.vue'

const meta = {
  title: 'Components/Atoms/BaseButton',
  component: BaseButton,
} satisfies Meta<typeof BaseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    color: 'info',
    variant: 'tonal',
    label: "Ajouter",
    prependIcon:"mdi-plus",
    rounded:"rounded-xl"
  },
}
