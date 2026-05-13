export type CartItem = {
    id: number | string
    title: string
    price: number
    quantity: number
    image: string
}

type Product = {
    id: number
    image: string
    title: string
    category: string
    price: string
    oldPrice?: string
    badge?: string
    shortDescription: string
    description: string
    stock: number
    sku: string
}

export function useCart() {
    const cartItems = useState<CartItem[]>('cart-items', () => [])

    function parsePrice(price: string) {
        return Number(price.replace('€', '').replace(/\s/g, '').replace(',', '.'))
    }

    function addToCart(product: Product) {
        const existingItem = cartItems.value.find((item) => item.id === product.id)

        if (existingItem) {
            existingItem.quantity += 1
            return
        }

        cartItems.value.push({
            id: product.id,
            title: product.title,
            image: product.image,
            price: parsePrice(product.price),
            quantity: 1,
        })
    }

    function increaseQuantity(id: number | string) {
        const item = cartItems.value.find((product) => product.id === id)
        if (!item) return
        item.quantity += 1
    }

    function decreaseQuantity(id: number | string) {
        const item = cartItems.value.find((product) => product.id === id)
        if (!item) return

        if (item.quantity > 1) {
            item.quantity -= 1
            return
        }

        cartItems.value = cartItems.value.filter((product) => product.id !== id)
    }

    function removeItem(id: number | string) {
        cartItems.value = cartItems.value.filter((product) => product.id !== id)
    }

    function clearCart() {
        cartItems.value = []
    }

    return {
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,
    }
}