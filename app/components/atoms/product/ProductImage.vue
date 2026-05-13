<template>
  <v-img
      :src="src"
      :height="height"
      :cover="cover"
  />
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
      src: string
      height?: number | string
      cover?: boolean
    }>(),
    {
      height: 180,
      cover: true,
    }
)
</script>