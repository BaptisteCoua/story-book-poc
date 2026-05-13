export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const query = getQuery(event)
    const city = String(query.city || 'Paris')

    const response = await $fetch<{
        location: {
            name: string
            region: string
            country: string
            localtime: string
        }
        current: {
            temp_c: number
            feelslike_c: number
            is_day: number
            humidity: number
            wind_kph: number
            condition: {
                text: string
                icon: string
            }
        }
    }>('https://api.weatherapi.com/v1/current.json', {
        query: {
            key: '4bd4c7b511ae421b97873127260804',
            q: city,
        },
    })

    return {
        city: response.location.name,
        region: response.location.region,
        country: response.location.country,
        localTime: response.location.localtime,
        temperatureC: response.current.temp_c,
        feelsLikeC: response.current.feelslike_c,
        conditionText: response.current.condition.text,
        conditionIcon: response.current.condition.icon,
        isDay: response.current.is_day === 1,
        humidity: response.current.humidity,
        windKph: response.current.wind_kph,
    }
})