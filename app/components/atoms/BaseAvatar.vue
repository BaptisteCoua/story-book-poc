<template>
  <v-avatar :image="src" :size :alt/>
</template>
<script setup lang="ts">
defineProps<{
  src: string;
  size: number;
  alt?: string;
}>()
</script>