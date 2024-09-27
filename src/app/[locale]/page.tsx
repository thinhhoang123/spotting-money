import Title from '@/components/title';
import Typography from '@/components/typography';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTableDemo } from '@/components/ui/data-table';
import DatePicker from '@/components/ui/date-picker';

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
export default function Home() {
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
        <div className="flex gap-4">
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

      <section className="flex gap-4">
        <DataTableDemo />
      </section>
    </>
  );
}
