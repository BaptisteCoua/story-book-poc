<template>
  <BaseCard
      :variant="variant"
      :elevation="elevation"
      :rounded="rounded"
      padding="pa-0"
      class="overflow-hidden"
      :class="{ 'product-card--hover': mode === 'compact' }"
  >
    <div class="position-relative overflow-hidden">
      <ProductImage
          :src="image"
          :height="mode === 'compact' ? 200 : 320"
          class="product-card__image d-block w-100"
          style="object-fit: cover;"
      />
      <div
          v-if="badge"
          class="position-absolute ma-3"
          style="top: 0; left: 0;"
      >
        <ProductBadge class="bg-blue text-white" :label="badge" />
      </div>
    </div>
    <div class="pa-4 d-flex flex-column ga-3">
      <ProductCategory :label="category" />
      <ProductTitle
          :label="title"
          :size="mode"
      />
      <p
          v-if="shortDescription"
          class="text-body-2 text-medium-emphasis ma-0"
      >
        {{ shortDescription }}
      </p>
      <div class="d-flex align-baseline ga-2">
        <ProductPrice
            :price="price"
            :old-price="oldPrice"
            :size="mode"
        />
      </div>
      <template v-if="mode === 'detailed'">
        <div
            v-if="description"
            class="d-flex flex-column ga-1"
        >
          <span class="text-subtitle-2 font-weight-medium">Description</span>
          <p class="text-body-2 text-medium-emphasis ma-0">{{ description }}</p>
        </div>
        <div class="d-flex justify-space-between flex-wrap ga-3">
          <div v-if="stock !== undefined">
            <span class="text-caption text-medium-emphasis d-block mb-1">Stock</span>
            <div class="d-flex align-center ga-1">
              <span
                  class="product-card__stock-dot rounded-circle flex-shrink-0"
                  :class="stock <= 5 ? 'bg-warning' : 'bg-success'"
              />
              <span class="text-body-2 font-weight-medium">
                {{ stock > 0 ? `${stock} disponibles` : 'Rupture de stock' }}
              </span>
            </div>
          </div>
          <div v-if="sku">
            <span class="text-caption text-medium-emphasis d-block mb-1">Référence</span>
            <div class="text-body-2 font-weight-medium">{{ sku }}</div>
          </div>
        </div>
        <div class="d-flex ga-3 flex-wrap mt-2">
          <ProductButton
              label="Ajouter au panier"
              color="primary"
              @click="$emit('add-to-cart')"
          />
        </div>
      </template>
      <template v-else>
        <div class="mt-1">
          <ProductButton
              label="Voir le produit"
              variant="text"
              color="primary"
              append-icon="mdi-arrow-right"
          />
        </div>
      </template>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '~/components/atoms/BaseCard.vue'
import ProductImage from '~/components/atoms/product/ProductImage.vue'
import ProductBadge from '~/components/atoms/product/ProductBadge.vue'
import ProductCategory from '~/components/atoms/product/ProductCategory.vue'
import ProductTitle from '~/components/atoms/product/ProductTitle.vue'
import ProductPrice from '~/components/atoms/product/ProductPrice.vue'
import ProductButton from '~/components/atoms/product/ProductButton.vue'

defineEmits<{
  'add-to-cart': []
}>()

withDefaults(
    defineProps<{
      mode?: 'compact' | 'detailed'
      image: string
      title: string
      category: string
      price: string
      oldPrice?: string
      badge?: string
      shortDescription?: string
      description?: string
      stock?: number
      sku?: string
      variant?: 'elevated' | 'flat' | 'tonal' | 'outlined' | 'text' | 'plain'
      elevation?: number
      rounded?: string
    }>(),
    {
      mode: 'compact',
      variant: 'elevated',
      elevation: 2,
      rounded: 'rounded-lg',
    }
)
</script>