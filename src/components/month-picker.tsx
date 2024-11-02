import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Button } from './ui/button';
import Typography from './typography';
import { useState } from 'react';

interface IMonthPickerProps {
  selected: Date | undefined;
  onSelect: (date: Date) => void;
}
export default function MonthPicker({ selected, onSelect }: IMonthPickerProps) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const [year, setYear] = useState(() =>
    selected ? selected.getFullYear() : new Date().getFullYear()
  );
  const [monthData, setMonthData] = useState(() => {
    const currentMonth = selected ? selected.getMonth() : new Date().getMonth();
    return {
      currentMonth: months[currentMonth],
      selectMonth: months[currentMonth],
    };
  });

  const handleYearChange = (type: 'prev' | 'next') => {
    setYear((prevYear) => {
      if (type === 'prev') {
        return prevYear - 1;
      }
      return prevYear + 1;
    });
  };

  const handleSelectMonth = (month: string) => {
    setMonthData((prev) => ({ ...prev, selectMonth: month }));
    onSelect(new Date(year, months.indexOf(month), 1));
  };
  return (
    <div className="p-3 rounded-md border shadow">
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0">
        <div className="space-y-4 rdp-caption_start rdp-caption_end">
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleYearChange('prev')}
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <Typography type="small">{year}</Typography>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleYearChange('next')}
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {months.map((month) => {
              return (
                <Button
                  variant={
                    monthData.currentMonth === month &&
                    monthData.selectMonth !== month
                      ? 'secondary'
                      : monthData.selectMonth === month
                      ? 'default'
                      : 'ghost'
                  }
                  key={month}
                  onClick={() => handleSelectMonth(month)}
                >
                  {month}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
