# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: weather.spec.ts >> weather page works
- Location: e2e/weather.spec.ts:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Paris')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Paris')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e7]:
        - heading "Shop" [level=1] [ref=e8]
        - button [ref=e9] [cursor=pointer]:
          - generic [ref=e11]: 󰄑
    - main [ref=e12]:
      - generic [ref=e16]:
        - generic [ref=e17]:
          - generic [ref=e18]: Paris
          - generic [ref=e19]: Île-de-France, France
          - generic [ref=e21]:
            - generic [ref=e22]: 18°C
            - generic [ref=e23]: Partly cloudy
        - generic [ref=e24]:
          - generic [ref=e25]: 2026-04-08 11:30
          - button "Refresh" [ref=e26] [cursor=pointer]:
            - generic [ref=e27]: Refresh
  - generic:
    - img
  - generic [ref=e28]:
    - button "Toggle Nuxt DevTools" [ref=e29] [cursor=pointer]:
      - img [ref=e30]
    - generic "Page load time" [ref=e33]:
      - generic [ref=e34]: "1.2"
      - generic [ref=e35]: s
    - button "Toggle Component Inspector" [ref=e37] [cursor=pointer]:
      - img [ref=e38]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test('weather page works', async ({ page }) => {
  4  |     await page.route('**/api/weather/current**', async (route) => {
  5  |         await route.fulfill({
  6  |             status: 200,
  7  |             contentType: 'application/json',
  8  |             body: JSON.stringify({
  9  |                 city: 'Paris',
  10 |                 region: 'Île-de-France',
  11 |                 country: 'France',
  12 |                 localTime: '2026-04-08 11:30',
  13 |                 temperatureC: 18,
  14 |                 feelsLikeC: 17,
  15 |                 conditionText: 'Partly cloudy',
  16 |                 conditionIcon: '/weather-icon.png',
  17 |                 isDay: true,
  18 |                 humidity: 63,
  19 |                 windKph: 14,
  20 |             }),
  21 |         })
  22 |     })
  23 | 
  24 |     await page.goto('/weather')
  25 | 
> 26 |     await expect(page.getByText('Paris')).toBeVisible()
     |                                           ^ Error: expect(locator).toBeVisible() failed
  27 | 
  28 |     const button = page.getByRole('button', { name: /refresh/i })
  29 | 
  30 |     await expect(button).toBeVisible()
  31 | 
  32 |     await button.click()
  33 | 
  34 |     await expect(page.getByText(/°C/)).toBeVisible()
  35 | })
```