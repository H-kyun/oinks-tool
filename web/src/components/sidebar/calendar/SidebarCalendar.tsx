"use client";
import { useAppSelector } from "@/app/_core/_store/hooks";
import MiniCalendar from "@/components/calendar/MiniCalendar";
import Link from "next/link";
import React from "react";


export default function SidebarCalendar() {
    const open = useAppSelector((s) => s.sidebar.open)
    return (
      <div className={`flex h-screen transition-all duration-300 ease-in-out overflow-hidden sideBar ${open ? "w-[230px] opacity-100 " : "w-0 opacity-0"}`}>
        {/*mian*/}
         <div className={`flex-1 whitespace-nowrap overflow-hidden contentsCard border-r-[1.5px] borderLine ${open ? "block" : "hidden"}`}>

          <Link
          href={'/calendar'}
          className="flex h-[55px] items-center justify-between px-[20px] hover-overlay">
            <p className="font-[600] text-[16px]">Calendar</p>
          </Link>
          {/* Scroll able */}
          <div className=""> 
            <div className="h-[2px] borderCard"></div>
            {/* Mini Calendar */}
            <div className="px-[2px]">
              <MiniCalendar/>
            </div>
            
            <div className="h-[2px] borderCard"></div>
            {/* Schedules */}
            {/* Schedule List */}
            <div className="px-[6px]">
              <div className="flex h-[36px] items-center justify-between mt-[10px] mb-[5px] pr-[10px] rounded-[10px] sideBarFocus">
                <p className="pl-[8px] font-[600] text-[14px] textPrime">Schedules</p>
                <p>List</p>
              </div>

              <div className="h-[1px] borderCard"></div>

              <div className="flex flex-col my-[5px]">
                <div className="flex h-[30px] items-center justify-between pr-[10px] rounded-[8px] sideBarFocus">
                  <p className="pl-[8px] font-[600] text-[14px] textPrime">My</p>
                  <div className="flex">
                    <div className="h-[28px] w-[28px] rounded-[10px] mr-[10px] buttonFocus">
                      <p className="pointer-events-none">add</p>
                    </div>
                    <div className="h-[28px] w-[28px] rounded-[10px]">
                      <p className="pointer-events-none">down</p>
                    </div>
                  </div>
                </div>
                <div className="pl-[8px]"> my category</div>
              </div>
              

              <div className="h-[1px] borderCard"></div>

              <div className="flex h-[30px] items-center justify-between my-[5px] pr-[10px] rounded-[10px] sideBarFocus">
                <p className="pl-[8px] font-[600] text-[14px] textPrime">Others</p>
                <div className="flex">
                  <div className="h-[28px] w-[28px] rounded-[10px] buttonFocus mr-[10px]">
                    <p className="pointer-events-none">add</p>
                  </div>
                  <div className="h-[28px] w-[28px] rounded-[10px]">
                    <p className="pointer-events-none">down</p>
                  </div>
                </div>
              </div>
              <div className="pl-[8px]"> others scehdules</div>
            </div>
          </div>
          </div>
      </div>
    );
}