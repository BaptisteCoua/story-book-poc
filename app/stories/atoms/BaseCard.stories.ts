import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BaseCard from '../../components/atoms/BaseCard.vue'

const meta = {
    title: 'Components/Atoms/BaseCard',
    component: BaseCard,
    tags: ['autodocs'],
    args: {
        variant: 'elevated',
        color: 'secondary',
        rounded: 'rounded-xl',
        elevation: 4,
        padding: 'pa-4',
        image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
    },
    render: (args) => ({
        components: { BaseCard },
        setup() {
            return { args }
        },
        template: `
          <BaseCard v-bind="args">
            <div style="position:relative; z-index:1; min-height:180px; display:flex; align-items:flex-end;">
              <div>
                <h3 style="margin:0 0 8px;">Base Card</h3>
                <p style="margin:0;">Contenu du slot de la card</p>
              </div>
            </div>
          </BaseCard>
        `,
    }),
} satisfies Meta<typeof BaseCard>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        color: 'primary',
        elevation: 0,
    },
}

export const TonalSuccess: Story = {
    args: {
        variant: 'tonal',
        color: 'success',
        rounded: 'rounded-lg',
    },
}

export const WithoutImage: Story = {
    args: {
        image: '',
    },
}

export const WithAnotherImage: Story = {
    args: {
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    },
}