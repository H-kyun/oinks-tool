"use client";
import { useAppSelector } from "@/app/_core/_store/hooks";
import React from "react";


export default function SidebarBudget() {
    const open = useAppSelector((s) => s.sidebar.open)
    return (
      <div className={`flex h-screen transition-all duration-300 ease-in-out overflow-hidden sideBar ${open ? "w-[200px] opacity-100" : "w-0 opacity-0"}`}>
        {/*mian*/}
         <div className={`whitespace-nowrap overflow-hidden ${open ? "block" : "hidden"}`}>sidebar Budget</div>
      </div>
    );
}