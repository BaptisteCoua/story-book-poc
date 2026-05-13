<template>
  <span class="text-caption text-medium-emphasis">
    {{ label }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>