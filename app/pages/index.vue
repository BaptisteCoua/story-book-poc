<template>
  <v-container fluid class=" pa-0">
    <v-container>
      <v-carousel hide-delimiters show-arrows="hover" height="300" class="rounded-xl mt-4 elevation-0">
        <v-carousel-item src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2000" cover>
          <div class="d-flex flex-column justify-center fill-height px-12" style="background: rgba(0,0,0,0.2)">
            <span class="text-white text-h6">Meilleures offres sur les montres</span>
            <h2 class="text-white text-h2 font-weight-black">SMART WEARABLE.</h2>
            <p class="text-white text-h5">JUSQU'À -80%</p>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container class="py-8">
      <div class="d-flex align-center justify-space-between mb-6">
        <h2 class="text-h5 font-weight-bold">
          Acheter par <span class="text-primary">Catégories</span>
        </h2>
        <v-btn variant="text" append-icon="mdi-chevron-right" class="text-none">Voir tout</v-btn>
      </div>
      <v-row justify="center">
        <v-col v-for="cat in categories" :key="cat.name" cols="4" sm="2" class="text-center">
          <v-avatar size="100" color="white" class="elevation-1 mb-2 clickable-avatar">
            <v-img :src="cat.image" width="60" />
          </v-avatar>
          <div class="text-subtitle-2 font-weight-medium">{{ cat.name }}</div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="py-8">
      <div class="d-flex align-center justify-space-between mb-6">
        <h2 class="text-h5 font-weight-bold">
          Nos <span class="text-primary">Produits Tendances</span>
        </h2>
        <v-btn variant="text" append-icon="mdi-chevron-right" class="text-none">Voir tout</v-btn>
      </div>
      <v-row>
        <v-col
            v-for="product in products"
            :key="product.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
        >
          <div class="cursor-pointer h-100" @click="openProduct(product)">
            <ProductCard
                mode="compact"
                :image="product.image"
                :title="product.title"
                :category="product.category"
                :price="product.price"
                :old-price="product.oldPrice"
                :badge="product.badge"
                :short-description="product.shortDescription"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" max-width="900" :scrim-opacity="0.45">
      <v-card rounded="xl" class="pa-0 overflow-hidden bg-white">
        <v-row no-gutters v-if="selectedProduct">

          <v-col cols="12" sm="6" class="bg-grey-lighten-4 d-flex align-center justify-center">
            <v-img
                :src="selectedProduct.image"
                cover
                height="100%"
                min-height="400"
            />
          </v-col>
          <v-col cols="12" sm="6" class="pa-8 bg-white d-flex flex-column">
            <div class="d-flex justify-end mb-6">
              <v-btn
                  icon="mdi-close"
                  variant="tonal"
                  density="comfortable"
                  @click="closeDialog"
              />
            </div>
            <ProductCard
                mode="detailed"
                v-bind="selectedProduct"
                variant="flat"
                bg-color="transparent"
                :elevation="0"
                @add-to-cart="addToCart(selectedProduct)"
            />
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProductCard from '~/components/molecules/ProductCard.vue'

const { addToCart } = useCart()

const products = [
  { id: 1, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', title: 'Nike Zoom', category: 'Running', price: '89,99 €', oldPrice: '119,99 €', badge: '56%', shortDescription: 'Sneakers confortables', description: 'Description longue...', stock: 12, sku: 'NK-001' },
  { id: 2, image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519', title: 'Nike Air Max', category: 'Sneakers', price: '99,99 €', oldPrice: '129,99 €', badge: '20%', shortDescription: 'Idéal pour le sport', description: 'Description longue...', stock: 8, sku: 'NK-002' },
  { id: 3, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FzcXVlJTIwYXVkaW98ZW58MHx8MHx8fDA%3D', title: 'Casque beat', category: 'Audio', price: '109,99 €', oldPrice: '149,99 €', badge: '27%', shortDescription: 'Son exceptionnel', description: 'Description longue...', stock: 5, sku: 'AD-001' },
  { id: 4, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Sony', category: 'Appareil Photo', price: '79,99 €', oldPrice: '99,99 €', badge: '20%', shortDescription: 'Classique intemporel', description: 'Description longue...', stock: 20, sku: 'AD-002' },
  { id: 5, image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9udHJlJTIwY29ubmVjdGVyfGVufDB8fDB8fHww', title: 'Montres connecté', category: 'Montres', price: '89,99 €', oldPrice: '119,99 €', badge: '25%', shortDescription: 'Design audacieux', description: 'Description longue...', stock: 10, sku: 'PM-001' },
  { id: 6, image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVtYSUyMHNob2VzfGVufDB8fDB8fHww', title: 'Puma Cali', category: 'Sneakers', price: '69,99 €', oldPrice: '89,99 €', badge: '22%', shortDescription: 'Style californien', description: 'Description longue...', stock: 15, sku: 'PM-002' },
]

const categories = [
  { name: 'Running', image: 'https://plus.unsplash.com/premium_photo-1674605365723-15e6749630f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cnVubmluZ3xlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Sport', image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnR8ZW58MHx8MHx8fDA%3D' },
  { name: 'Électronique', image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUMzJUE5bCVDMyVBOWVjdHJvbmlxdWV8ZW58MHx8MHx8fDA%3D' },
  { name: 'Montres', image: 'https://plus.unsplash.com/premium_photo-1728759435328-9a5a417edef7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9udHJlc3xlbnwwfHwwfHx8MA%3D%3D' },
]

const selectedProduct = ref(null)
const dialog = ref(false)

const openProduct = (p) => { selectedProduct.value = p; dialog.value = true }
const closeDialog = () => { dialog.value = false }
</script>

<style scoped>
.clickable-avatar {
  cursor: pointer;
  transition: transform 0.2s;
}
.clickable-avatar:hover {
  transform: scale(1.1);
  border: 2px solid #008ecc;
}
</style>