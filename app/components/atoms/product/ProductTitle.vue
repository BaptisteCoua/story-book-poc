<template>
  <h3 :class="[sizeClass, 'font-weight-bold']">
    {{ label }}
  </h3>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
      label: string
      size?: 'compact' | 'detailed'
    }>(),
    {
      size: 'compact',
    }
)

const sizeClass = computed(() =>
    props.size === 'detailed' ? 'text-h5' : 'text-subtitle-1'
)
</script>