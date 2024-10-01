"use client"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartContainer } from "@/components/ui/chart"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const chartData = [
    { city: "Avissawella", disposed_amount: 156 },
    { city: "Colombo", disposed_amount: 305 },
    { city: "Dehiwala", disposed_amount: 237 },
    { city: "Homagama", disposed_amount: 199 },
    { city: "Kaduwela", disposed_amount: 209 },
    { city: "Kottawa", disposed_amount: 214 },
    { city: "Maharagama", disposed_amount: 237 },
    { city: "Malabe", disposed_amount: 203 },
    { city: "Moratuwa", disposed_amount: 299 },
    { city: "Nugegoda", disposed_amount: 214 },
]

const chartConfig = {
    disposed_amount: {
        label: "Disposed Amount ",
        color: "#06402b",
    },
}

// Rotate the label of chart vertically
const CustomXAxisTick = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={5}
          textAnchor="end"
          fill="#666"
          transform="rotate(-90)"
        >
          {payload.value}
        </text>
      </g>
    );
  };
  
function CityChart() {
    return (
        <Card className="w-1/2 h-auto mt-4">
            <CardHeader>
                    <CardTitle>Average Garbage Disposal by Cities</CardTitle>
                </CardHeader>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart data={chartData} margin={{ top: 30, right: 50, bottom: 70, left: 50 }}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="city"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tick={<CustomXAxisTick />}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                
                <Bar dataKey="disposed_amount" fill="var(--color-disposed_amount)" radius={4} />
            </BarChart>
        </ChartContainer>
        </Card>

    )
}

export default CityChart;