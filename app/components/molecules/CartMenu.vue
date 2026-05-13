<template>
  <v-menu
      v-model="menuOpen"
      :close-on-content-click="false"
      location="bottom end"
  >
    <template #activator="{ props }">
      <v-btn
          icon
          v-bind="props"
          variant="text"
          class="bg-black"
      >
        <v-badge
            v-if="totalItems > 0"
            :content="totalItems"
            color="error"
            floating
        >
          <v-icon>mdi-cart-outline</v-icon>
        </v-badge>
        <v-icon v-else>
          mdi-cart-outline
        </v-icon>
      </v-btn>
    </template>
    <v-card min-width="360" max-width="420">
      <div class="pa-4 d-flex align-center justify-space-between">
        <span class="text-subtitle-1 font-weight-bold">Mon panier</span>
        <span class="text-caption text-medium-emphasis">
          {{ totalItems }} article{{ totalItems > 1 ? 's' : '' }}
        </span>
      </div>
      <v-divider />
      <div v-if="items.length === 0" class="pa-6 text-center">
        <v-icon size="36" class="mb-2 text-medium-emphasis">
          mdi-cart-outline
        </v-icon>
        <p class="text-body-2 text-medium-emphasis ma-0">
          Votre panier est vide
        </p>
      </div>
      <v-list v-else class="py-0">
        <v-list-item
            v-for="item in items"
            :key="item.id"
            class="py-3"
        >
          <template #prepend>
            <v-avatar rounded="lg" size="56">
              <v-img :src="item.image" cover />
            </v-avatar>
          </template>
          <v-list-item-title class="font-weight-medium">
            {{ item.title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ formatPrice(item.price) }}
          </v-list-item-subtitle>
          <template #append>
            <div class="d-flex flex-column align-end ga-2">
              <div class="d-flex align-center ga-1">
                <v-btn
                    icon="mdi-minus"
                    size="x-small"
                    variant="outlined"
                    @click="$emit('decrease-quantity', item.id)"
                />
                <span class="text-body-2 font-weight-medium px-2">
                  {{ item.quantity }}
                </span>
                <v-btn
                    icon="mdi-plus"
                    size="x-small"
                    variant="outlined"
                    @click="$emit('increase-quantity', item.id)"
                />
              </div>
              <v-btn
                  size="x-small"
                  variant="text"
                  color="error"
                  @click="$emit('remove-item', item.id)"
              >
                Supprimer
              </v-btn>
            </div>
          </template>
        </v-list-item>
        <v-divider />
      </v-list>
      <div v-if="items.length > 0" class="pa-4 d-flex flex-column ga-3">
        <div class="d-flex align-center justify-space-between">
          <span class="text-body-1 font-weight-bold">Total</span>
          <span class="text-body-1 font-weight-bold">
            {{ formatPrice(totalPrice) }}
          </span>
        </div>
        <div class="d-flex ga-2">
          <v-btn
              variant="outlined"
              @click="$emit('clear-cart')"
          >
            Vider
          </v-btn>
          <v-btn
              color="primary"
          >
            Commander
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

type CartItem = {
  id: number | string
  title: string
  price: number
  quantity: number
  image: string
}

const props = defineProps<{
  items: CartItem[]
}>()

defineEmits<{
  'increase-quantity': [id: number | string]
  'decrease-quantity': [id: number | string]
  'remove-item': [id: number | string]
  'clear-cart': []
}>()

const menuOpen = ref(false)

const totalItems = computed(() =>
    props.items.reduce((total, item) => total + item.quantity, 0)
)

const totalPrice = computed(() =>
    props.items.reduce((total, item) => total + item.price * item.quantity, 0)
)

function formatPrice(value: number) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(value)
}
</script>