"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * DayData 인터페이스
 * 캘린더의 각 날짜 셀에 대한 데이터 구조
 */
interface DayData {
  date: number;           // 날짜 (1~31)
  isCurrentMonth: boolean; // 현재 보고 있는 달의 날짜인지
  isPrevMonth: boolean;    // 이전 달의 날짜인지
}

/**
 * ColorTheme 인터페이스
 * 캘린더의 색상 테마를 정의
 */
interface ColorTheme {
  primary: string;      // 주 색상
  secondary: string;    // 보조 색상
  sunday: string;       // 일요일 색상
  saturday: string;     // 토요일 색상
  selected: string;     // 선택된 날짜 배경 색상
  today: string;        // 오늘 날짜 배경 색상
  todayBorder: string;  // 오늘 날짜 테두리
  hover: string;        // 호버 효과 색상
  text: string;         // 기본 텍스트 색상
  lightText: string;    // 흐린 텍스트 색상 (다른 달 날짜용)
}

const MiniCalendar: React.FC = () => {
  // 현재 보여지고 있는 달의 날짜 (월 이동 시 변경됨)
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  
  // 사용자가 선택한 날짜 (클릭 시 변경됨)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  // Next.js의 usePathname 훅으로 현재 URL 경로를 가져옴
  const pathname = usePathname();
  
  /**
   * 색상 테마 객체
   * CSS 변수를 사용하여 동적 테마 지원
   */
  const colors: ColorTheme = {
    primary: 'text-[var(--text-primary)]',
    secondary: 'text-[var(--text-secondary)]',
    sunday: 'text-red-500',                                      // 일요일은 빨간색
    saturday: 'text-blue-500',                                   // 토요일은 파란색
    selected: 'bg-[hsl(var(--primary-color))] text-white',     // 선택된 날짜
    today: 'bg-[hsl(var(--primary-color)/0.1)] border-[hsl(var(--primary-color))]', // 오늘 날짜
    todayBorder: 'border-2',
    hover: 'hover:bg-[hsl(var(--shadow-color)/0.3)]',          // 호버 효과
    text: 'text-[var(--text-primary)]',
    lightText: 'text-[var(--text-secondary)]'                   // 다른 달 날짜는 흐리게
  };

  // 요일 헤더 (S=Sunday, M=Monday, ...)
  const daysOfWeek: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  /**
   * getMonthData 함수
   * 특정 달의 모든 날짜 데이터를 생성 (이전달 끝부분 + 현재달 + 다음달 시작부분)
   * 
   * @param date - 기준이 되는 날짜
   * @returns 42개의 날짜 데이터 배열 (6주 x 7일)
   */
  const getMonthData = (date: Date): DayData[] => {
    const year: number = date.getFullYear();   // 연도
    const month: number = date.getMonth();     // 월 (0~11)
    
    // 해당 달의 첫째 날과 마지막 날
    const firstDay: Date = new Date(year, month, 1);
    const lastDay: Date = new Date(year, month + 1, 0);
    
    // 첫째 날의 요일 (0=일요일, 6=토요일)
    const firstDayOfWeek: number = firstDay.getDay();
    // 해당 달의 총 일수
    const daysInMonth: number = lastDay.getDate();
    
    const days: DayData[] = [];
    
    /**
     * 1단계: 이전 달의 날짜들 추가
     * 예: 1일이 수요일이면 일~화요일에 이전 달의 마지막 날짜들을 채움
     */
    const prevMonthLastDay: number = new Date(year, month, 0).getDate();
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: prevMonthLastDay - i,  // 이전 달의 마지막 날부터 역순으로
        isCurrentMonth: false,
        isPrevMonth: true
      });
    }
    
    /**
     * 2단계: 현재 달의 날짜들 추가 (1일 ~ 마지막 일)
     */
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: i,
        isCurrentMonth: true,
        isPrevMonth: false
      });
    }
    
    /**
     * 3단계: 다음 달의 날짜들 추가
     * 캘린더를 6주(42칸)로 맞추기 위해 남은 칸을 다음 달 날짜로 채움
     */
    const remainingDays: number = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: i,
        isCurrentMonth: false,
        isPrevMonth: false  // 다음 달
      });
    }
    
    return days;
  };

  /**
   * handlePrevMonth 함수
   * 이전 달로 이동
   */
  const handlePrevMonth = (): void => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  /**
   * handleNextMonth 함수
   * 다음 달로 이동
   */
  const handleNextMonth = (): void => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  /**
   * handleDateClick 함수
   * 날짜 클릭 시 실행되는 함수
   * 
   * @param day - 클릭된 날짜 데이터
   */
  const handleDateClick = (day: DayData): void => {
    // 다른 달의 날짜를 클릭한 경우, 해당 달로 이동
    if (!day.isCurrentMonth) {
      if (day.isPrevMonth) {
        // 이전 달로 이동
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
      } else {
        // 다음 달로 이동
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
      }
    }
    
    // 클릭된 날짜가 속한 월 계산
    const newMonth: number = day.isPrevMonth 
      ? currentDate.getMonth() - 1    // 이전 달
      : day.isCurrentMonth 
        ? currentDate.getMonth()       // 현재 달
        : currentDate.getMonth() + 1;  // 다음 달
    
    // 클릭된 날짜 객체 생성
    const clickedDate = new Date(currentDate.getFullYear(), newMonth, day.date);
    
    // 선택된 날짜 업데이트
    setSelectedDate(clickedDate);
    
    // 콘솔에 선택된 날짜 출력
    console.log(`선택된 날짜: ${clickedDate.getFullYear()}년 ${clickedDate.getMonth() + 1}월 ${clickedDate.getDate()}일`);
  };

  /**
   * getDateUrl 함수
   * 각 날짜에 대한 URL을 생성
   * 
   * @param day - 날짜 데이터
   * @returns 생성된 URL 문자열 (예: /calendar/2025/10/15)
   */
  const getDateUrl = (day: DayData): string => {
    // 클릭된 날짜가 속한 월 계산
    const newMonth: number = day.isPrevMonth 
      ? currentDate.getMonth() - 1 
      : day.isCurrentMonth 
        ? currentDate.getMonth() 
        : currentDate.getMonth() + 1;
    
    const year = currentDate.getFullYear();
    const month = newMonth + 1; // JavaScript는 월이 0부터 시작하므로 +1
    const date = day.date;
    
    // 현재 경로에서 날짜 부분을 제거하고 새 날짜로 교체
    // 예: '/calendar/2025/10/15' -> '/calendar' + '/2025/10/20'
    const pathWithoutDate = pathname.split('/').slice(0, -3).join('/') || pathname;
    
    // 경로가 이미 날짜 형식을 포함하는지 확인
    const hasDatePattern = /\/\d{4}\/\d{1,2}\/\d{1,2}$/.test(pathname);
    
    if (hasDatePattern) {
      // 이미 날짜가 있으면 뒷자리만 교체
      return `${pathWithoutDate}/${year}/${month}/${date}`;
    } else {
      // 날짜가 없으면 현재 경로에 추가
      return `${pathname}/m/${year}/${month}/${date}`;
    }
  };

  /**
   * isToday 함수
   * 특정 날짜가 오늘인지 확인
   * 
   * @param day - 확인할 날짜 데이터
   * @returns 오늘이면 true, 아니면 false
   */
  const isToday = (day: DayData): boolean => {
    const today: Date = new Date();
    return day.isCurrentMonth &&
      day.date === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear();
  };

  /**
   * isSelected 함수
   * 특정 날짜가 사용자가 선택한 날짜인지 확인
   * 
   * @param day - 확인할 날짜 데이터
   * @returns 선택된 날짜면 true, 아니면 false
   */
  const isSelected = (day: DayData): boolean => {
    // 해당 날짜가 속한 월 계산
    const month: number = day.isPrevMonth 
      ? currentDate.getMonth() - 1 
      : day.isCurrentMonth 
        ? currentDate.getMonth() 
        : currentDate.getMonth() + 1;
    
    // 날짜, 월, 연도가 모두 일치하는지 확인
    return day.date === selectedDate.getDate() &&
      month === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear();
  };

  // 현재 달의 모든 날짜 데이터 생성 (42개)
  const monthData: DayData[] = getMonthData(currentDate);

  return (
    <div className="w-full py-2 px-3">
      
      {/* 헤더: 현재 월/년도 표시 및 이전/다음 달 버튼 */}
      <div className="flex items-center justify-between mb-3">
        {/* 현재 월/년도 표시 (예: OCT 2025) */}
        <h2 className={`text-[15px] font-[600] ${colors.text}`}>
          {currentDate.toLocaleString('en-US', { month: 'short' }).toUpperCase()} {currentDate.getFullYear()}
        </h2>
        
        {/* 이전/다음 달 이동 버튼 */}
        <div className="flex gap-1">
          {/* 이전 달 버튼 */}
          <button
            onClick={handlePrevMonth}
            className={`p-1.5 rounded-md transition-colors ${colors.hover}`}
          >
            <ChevronLeft className={`w-4 h-4 ${colors.text}`} />
          </button>
          
          {/* 다음 달 버튼 */}
          <button
            onClick={handleNextMonth}
            className={`p-1.5 rounded-md transition-colors ${colors.hover}`}
          >
            <ChevronRight className={`w-4 h-4 ${colors.text}`} />
          </button>
        </div>
      </div>

      {/* 요일 헤더 (일~토) */}
      <div className="grid grid-cols-7 mb-2">
        {daysOfWeek.map((day: string, index: number) => (
          <div
            key={index}
            className={`text-center text-xs font-medium py-2 ${
              index === 0 ? colors.sunday :      // 일요일 (빨간색)
              index === 6 ? colors.saturday :    // 토요일 (파란색)
              colors.text                        // 평일 (기본 색상)
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* 날짜 그리드 (6주 x 7일 = 42칸) */}
      <div className="grid grid-cols-7 gap-0.5">
        {monthData.map((day: DayData, index: number) => {
          // 각 날짜의 상태 확인
          const today: boolean = isToday(day);          // 오늘인지
          const selected: boolean = isSelected(day);    // 선택된 날짜인지
          const isSunday: boolean = index % 7 === 0;    // 일요일인지 (7로 나눈 나머지가 0)
          const isSaturday: boolean = index % 7 === 6;  // 토요일인지 (7로 나눈 나머지가 6)

          return (
            <Link
              key={index}
              href={getDateUrl(day)}  // 각 날짜에 맞는 URL 설정
              onClick={() => handleDateClick(day)}  // 클릭 시 상태 업데이트
              className={`
                aspect-square flex items-center justify-center text-xs rounded-md
                transition-all duration-200 ease-out
                ${!day.isCurrentMonth ? colors.lightText : ''}  /* 다른 달 날짜는 흐리게 */
                ${day.isCurrentMonth && isSunday ? colors.sunday : ''}  /* 일요일 색상 */
                ${day.isCurrentMonth && isSaturday ? colors.saturday : ''}  /* 토요일 색상 */
                ${day.isCurrentMonth && !isSunday && !isSaturday ? colors.text : ''}  /* 평일 색상 */
                ${today ? `font-bold ${colors.today} ${colors.todayBorder}` : ''}  /* 오늘 스타일 */
                ${selected && !today ? `${colors.selected} font-semibold shadow-sm` : ''}  /* 선택된 날짜 스타일 */
                ${!selected && !today && day.isCurrentMonth ? colors.hover : ''}  /* 호버 효과 */
              `}
            >
              {day.date}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MiniCalendar;