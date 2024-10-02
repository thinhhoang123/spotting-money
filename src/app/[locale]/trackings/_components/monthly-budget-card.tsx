'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Bar, BarChart, LabelList, XAxis } from 'recharts';
export default function MonthlyBudgetCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Budget</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-[200px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <XAxis
              dataKey="label"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="amount" fill="var(--color-amount)" radius={8}>
              <LabelList position="top" />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

const chartData = [
  {
    label: 'Start Balance',
    amount: 15000000,
    fill: 'var(--color-startBalance)',
  },
  { label: 'End Balance', amount: 4000000, fill: 'var(--color-endBalance)' },
];
const chartConfig = {
  endBalance: {
    label: 'End Balance',
    color: '#f87171',
  },
  startBalance: {
    label: 'Start Balance',
    color: '#4ade80',
  },
} satisfies ChartConfig;
