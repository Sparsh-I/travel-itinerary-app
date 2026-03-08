import { useState, useEffect, useRef } from 'react';
import { DayPicker } from 'react-day-picker';
import type { DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import '../styles/DateRangePicker.css';

interface DatePickerProps {
    selected: DateRange | undefined;
    onSelect: (date: DateRange | undefined) => void;
}

export default function DatePicker({ selected, onSelect }: DatePickerProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    function formatDate(date: Date | undefined): string {
        return date ? date.toLocaleDateString() : '';
    }

    const inputValue =
        selected?.from && selected?.to
            ? `${formatDate(selected.from)}-${formatDate(selected.to)}`
            : selected?.from
                ? `${formatDate(selected.from)}-...}`
                : '';

    return (
        <div ref={ref} className="date-range-picker-input">
            <input
                readOnly
                placeholder="Dates"
                value={inputValue}
                onClick={() => setOpen((prev) => !prev)}
                style={{ cursor: 'pointer', padding: '8px 12px', width: '260px' }}
            />

            {open && (
                <div className="date-range-picker-dropdown">
                    <DayPicker
                        mode="range"
                        selected={selected}
                        onSelect={onSelect}
                        numberOfMonths={1}
                        disabled={{ before: new Date() }}
                    />
                    <button>Clear</button>
                </div>
            )}
        </div>
    );
}
