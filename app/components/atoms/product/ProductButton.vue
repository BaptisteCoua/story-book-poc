<template>
  <v-btn
      :variant="variant"
      :color="color"
      :block="block"
      v-bind="$attrs"
  >
    {{ label }}
  </v-btn>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

withDefaults(
    defineProps<{
      label: string
      variant?: 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain'
      color?: string
      block?: boolean
    }>(),
    {
      variant: 'flat',
      color: 'primary',
      block: false,
    }
)
</script>