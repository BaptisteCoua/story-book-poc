import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UserCard from '../../components/molecules/UserCard.vue'
import avatarUrl from '../../assets/avatar.jpg'

const meta = {
    title: 'Components/Molecules/UserCard',
    component: UserCard,
    tags: ['autodocs'],
    args: {
        avatarSrc: avatarUrl,
        avatarAlt: 'John Doe',
        avatarSize: 40,
        textTypeTitle: 'text-headline-small',
        textTypeText: 'text-body-medium',
        labelButton: 'Ajouter',
        title: 'John Doe',
        text: 'john@doe.com',
        cardColor: 'white',
        cardVariant: 'flat',
        cardPadding: 'pa-8',
        cardRounded: 'rounded-xl',
        cardWidthClass: 'w-25',
        buttonColor: 'primary',
        buttonVariant: 'tonal',
        buttonRounded: 'rounded-lg',
    },
} satisfies Meta<typeof UserCard>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Compact: Story = {
    args: {
        avatarSize: 32,
        textTypeTitle: 'text-title-medium',
        textTypeText: 'text-body-small',
        cardPadding: 'pa-4',
        cardWidthClass: 'w-33',
        labelButton: 'Voir',
    },
}

export const HighlightedSuccess: Story = {
    args: {
        title: 'Sarah Connor',
        text: 'Lead Product Designer',
        cardColor: 'success',
        cardVariant: 'tonal',
        buttonColor: 'success',
        buttonVariant: 'elevated',
        labelButton: 'Inviter',
    },
}

export const WarningOutlined: Story = {
    args: {
        title: 'Compte à valider',
        text: 'Action requise',
        cardColor: 'warning',
        cardVariant: 'outlined',
        buttonColor: 'warning',
        buttonVariant: 'outlined',
        labelButton: 'Vérifier',
    },
}

export const LongContent: Story = {
    args: {
        title: 'Alexandre Montaigne de la Roche',
        text: 'alexandre.montaigne.de.la.roche@very-long-domain-example.com',
        labelButton: 'Envoyer un message',
        cardWidthClass: 'w-50',
    },
}
