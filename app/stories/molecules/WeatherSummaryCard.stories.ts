import type { Meta, StoryObj } from '@storybook/vue3'
import { expect, fn, within, userEvent } from 'storybook/test'
import WeatherSummaryCard from '~/components/molecules/WeatherSummaryCard.vue'

const meta = {
    title: 'Molecules/WeatherSummaryCard',
    component: WeatherSummaryCard,
    args: {
        onRefresh: fn(),
        weather: {
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
        },
    },
    render: (args) => ({
        components: { WeatherSummaryCard },
        setup() {
            return { args }
        },
        template: `
          <WeatherSummaryCard
              :weather="args.weather"
              @refresh="args.onRefresh"
          />
        `,
    }),
} satisfies Meta<typeof WeatherSummaryCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const RefreshInteraction: Story = {
    play: async ({ canvasElement, args, step }) => {
        const canvas = within(canvasElement)

        await step('Check initial content', async () => {
            await expect(canvas.getByText('Paris')).toBeVisible()
            await expect(canvas.getByText('18°C')).toBeVisible()
            await expect(canvas.getByText('Partly cloudy')).toBeVisible()
        })

        await step('Click refresh button', async () => {
            const button = canvas.getByRole('button', { name: /refresh/i })
            await expect(button).toBeVisible()
            await userEvent.click(button)
        })

        await step('Verify refresh callback', async () => {
            await expect(args.onRefresh).toHaveBeenCalledTimes(1)
        })
    },
}