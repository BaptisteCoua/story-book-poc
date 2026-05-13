<template>
  <v-app>
    <v-app-bar flat class="px-4 bg-black">
      <div class="d-flex align-center justify-space-between w-100 pa-2 ">
        <h1 class="text-h6 font-weight-bold ma-0">
          Shop
        </h1>
        <CartMenu
            :items="cartItems"
            @increase-quantity="increaseQuantity"
            @decrease-quantity="decreaseQuantity"
            @remove-item="removeItem"
            @clear-cart="clearCart"
        />
      </div>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CartMenu from '~/components/molecules/CartMenu.vue'

const {
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} = useCart()

</script>