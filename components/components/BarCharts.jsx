"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive bar chart";

const chartData = [
  { date: "2024-01-01", desktop: 0, mobile: 0 },
  { date: "2024-02-03", desktop: 1, mobile: 1 },
  { date: "2024-03-06", desktop: 3, mobile: 3 },
  { date: "2024-04-07", desktop: 1, mobile: 1 },
  { date: "2024-04-08", desktop: 2, mobile: 2 },
  { date: "2024-05-09", desktop: 1, mobile: 1 },
  { date: "2024-06-10", desktop: 2, mobile: 2 },
  { date: "2024-07-11", desktop: 3, mobile: 3 },
  { date: "2024-08-12", desktop: 3, mobile: 3 },
  { date: "2024-09-12", desktop: 3, mobile: 3 },
];

const chartConfig = {
  views: {
    label: "Projects",
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-2)",
  },
  mobile: {
    label: "Mobile Responsive",
    color: "var(--chart-1)",
  },
};

export function BarCharts() {
  const [activeChart, setActiveChart] = React.useState("desktop");

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  );

  return (
    <Card className="py-0 sm:w-[80%] h-full md:w-full sm:px-auto max-h-[440px]">
      <CardHeader className="flex flex-row items-stretch border-b !p-0 sm:flex-row sm:mx-auto">
        <div className="text-left mr-auto gap-1 pt-4 w-[280px] p-3 ">
          <CardTitle className="pt-4 pr-4">Projects</CardTitle>
          <CardDescription>Showing month by month</CardDescription>
        </div>
        <div className="flex">
          {["desktop", "mobile"].map((key) => {
            const chart = key;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="data-[active=true]:bg-muted/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-muted-foreground text-xs mx-10 pl-10">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg leading-none font-bold sm:text-3xl pl-10">
                  {total[key].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
