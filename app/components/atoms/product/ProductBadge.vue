<template>
  <v-chip
      v-if="label"
      :size="size"
  >
    {{ label }}
  </v-chip>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
      label?: string
      size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large'
    }>(),
    {
      size: 'small',
    }
)
</script>