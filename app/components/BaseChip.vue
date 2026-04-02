<template>
    <div>
        <v-btn :variant :color> {{ label }}</v-btn>
    </div>  
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  label: string
  variant: "text" | "flat" | "elevated" | "outlined" | "plain" | "tonal" | undefined
  color: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
}>(), {
  color: 'primary',
})

</script>

<style scoped>

</style>