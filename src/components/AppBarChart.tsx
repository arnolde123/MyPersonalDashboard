"use client"

import { ChartContainer, ChartConfig, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--sidebar-ring)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--heimdall-green)",
  },
} satisfies ChartConfig


const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const AppBarChart = () => {
  return (
    <Card>
     <CardHeader>
      <CardTitle>Total Revenue - Bar</CardTitle>
        <CardDescription>
          Showing total revenue for the last 6 months
        </CardDescription>
     </CardHeader>
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
          <YAxis
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer> 
    </Card>
  );
}

export default AppBarChart;