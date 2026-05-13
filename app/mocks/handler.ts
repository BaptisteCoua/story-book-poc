import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'

export const worker = setupWorker(
    http.get('/api/weather/current', ({ request }) => {
        const url = new URL(request.url)
        const city = url.searchParams.get('city') || 'Paris'

        return HttpResponse.json({
            city,
            region: 'Île-de-France',
            country: 'France',
            localTime: '2026-04-08 11:30',
            temperatureC: 18,
            feelsLikeC: 17,
            conditionText: 'Partly cloudy',
            conditionIcon: '/weather-icon.png',
            isDay: true,
            humidity: 63,
            windKph: 14,
        })
    }),
)