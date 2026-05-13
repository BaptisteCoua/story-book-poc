import { ref, computed } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { expect, userEvent, within, screen } from 'storybook/test'
import CartMenu from '../../components/molecules/CartMenu.vue'

type CartItem = {
    id: number
    title: string
    price: number
    quantity: number
    image: string
}

function createCartMenuStory(itemsInitialValue: CartItem[]) {
    return (args: any) => ({
        components: { CartMenu },
        setup() {
            const cartItems = ref<CartItem[]>([...itemsInitialValue])

            function increaseQuantity(id: number) {
                const item = cartItems.value.find((product) => product.id === id)
                if (!item) return
                item.quantity += 1
            }

            function decreaseQuantity(id: number) {
                const item = cartItems.value.find((product) => product.id === id)
                if (!item) return

                if (item.quantity > 1) {
                    item.quantity -= 1
                    return
                }

                cartItems.value = cartItems.value.filter((product) => product.id !== id)
            }

            function removeItem(id: number) {
                cartItems.value = cartItems.value.filter((product) => product.id !== id)
            }

            function clearCart() {
                cartItems.value = []
            }

            const items = computed(() => cartItems.value)

            return {
                args,
                items,
                increaseQuantity,
                decreaseQuantity,
                removeItem,
                clearCart,
            }
        },
        template: `
      <div class="pa-8" style="min-height: 500px; background: #f5f5f5;">
        <div class="d-flex justify-end">
          <CartMenu
            v-bind="args"
            :items="items"
            @increase-quantity="increaseQuantity"
            @decrease-quantity="decreaseQuantity"
            @remove-item="removeItem"
            @clear-cart="clearCart"
          />
        </div>
      </div>
    `,
    })
}

const defaultItems: CartItem[] = [
    {
        id: 1,
        title: 'Nike Air Max',
        price: 89.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    },
    {
        id: 2,
        title: 'Casque Audio',
        price: 149.99,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    },
]

const meta = {
    title: 'Components/Molecules/CartMenu',
    component: CartMenu,
    tags: ['autodocs'],
    render: createCartMenuStory(defaultItems),
} satisfies Meta<typeof CartMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const EmptyCart: Story = {
    render: createCartMenuStory([]),
}

export const OpenMenuInteraction: Story = {
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        await step('Open cart menu', async () => {
            const cartButton = canvas.getByRole('button')
            await userEvent.click(cartButton)
        })

        await step('Check cart items are rendered', async () => {
            expect(
                screen.getByText('Nike Air Max', { selector: '.v-list-item-title' }),
            ).toBeInTheDocument()

            expect(
                screen.getByText('Casque Audio', { selector: '.v-list-item-title' }),
            ).toBeInTheDocument()
        })
    },
}

export const EmptyCartInteraction: Story = {
    render: createCartMenuStory([]),
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        await step('Open empty cart menu', async () => {
            const cartButton = canvas.getByRole('button')
            await userEvent.click(cartButton)
        })

        await step('Check empty state', async () => {
            expect(
                screen.getByText((content) =>
                    /panier|empty/i.test(content) && /vide|empty/i.test(content),
                ),
            ).toBeInTheDocument()
        })
    },
}