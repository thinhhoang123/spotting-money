'use client';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from './ui/button';

export default function ReactDatePicker({ className }: { className?: string }) {
  const [startDate, setStartDate] = useState<Date | null>();

  return (
    <div className="w-auto">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<CustomInput />}
        dateFormat="MM/yyyy"
        className={cn(className)}
        showMonthYearPicker
      />
    </div>
  );
}

const CustomInput = forwardRef<
  HTMLButtonElement,
  { value?: any; onClick?: () => any; className?: string }
>(function CustomInput({ value, onClick, className }, ref) {
  return (
    <Button
      variant={'outline'}
      onClick={onClick}
      ref={ref}
      className={cn(
        'w-[280px] justify-start text-left font-normal',
        !value && 'text-muted-foreground',
        className
      )}
    >
      <CalendarIcon className="mr-2 h-4 w-4" />
      {value ? value : <span>Pick a date</span>}
    </Button>
  );
});
