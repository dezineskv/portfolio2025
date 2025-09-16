"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A pie chart with a label";

const chartData = [
  { browser: "NextJs", visitors: 3, fill: "var(--color-chrome)" },
  { browser: "ReactJs", visitors: 4, fill: "var(--color-safari)" },
  { browser: "HTML", visitors: 3, fill: "var(--color-firefox)" },
  { browser: "JavaScript", visitors: 3, fill: "var(--color-edge)" },
  { browser: "Typescript", visitors: 1, fill: "var(--color-chrome)" },
  { browser: "Tailwind", visitors: 6, fill: "var(--color-safari)" },
  { browser: "Other", visitors: 2, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
};

export default function ChartPie() {
  return (
    <Card className="py-0 sm:w-[80%] md:w-full sm:px-auto">
      <CardHeader className="flex flex-col w-full items-stretch border-b p-4 sm:mx-auto mt-2">
        <CardTitle>Featured Projects</CardTitle>
        <CardDescription>January - September 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 ">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground max-w-[240px] max-h-[440px] mx-auto aspect-square h-full w-full pb-0 mb-0"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none pb-6">
          Showing featured projects for 3 quarters
        </div>
      </CardFooter>
    </Card>
  );
}
