import { format, addDays, startOfToday } from "date-fns";
import { uz } from "date-fns/locale";
import { cn } from "../../../lib/utils";


interface WeekCalendarProps {
    selectedDate: string;
    onDateChange: (date: string) => void;
}

export const WeekCalendar = ({
    selectedDate,
    onDateChange,
}: WeekCalendarProps) => {
    const today = startOfToday();

    const weekDays = Array.from({ length: 7 }).map((_, i) => addDays(today, i));

    return (
        <div className="grid grid-cols-7 gap-4">
            {weekDays.map((day) => {
                const dateStr = format(day, "yyyy-MM-dd");
                const isActive = selectedDate === dateStr;

                return (
                    <button
                        key={dateStr}
                        onClick={() => onDateChange(dateStr)}
                        className={cn(
                            "flex flex-col items-center justify-center p-3 rounded-xl border transition-all h-24 bg-white",
                            isActive
                                ? "border-sky-700 ring-2 ring-sky-700/20 shadow-sm"
                                : "border-slate-200 hover:border-sky-300 text-slate-500"
                        )}
                    >
                        <span
                            className={cn(
                                "text-[10px] uppercase font-bold tracking-wider mb-1",
                                isActive ? "text-sky-600" : "text-slate-400"
                            )}
                        >
                            {format(day, "eee", { locale: uz })}
                        </span>
                        <span
                            className={cn(
                                "text-2xl font-bold",
                                isActive ? "text-sky-700" : "text-slate-700"
                            )}
                        >
                            {format(day, "dd")}
                        </span>
                        <span className="text-[10px] font-medium opacity-60">
                            {format(day, "MMM", { locale: uz })}
                        </span>
                    </button>
                );
            })}
        </div>
    );
};
