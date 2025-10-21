"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

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

const MonthCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  const colors: ColorTheme = {
    primary: 'text-[var(--text-primary)]',
    secondary: 'text-[var(--text-secondary)]',
    sunday: 'text-red-500',
    saturday: 'text-blue-500',
    selected: 'bg-[hsl(var(--primary-color))] text-white',
    today: 'bg-[hsl(var(--primary-color)/0.1)] border-[hsl(var(--primary-color))]',
    todayBorder: 'border-2',
    hover: 'hover:bg-[hsl(var(--shadow-color)/0.3)]',
    text: 'text-[var(--text-primary)]',
    lightText: 'text-[var(--text-muted)]'
  };

  const daysOfWeek: string[] = ['Sun', 'M', 'T', 'W', 'T', 'F', 'S'];

  // ISO 8601 주차 계산 (완전히 새로 작성)
  const getWeekNumber = (date: Date): number => {
    // 입력 날짜 복사
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    
    // 요일 구하기 (일요일=0, 월요일=1, ..., 토요일=6)
    const dayNum = d.getUTCDay() || 7; // 일요일을 7로 변환
    
    // 가장 가까운 목요일로 설정 (ISO 8601 기준)
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    
    // 해당 연도의 1월 1일
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    
    // 주차 계산: 목요일과 1월 1일 사이의 일수를 7로 나눔
    const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
    
    return weekNo;
  };

  const getMonthData = (date: Date): DayData[] => {
    const year: number = date.getFullYear();
    const month: number = date.getMonth();
    
    const firstDay: Date = new Date(year, month, 1);
    const lastDay: Date = new Date(year, month + 1, 0);
    
    const firstDayOfWeek: number = firstDay.getDay();
    const daysInMonth: number = lastDay.getDate();
    
    const days: DayData[] = [];
    
    const prevMonthLastDay: number = new Date(year, month, 0).getDate();
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: prevMonthLastDay - i,
        isCurrentMonth: false,
        isPrevMonth: true
      });
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: i,
        isCurrentMonth: true,
        isPrevMonth: false
      });
    }
    
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
    <div className="flex flex-col w-full h-full contentsCard">
      {/* 헤더 */}
      <div className="h-[55px] flex items-center justify-between py-[10px] px-[8px]">
        <div className='flex items-center'>
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrevMonth}
              className={`flex h-[34px] w-[34px] items-center justify-center p-1.5 rounded-[10px] transition-colors border borderLine ${colors.hover}`}
            >
              <ChevronLeft className={`w-[16px] h-4 ${colors.text}`} />
            </button>
            <Link
              href={"/calendar"}
              className={`flex h-[34px] items-center px-[8px] py-[4px] rounded-[8px] transition-colors border borderLine ${colors.hover}`}
            >
              <p className='text-[14px] font-[500]'>Today</p>
            </Link>
            <button
              onClick={handleNextMonth}
              className={`flex h-[34px] w-[34px] items-center justify-center p-1.5 rounded-[10px] transition-colors border borderLine ${colors.hover}`}
            >
              <ChevronRight className={`w-4 h-4 ${colors.text}`} />
            </button>
          </div>
          <h2 className={`text-[18px] font-[600] ${colors.text} mx-[12px]`}>
            {currentDate.toLocaleString('en-US', { month: 'long' }).toUpperCase()} {currentDate.getFullYear()}
          </h2>
        </div>
        <div className="flex gap-1">
          <button
            onClick={handlePrevMonth}
            className={`p-1.5 rounded-md transition-colors ${colors.hover}`}
          >
            <ChevronLeft className={`w-4 h-4 ${colors.text}`} />
          </button>
          <button
            onClick={handleNextMonth}
            className={`p-1.5 rounded-md transition-colors ${colors.hover}`}
          >
            <ChevronRight className={`w-4 h-4 ${colors.text}`} />
          </button>
        </div>
      </div>

      <div className="h-[2px] borderCard"></div>

      <div className='flex-1 flex'>
        <div className='flex-1 flex flex-col min-h-0 borderLine border-x overflow-hidden'>
          {/* 요일 헤더 */}
          <div className="grid gap-0.25 bg-[var(--border-color)] flex-shrink-0" style={{ gridTemplateColumns: '40px repeat(7, 1fr)' }}>
            {/* 주차 컬럼 (좁게) */}
            <div className="text-center text-xs font-medium py-4 secondCard">
              {/* 빈 칸 */}
            </div>
            {daysOfWeek.map((day: string, index: number) => (
              <div
                key={index}
                className={`text-center text-xs font-medium py-4 secondCard ${
                  index === 0 ? colors.sunday : index === 6 ? colors.saturday : colors.text
                }`}
              >
                {day}
              </div>
            ))}
          </div>
          <div className="h-[1px] borderCard"></div>
          {/* 날짜 그리드 */}
          <div 
            className="w-full h-full min-h-0 flex-1 grid grid-rows-6 gap-0.25 bg-[var(--border-color)]"
            style={{ gridTemplateColumns: '40px repeat(7, 1fr)' }}
          >
            {Array.from({ length: 6 }).map((_, weekIndex) => {
              const weekStartIndex = weekIndex * 7;
              const weekDays = monthData.slice(weekStartIndex, weekStartIndex + 7);
              
              // 해당 주의 목요일을 찾아서 주차 계산 (ISO 8601 표준)
              // 일요일(0)부터 시작하므로 목요일은 인덱스 4
              const thursdayDay = weekDays[4]; // 목요일
              let weekDate: Date;
              
              if (thursdayDay.isPrevMonth) {
                weekDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, thursdayDay.date);
              } else if (thursdayDay.isCurrentMonth) {
                weekDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), thursdayDay.date);
              } else {
                weekDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, thursdayDay.date);
              }
              
              const weekNumber = getWeekNumber(weekDate);

              return (
                <React.Fragment key={weekIndex}>
                  {/* 주차 표시 (좁은 컬럼) */}
                  <div className={`flex items-center justify-center text-[11px] font-medium secondCard ${colors.lightText}`}>
                    W{weekNumber}
                  </div>
                  
                  {/* 해당 주의 날짜들 */}
                  {weekDays.map((day: DayData, dayIndex: number) => {
                    const today: boolean = isToday(day);
                    const selected: boolean = isSelected(day);
                    const isSunday: boolean = dayIndex === 0;
                    const isSaturday: boolean = dayIndex === 6;

                    return (
                      <button
                        key={`${weekIndex}-${dayIndex}`}
                        onClick={() => handleDateClick(day)}
                        className={`
                          flex items-center justify-center text-xs
                          transition-colors duration-100 contentsCard hover-overlay
                          ${!day.isCurrentMonth ? colors.lightText : ''}
                          ${day.isCurrentMonth && isSunday ? colors.sunday : ''}
                          ${day.isCurrentMonth && isSaturday ? colors.saturday : ''}
                          ${day.isCurrentMonth && !isSunday && !isSaturday ? colors.text : ''}
                          ${today ? `font-bold ${colors.today} ${colors.todayBorder}` : ''}
                          ${selected && !today ? `${colors.selected} font-semibold shadow-sm` : ''}
                          ${!selected && !today && day.isCurrentMonth ? colors.hover : ''}
                        `}
                      >
                        {day.date}
                      </button>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthCalendar;