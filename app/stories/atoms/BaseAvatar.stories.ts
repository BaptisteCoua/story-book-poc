import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BaseAvatar from '../../components/atoms/BaseAvatar.vue'
import avatarUrl from '../../assets/avatar.jpg'

const meta = {
    title: 'Components/Atoms/BaseAvatar',
    component: BaseAvatar,
    tags: ['autodocs'],
    args: {
        src: avatarUrl,
        size: 64,
        alt: 'Avatar utilisateur',
    },
    argTypes: {
        size: {
            control: { type: 'number', min: 16, max: 200, step: 4 },
        },
        alt: {
            control: 'text',
        },
    },
} satisfies Meta<typeof BaseAvatar>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Small: Story = {
    args: {
        size: 32,
    },
}

export const Large: Story = {
    args: {
        size: 120,
    },
}

export const WithCustomAlt: Story = {
    args: {
        alt: 'Photo de profil de John Doe',
    },
}
