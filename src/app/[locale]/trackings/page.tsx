import Title from '@/components/title';
import Typography from '@/components/typography';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTableDemo } from '@/components/ui/data-table';
import DatePicker from '@/components/ui/date-picker';
import MonthlyBudgetCard from './_components/monthly-budget-card';
import OverviewCard from './_components/overview-card';
import StatisticCard from './_components/statistic-card';

const cardData = [
  {
    title: 'Starting Balance',
    amount: '100,000 VND',
  },
  {
    title: 'Income',
    amount: '100,000 VND',
  },
  {
    title: 'Expense',
    amount: '100,000 VND',
  },
  {
    title: 'Saved this month',
    amount: '100,000 VND',
  },
];
export default function TrackingsPage() {
  return (
    <>
      <Title
        action={() => {
          return <DatePicker />;
        }}
      >
        Tracking Money
      </Title>
      <section className="flex flex-col gap-4">
        <Typography type="h4" classNames="text-muted-foreground">
          May, 2024
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cardData.map((item) => {
            return (
              <Card className="w-full" key={item.title}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Typography type="h3">{item.amount}</Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-6 2xl:grid-cols-8 gap-4">
        <div className="col-span-1 md:col-span-4 2xl:col-span-6">
          <DataTableDemo />
        </div>
        <div className="col-span-1 md:col-span-2 2xl:col-span-2 flex flex-col gap-4">
          <MonthlyBudgetCard />
          <OverviewCard />
          <StatisticCard />
        </div>
      </section>
    </>
  );
}
