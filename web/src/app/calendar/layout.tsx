import React from "react";


export default function CalendarLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex flex-1">
      {/*mian*/}
      <div className="flex-1 w-full p-4 h-full bg-[var(--bg-primary)] rounded-t-[13px]">{children}</div>
    </div>
    );
}