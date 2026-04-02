<template>
  <span class="badge" :style="badgeStyle">{{ label }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  label: string
  tone?: 'neutral' | 'success' | 'warning'
}>(), {
  tone: 'neutral',
})

const badgeStyle = computed(() => {
  if (props.tone === 'success') {
    return { background: '#dcfce7', color: '#166534' }
  }

  if (props.tone === 'warning') {
    return { background: '#fef3c7', color: '#92400e' }
  }

  return { background: '#e2e8f0', color: '#1e293b' }
})
</script>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.35rem 0.65rem;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1;
}
</style>
