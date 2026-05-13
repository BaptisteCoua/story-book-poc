<template>
  <div :class="[textType, textAlignment, fontWeight]">
    <slot/>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  textType?: "text-display-large" | "text-display-medium" | "text-display-small" | "text-headline-large" | "text-headline-medium" | "text-headline-small" | "text-title-large" | "text-title-medium" | "text-title-small" | "text-body-large" | "text-body-medium" | "text-body-small" | "text-label-large" | "text-label-medium" | "text-label-small"
  textAlignment?: "left" | "center" | "right"
  fontWeight?: "font-weight-black" | "font-weight-bold" |"font-weight-semibold" | "font-weight-medium" | "font-weight-regular" | "font-weight-light" | "font-weight-thin"
}>()

</script>