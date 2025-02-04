"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface CarData {
  id: number
  make: string
  model: string
  year: number
  price: number
}

export function CarSalesChart({ cars }: { cars: CarData[] }) {
  const data = cars.map((car) => ({
    name: `${car.make} ${car.model}`,
    price: car.price,
  }))

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Car Prices</CardTitle>
        <CardDescription>A comparison of prices across different car models</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <ChartContainer
          config={{
            price: {
              label: "Price",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="price" fill="var(--color-price)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

