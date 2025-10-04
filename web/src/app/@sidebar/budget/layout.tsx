import React from "react";


export default function SidebarBudgetLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex w-[212px]">
        {/*mian*/}
        <div className="flex-1 mt-[40px] p-4">{children}</div>
      </div>
    );
}