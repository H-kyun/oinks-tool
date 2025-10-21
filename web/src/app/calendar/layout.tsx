import SidebarCalendar from "@/components/sidebar/calendar/SidebarCalendar";
import SidebarMainNav from "@/components/sidebar/MainNav";
import React from "react";


export default function CalendarLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex flex-1">
        <aside className="flex h-full overflow-hidden">
            <SidebarMainNav/>
            <SidebarCalendar/>
        </aside>
        {/*mian*/}
        <main className="flex-1 w-full h-full overflow-y-auto contentsCard">
          {children}
        </main>
      </div>
    );
}