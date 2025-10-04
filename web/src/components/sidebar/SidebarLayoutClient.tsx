"use client";
import React, { useEffect, useRef, useState, useTransition } from "react";
import SidebarMainNav from "./MainNav";

import { usePathname } from "next/navigation";
import { setSidebarPref } from "@/app/_core/_server/sidebar-actions";
import { useAppDispatch, useAppSelector } from "@/app/_core/_store/hooks";
import { setSidebar } from "@/app/_core/_store/sidebarSlice";

export default function SidebarLayoutClient({
  children,
}: Readonly<{ children: React.ReactNode;}>) {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const didMountRef = useRef(false);
  const open = useAppSelector((s) => s.sidebar.open);

  const setToggle = (v:boolean) => {
    dispatch(setSidebar(v));
    setSidebarPref(v); // save to cookies
  };

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;   //ingnore first randering 
      return;
    }
    if (pathname.match(/\/(finance|budget|calendar)/)) {
      setToggle(true);
    }else{
      setToggle(false);
    }
  }, [pathname]);

  return (
    <div className={["h-screen flex sideBar bg-red-500 transition-[width] duration-100 overflow-hidden", open ? "w-[275px]" : "w-[0px] md:w-[48px]",].join(" ")}>
      {/* side nav */}
      <div className="h-full">
        <SidebarMainNav/>
      </div>

      {/* side main screen */}
      <div
        className="h-full"
        aria-hidden={!open}
      >
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
}
