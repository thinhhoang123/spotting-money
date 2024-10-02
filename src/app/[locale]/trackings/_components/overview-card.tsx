import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function OverviewCard() {
  const categoriesItem = [
    { label: '⛽ Gas', amount: '$250.00' },
    { label: '💵 Salary', amount: '$150.00' },
    { label: 'Maintenance/Repairs', amount: '$350.00' },
    { label: 'Dining Out', amount: '$450.00' },
    { label: 'Groceries', amount: '$550.00' },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Categories</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categoriesItem.map((item) => {
              return (
                <TableRow key={item.label}>
                  <TableCell>
                    <Badge variant="outline">{item.label}</Badge>
                  </TableCell>
                  <TableCell className="text-right">{item.amount}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
