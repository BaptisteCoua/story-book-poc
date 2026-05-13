<template>
  <v-btn :variant :color :prepend-icon :class="rounded"> {{ label }}</v-btn>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  variant?: "text" | "flat" | "elevated" | "outlined" | "plain" | "tonal" | undefined
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  prependIcon?: string
  rounded?: string
}>()
</script>