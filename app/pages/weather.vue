<template>
  <WeatherSummaryCard
    v-if="weather"
    :weather="weather"
    @refresh="load"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import WeatherSummaryCard from '~/components/molecules/WeatherSummaryCard.vue'
import { fetchWeather } from '~/composables/useWeather'

const weather = ref(null)

const load = async () => {
  weather.value = await fetchWeather('Paris')
}

onMounted(load)
</script>