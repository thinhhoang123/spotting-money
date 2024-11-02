'use client';

import * as React from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import MonthPicker from './month-picker';
type TModeDatePicker =
  | 'default'
  | 'multiple'
  | 'single'
  | 'range'
  | 'month'
  | undefined;
// type TCalendar = Exclude<TModeDatePicker, 'month'>;
interface IDatePickerProps {
  mode: TModeDatePicker;
}

export default function DatePicker({ mode = 'default' }: IDatePickerProps) {
  const [date, setDate] = React.useState<Date>();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[240px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        {mode === 'month' ? (
          <MonthPicker selected={date} onSelect={setDate} />
        ) : (
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        )}
      </PopoverContent>
    </Popover>
  );
}
