import React from "react";
import MiniCalendar from "./MiniCalendar";
import ScheduleList from "./scheduleList";
import Link from "next/link";


export default function SidebarCalendarLayout({
    children
  }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
      <div className="flex flex-col w-[220px] h-full bg-[var(--bg-primary)] rounded-[13px]">
        <Link href="/calendar">
            <p className="px-[12px] py-[9px] text-[16px] font-[700]">Calender</p>
        </Link>
        <div className="h-[1px] mx-[0px] borderLine"></div>
        {/* small nav */}
        <div>
            <div className="hidden md:block">
                <MiniCalendar/>
            </div>
            <div className="block md:hidden">
                <div>Month</div>
                <div>Week</div>
                <div>Day</div>
            </div>
        </div>

        <Link href="/calendar/m/2" className="h-[32px] alineitems-center p-[4px] hover:bg-[hsl(var(--shadow-color)/0.3)]">
            <p className="px-[12px] text-[16px] font-[700] textaline-center">schedules</p>
        </Link>
        <div className="h-[1px] mx-[6px] borderLine"></div>
        <ScheduleList/>
      </div>
    );
}