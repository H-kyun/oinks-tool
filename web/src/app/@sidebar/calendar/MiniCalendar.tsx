"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DayData {
  date: number;
  isCurrentMonth: boolean;
  isPrevMonth: boolean;
}

interface ColorTheme {
  primary: string;
  secondary: string;
  sunday: string;
  saturday: string;
  selected: string;
  today: string;
  todayBorder: string;
  hover: string;
  text: string;
  lightText: string;
}

const MiniCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  // 색상을 초기값으로 바로 설정
  const colors: ColorTheme = {
    primary: 'text-gray-800',
    secondary: '#82838b',
    sunday: 'text-red-500',
    saturday: 'text-blue-500',
    selected: 'bg-blue-500 text-white',
    today: 'bg-blue-50 border-blue-400',
    todayBorder: 'border-2',
    hover: 'hover:bg-[hsl(var(--shadow-color)_/_0.3)]',
    text: 'text-[var(--text-primary)]',
    lightText: 'text-[var(--text-secondary)]'
  };

  const daysOfWeek: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const getMonthData = (date: Date): DayData[] => {
    const year: number = date.getFullYear();
    const month: number = date.getMonth();
    
    const firstDay: Date = new Date(year, month, 1);
    const lastDay: Date = new Date(year, month + 1, 0);
    
    const firstDayOfWeek: number = firstDay.getDay();
    const daysInMonth: number = lastDay.getDate();
    
    const days: DayData[] = [];
    
    // 이전 달의 날짜들
    const prevMonthLastDay: number = new Date(year, month, 0).getDate();
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: prevMonthLastDay - i,
        isCurrentMonth: false,
        isPrevMonth: true
      });
    }
    
    // 현재 달의 날짜들
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: i,
        isCurrentMonth: true,
        isPrevMonth: false
      });
    }
    
    // 다음 달의 날짜들 (6주 = 42일을 채우기 위해)
    const remainingDays: number = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: i,
        isCurrentMonth: false,
        isPrevMonth: false
      });
    }
    
    return days;
  };

  const handlePrevMonth = (): void => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = (): void => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateClick = (day: DayData): void => {
    if (!day.isCurrentMonth) {
      if (day.isPrevMonth) {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
      } else {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
      }
    }
    
    const newMonth: number = day.isPrevMonth 
      ? currentDate.getMonth() - 1 
      : day.isCurrentMonth 
        ? currentDate.getMonth() 
        : currentDate.getMonth() + 1;
    
    setSelectedDate(new Date(currentDate.getFullYear(), newMonth, day.date));
  };

  const isToday = (day: DayData): boolean => {
    const today: Date = new Date();
    return day.isCurrentMonth &&
      day.date === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear();
  };

  const isSelected = (day: DayData): boolean => {
    const month: number = day.isPrevMonth 
      ? currentDate.getMonth() - 1 
      : day.isCurrentMonth 
        ? currentDate.getMonth() 
        : currentDate.getMonth() + 1;
    
    return day.date === selectedDate.getDate() &&
      month === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear();
  };

  const monthData: DayData[] = getMonthData(currentDate);

  return (
    <div className="w-full py-1 px-2">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <h2 className={`text-[15px] font-[600] ${colors.text} pl-[12px]`}>
          {currentDate.toLocaleString('en-US', { month: 'short' }).toUpperCase()} {currentDate.getFullYear()}
        </h2>
        <div>
          <button
            onClick={handlePrevMonth}
            className={`p-1 rounded-[8px] transition-colors ${colors.hover}`}
          >
            <ChevronLeft className={`w-5 h-5 ${colors.text}`} />
          </button>
          <button
            onClick={handleNextMonth}
            className={`p-1 rounded-[8px] transition-colors ${colors.text}`}
          >
            <ChevronRight className={`w-5 h-5 ${colors.secondary}`} />
          </button>
        </div>
      </div>

      {/* 요일 헤더 */}
      <div className="grid grid-cols-7">
        {daysOfWeek.map((day: string, index: number) => (
          <div
            key={index}
            className={`text-center text-sm font-medium pt-[3px] pb-[6px] ${
              index === 0 ? colors.sunday : index === 6 ? colors.saturday : colors.text
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* 날짜 그리드 (6주 x 7일 = 42일) */}
      <div className="grid grid-cols-7 gap-1">
        {monthData.map((day: DayData, index: number) => {
          const today: boolean = isToday(day);
          const selected: boolean = isSelected(day);
          const isSunday: boolean = index % 7 === 0;
          const isSaturday: boolean = index % 7 === 6;

          return (
            <button
              key={index}
              onClick={() => handleDateClick(day)}
              className={`
                aspect-square flex items-center justify-center text-sm rounded-lg
                transition-colors duration-250 ease-out
                ${!day.isCurrentMonth ? colors.lightText : ''}
                ${day.isCurrentMonth && isSunday ? colors.sunday : ''}
                ${day.isCurrentMonth && isSaturday ? colors.saturday : ''}
                ${day.isCurrentMonth && !isSunday && !isSaturday ? colors.text : ''}
                ${today ? `font-bold ${colors.today} ${colors.todayBorder}` : ''}
                ${selected && !today ? `${colors.selected} font-semibold` : ''}
                ${!selected && !today ? colors.hover : ''}
              `}
            >
              {day.date}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MiniCalendar;