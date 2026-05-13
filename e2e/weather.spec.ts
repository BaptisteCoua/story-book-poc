import { test, expect } from '@playwright/test'

test('weather page works', async ({ page }) => {
    await page.route('**/api/weather/current**', async (route) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                city: 'Paris',
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
            }),
        })
    })

    await page.goto('/weather')

    await expect(page.getByText('Paris')).toBeVisible()

    const button = page.getByRole('button', { name: /refresh/i })

    await expect(button).toBeVisible()

    await button.click()

    await expect(page.getByText(/°C/)).toBeVisible()
})