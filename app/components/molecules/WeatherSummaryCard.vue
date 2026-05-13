<template>
  <BaseCard variant="elevated" rounded="xl" padding="md">
    <div class="d-flex justify-space-between align-start ga-4">
      <div class="flex-grow-1">
        <BaseText variant="title" weight="bold">
          {{ weather.city }}
        </BaseText>
        <BaseText variant="caption" color="secondary">
          {{ weather.region }}, {{ weather.country }}
        </BaseText>
        <div class="mt-4 d-flex align-center ga-3">
          <div>
            <BaseText variant="title" weight="bold">
              {{ weather.temperatureC }}°C
            </BaseText>

            <BaseText variant="body">
              {{ weather.conditionText }}
            </BaseText>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column align-end ga-2">
        <BaseText variant="caption" color="secondary">
          {{ weather.localTime }}
        </BaseText>
        <BaseButton
            label="Refresh"
            @click="$emit('refresh')"
        />
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseCard from '~/components/atoms/BaseCard.vue'
import BaseText from '~/components/atoms/BaseText.vue'
import BaseButton from '~/components/atoms/BaseButton.vue'
import type { WeatherSummary } from '~/composables/useWeather'

const props = defineProps<{
  weather: WeatherSummary
}>()

defineEmits<{
  refresh: []
}>()

const iconUrl = computed(() => {
  if (props.weather.conditionIcon.startsWith('//')) {
    return `https:${props.weather.conditionIcon}`
  }
  return props.weather.conditionIcon
})
</script>