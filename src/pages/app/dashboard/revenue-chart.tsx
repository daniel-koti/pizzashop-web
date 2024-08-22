import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ChartConfig, ChartContainer } from '@/components/ui/chart'

const data = [
  { date: '10/12', revenue: 1200 },
  { date: '11/12', revenue: 800 },
  { date: '12/12', revenue: 900 },
  { date: '13/12', revenue: 400 },
  { date: '14/12', revenue: 2600 },
  { date: '15/12', revenue: 800 },
  { date: '16/12', revenue: 640 },
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
} satisfies ChartConfig

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="pn-8 flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle>Receita no período</CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[240px] w-full">
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('en', {
                  style: 'currency',
                  currency: 'USD',
                })
              }
            />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet[500]}
            />

            <CartesianGrid vertical={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
