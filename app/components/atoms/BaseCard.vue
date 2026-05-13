<template>
  <v-card
      :variant="variant"
      :elevation="elevation"
      :class="[rounded, padding]"
  >
    <slot />
  </v-card>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
      variant?: 'elevated' | 'flat' | 'tonal' | 'outlined' | 'text' | 'plain'
      elevation?: number
      rounded?: string
      padding?: string
    }>(),
    {
      variant: 'elevated',
      elevation: 2,
      rounded: 'rounded-lg',
      padding: 'pa-0',
    }
)
</script>