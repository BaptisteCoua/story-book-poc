<template>
  <div class="d-flex align-center ga-2">
    <span :class="[priceClass, 'font-weight-bold']">
      {{ price }}
    </span>

    <span
        v-if="oldPrice"
        class="text-caption text-medium-emphasis text-decoration-line-through"
    >
      {{ oldPrice }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
      price: string
      oldPrice?: string
      size?: 'compact' | 'detailed'
    }>(),
    {
      size: 'compact',
    }
)

const priceClass = computed(() =>
    props.size === 'detailed' ? 'text-h6' : 'text-body-1'
)
</script>