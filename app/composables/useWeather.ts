import { $fetch } from 'ofetch'

export interface WeatherSummary {
    city: string
    region: string
    country: string
    localTime: string
    temperatureC: number
    feelsLikeC: number
    conditionText: string
    conditionIcon: string
    isDay: boolean
    humidity: number
    windKph: number
}

export async function fetchWeather(city: string): Promise<WeatherSummary> {
    return await $fetch<WeatherSummary>('/api/weather/current', {
        query: { city },
    })
}