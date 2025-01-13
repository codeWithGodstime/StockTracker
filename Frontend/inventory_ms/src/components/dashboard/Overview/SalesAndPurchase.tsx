"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, } from "@/components/ui/chart"

const chartData = [
  { month: "January", purchase: 186, sales: 80 },
  { month: "February", purchase: 305, sales: 200 },
  { month: "March", purchase: 237, sales: 120 },
  { month: "April", purchase: 73, sales: 190 },
  { month: "May", purchase: 209, sales: 130 },
  { month: "June", purchase: 214, sales: 140 },
]

const chartConfig = {
  purchase: {
    label: "Purchase",
    color: "#2563eb",
  },
  sales: {
    label: "Sales",
    color: "#51CC5D",
  },
} satisfies ChartConfig

export function SalesAndPurchase() {
  return (
    <Card>
      <CardHeader>Sales & Purchase</CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="purchase" barSize={10} fill="var(--color-purchase)" radius={[10, 10, 0, 0]} />
            <Bar dataKey="sales" barSize={10} fill="var(--color-sales)" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
