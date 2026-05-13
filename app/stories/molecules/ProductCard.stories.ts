import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import ProductCard from '~/components/molecules/ProductCard.vue'

const meta = {
    title: 'Components/Molecules/ProductCard',
    component: ProductCard,
    tags: ['autodocs'],
    args: {
        mode: 'compact',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
        title: 'Nike Air Max',
        category: 'Sneakers',
        price: '89,99 €',
        oldPrice: '119,99 €',
        badge: '-10%',
        shortDescription: 'Sneakers confortables pour tous les jours.',
        description:
            'Une paire de sneakers pensée pour un usage quotidien, avec un bon amorti, un design moderne et une excellente tenue.',
        stock: 12,
        sku: 'NK-AM-001',
        variant: 'elevated',
        elevation: 2,
        rounded: 'rounded-lg',
        onAddToCart: fn(),
    },
    render: (args) => ({
        components: { ProductCard },
        setup() {
            return { args }
        },
        template: `
      <ProductCard
        v-bind="args"
        @add-to-cart="args.onAddToCart"
      />
    `,
    }),
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

export const Compact: Story = {
    args: {
        mode: 'compact',
    },
}

export const CompactWithoutPromo: Story = {
    args: {
        mode: 'compact',
        oldPrice: '',
        badge: '',
    },
}

export const Detailed: Story = {
    args: {
        mode: 'detailed',
    },
}

export const CompactInteraction: Story = {
    args: {
        mode: 'compact',
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        await step('Check basic product information', async () => {
            await expect(canvas.getByText('Nike Air Max')).toBeVisible()
            await expect(canvas.getByText('Sneakers')).toBeVisible()
            await expect(canvas.getByText('89,99 €')).toBeVisible()
            await expect(canvas.getByText('-10%')).toBeVisible()
        })
    },
}

export const CompactWithoutPromoInteraction: Story = {
    args: {
        mode: 'compact',
        oldPrice: '',
        badge: '',
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        await step('Check promo elements are absent', async () => {
            await expect(canvas.getByText('Nike Air Max')).toBeVisible()
            await expect(canvas.queryByText('-10%')).toBeNull()
            await expect(canvas.queryByText('119,99 €')).toBeNull()
        })
    },
}

export const DetailedInteraction: Story = {
    args: {
        mode: 'detailed',
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        await step('Check detailed mode content', async () => {
            await expect(canvas.getByText('Nike Air Max')).toBeVisible()
            await expect(canvas.getByText('Une paire de sneakers pensée pour un usage quotidien, avec un bon amorti, un design moderne et une excellente tenue.')).toBeVisible()
            await expect(canvas.getByText(/Référence/i)).toBeVisible()
            await expect(canvas.getByText(/stock/i)).toBeVisible()
        })
    },
}

export const AddToCartInteraction: Story = {
    args: {
        mode: 'detailed',
    },
    play: async ({ canvasElement, args, step }) => {
        const canvas = within(canvasElement)

        await step('Click add to cart button', async () => {
            const button = canvas.getByRole('button', { name: /add to cart|ajouter|buy/i })
            await userEvent.click(button)
        })

        await step('Verify add to cart event', async () => {
            await expect(args.onAddToCart).toHaveBeenCalledTimes(1)
        })
    },
}