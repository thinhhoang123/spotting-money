'use client';
import Typography from '@/components/typography';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { ColumnDef } from '@tanstack/react-table';
import { Plus } from 'lucide-react';

const data: Payment[] = [
  {
    id: 1,
    date: '2024-09-21',
    title: 'Groceries',
    amount: 150.75,
    paymentBy: 1,
    categories: 3,
  },
  {
    id: 2,
    date: '2024-09-22',
    title: 'Electricity Bill',
    amount: 65.5,
    paymentBy: 2,
    categories: 1,
  },
  {
    id: 3,
    date: '2024-09-23',
    title: 'Internet Subscription',
    amount: 45.99,
    paymentBy: 1,
    categories: 2,
  },
  {
    id: 4,
    date: '2024-09-24',
    title: 'Gasoline',
    amount: 60.0,
    paymentBy: 2,
    categories: 4,
  },
  {
    id: 5,
    date: '2024-09-25',
    title: 'Dining Out',
    amount: 85.2,
    paymentBy: 2,
    categories: 5,
  },
  {
    id: 6,
    date: '2024-09-26',
    title: 'Gym Membership',
    amount: 40.0,
    paymentBy: 1,
    categories: 6,
  },
  {
    id: 7,
    date: '2024-09-27',
    title: 'Clothing Purchase',
    amount: 120.3,
    paymentBy: 1,
    categories: 7,
  },
  {
    id: 8,
    date: '2024-09-28',
    title: 'Car Maintenance',
    amount: 250.0,
    paymentBy: 2,
    categories: 8,
  },
  {
    id: 9,
    date: '2024-09-29',
    title: 'Movie Tickets',
    amount: 25.0,
    paymentBy: 1,
    categories: 9,
  },
  {
    id: 10,
    date: '2024-09-30',
    title: 'Subscription Service',
    amount: 15.99,
    paymentBy: 1,
    categories: 2,
  },
];

export type Payment = {
  id: number;
  date: string;
  title: string;
  amount: number;
  paymentBy: number;
  categories: number;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'id',
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => <Typography>{row.getValue('date')}</Typography>,
  },
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => <Typography>{row.getValue('title')}</Typography>,
  },

  {
    accessorKey: 'amount',
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'paymentBy',
    header: 'Payment By',
    cell: ({ row }) => (
      <Badge>{row.getValue('paymentBy') == 1 ? 'Cash' : 'Card'}</Badge>
    ),
  },
  {
    accessorKey: 'categories',
    header: 'Categories',
    cell: ({ row }) => <Badge>{row.getValue('categories')}</Badge>,
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.date)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function TrackingTable() {
  return (
    <>
      <div className="pb-4 flex justify-between">
        <Input
          placeholder="Filter transaction..."
          // value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
          // onChange={(event) =>
          //   table.getColumn('email')?.setFilterValue(event.target.value)
          // }
          className="max-w-sm"
        />
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Transaction
        </Button>
      </div>
      <DataTable data={data} columns={columns} />
    </>
  );
}
