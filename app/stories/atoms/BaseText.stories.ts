import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BaseText from '../../components/atoms/BaseText.vue'

const textTypes = [
    'text-display-large',
    'text-display-medium',
    'text-display-small',
    'text-headline-large',
    'text-headline-medium',
    'text-headline-small',
    'text-title-large',
    'text-title-medium',
    'text-title-small',
    'text-body-large',
    'text-body-medium',
    'text-body-small',
    'text-label-large',
    'text-label-medium',
    'text-label-small',
] as const

const meta = {
    title: 'Components/Atoms/BaseText',
    component: BaseText,
    tags: ['autodocs'],
    args: {
        textType: 'text-headline-small',
        textAlignment: 'left',
        fontWeight: 'font-weight-regular',
    },
    argTypes: {
        textType: {
            control: 'select',
            options: textTypes,
        },
        textAlignment: {
            control: 'inline-radio',
            options: ['left', 'center', 'right'],
        },
        fontWeight: {
            control: 'select',
            options: [
                'font-weight-black',
                'font-weight-bold',
                'font-weight-semibold',
                'font-weight-medium',
                'font-weight-regular',
                'font-weight-light',
                'font-weight-thin',
            ],
        },
    },
    render: (args) => ({
        components: { BaseText },
        setup() {
            return { args }
        },
        template: `
          <BaseText v-bind="args" style="color:#111; background:#fff; padding:8px;">
            Le quick brown fox jumps over the lazy dog.
          </BaseText>
        `,
    }),
} satisfies Meta<typeof BaseText>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const HeadlineBold: Story = {
    args: {
        textType: 'text-headline-medium',
        fontWeight: 'font-weight-bold',
    },
}

export const LabelCentered: Story = {
    args: {
        textType: 'text-label-large',
        textAlignment: 'center',
        fontWeight: 'font-weight-medium',
    },
}
