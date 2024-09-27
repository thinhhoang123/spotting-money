import Title from '@/components/title';
import Typography from '@/components/typography';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTableDemo } from '@/components/ui/data-table';
import DatePicker from '@/components/ui/date-picker';

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
        <Typography type="h4" className="text-muted-foreground">
          May, 2024
        </Typography>
        <div className="flex gap-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Starting Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <Typography type="h2">100,000 VND</Typography>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Income</CardTitle>
            </CardHeader>
            <CardContent>
              <Typography type="h2">100,000 VND</Typography>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Expense</CardTitle>
            </CardHeader>
            <CardContent>
              <Typography type="h2">100,000 VND</Typography>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Saved this month</CardTitle>
            </CardHeader>
            <CardContent>
              <Typography type="h2">100,000 VND</Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="flex gap-4">
        <DataTableDemo />
      </section>
    </>
  );
}

