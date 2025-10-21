"use client";
import { useModal } from "@/app/_core/_providers/modal_provider";
import { setSidebarPref } from "@/app/_core/_server/sidebar-actions";
import { useAppDispatch, useAppSelector } from "@/app/_core/_store/hooks";
import { setSidebar } from "@/app/_core/_store/sidebarSlice";
import { CalendarDays, ChartLine, Wallet, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NavItem = {
  href: string;
  main: string;   // 아이콘/약자
  label: string;  // 전체 이름
  icon: LucideIcon;
  focused: string;
};

export default function SidebarMainNav() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const didMountRef = useRef(false);
  const open = useAppSelector((s) => s.sidebar.open);
  const { openModal, closeModal } = useModal();

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

  const links: NavItem[] = [
    { href: "/calendar", main: "C", label: "Calendar", icon:CalendarDays, focused:"CalendarDays"},
    { href: "/budget",    main: "B", label: "Budget", icon:Wallet, focused:'Wallet'},
    { href: "/finance",  main: "F", label: "Finance", icon:ChartLine, focused:'ChartLine'},
  ];

  const setToggle = (v:boolean) => {
    dispatch(setSidebar(v));
    setSidebarPref(v); // save to cookies
  };

  return (
    <nav className={[
      "flex flex-col w-[50px] h-screen items-center justify-end pl-[1px] pt-[6px] overflow-hidden", 
      open ? "flex" : "hidden md:flex"
    ].join(" ")}>
      
      {/* main - 위로 올리기 */}
      <div className="sideBarItemCenter mb-auto">  {/* mb-auto 추가! */}
        <Link
          href={"/"}
          className={["sideBarItem sideBarItemCenter mb-[5px]", pathname === "/" ? "bg-[var(--bg-primary)]":""].join(" ")}
          title={"main"}
        >
          O
        </Link>
      </div>
    
      {/* Links - 위에 붙이기 */}
      <div className="flex-1 flex flex-col">  {/* mb-auto 추가! */}
        {links.map((link) => {
          const Icon = link.icon
          return(
            <div className="rounded-[13px]" key={link.href}>
              <Link
                href={link.href}
                className={["sideBarItem mb-[5px] rounded-[13px]", pathname.includes(link.href) ? "hidden" : "block sideBarItemCenter"].join(" ")}
                title={link.label}
              >
                <Icon className="w-[18px] h-[18px] text-[var(--text-primary)]" />
              </Link>
              <button
                aria-hidden="true"
                className={["sideBarItemFocused mb-[5px] bg-[var(--bg-icon)] rounded-[13px] ", pathname.includes(link.href)?"block sideBarItemCenter border borderLine":"hidden"].join(" ")}
                onClick={() => {
                  setToggle(!open)
                }}>
                  <Icon className="w-[20px] h-[20px] text-[var(--text-primary)]" strokeWidth={2} />
              </button>
            </div>
          )
        })}
      </div>
    
      {/* User - justify-end 덕분에 하단에 위치 */}
      <div className="flex-col sideBarItemCenter">
        <Link
          href={"/settings/profile"}
          className="sideBarItem sideBarItemCenter my-[12px]"
          title={"user"}
        >
          User
        </Link>
        <button 
        onClick={() => openModal(
          <div>
            <h2 className="text-xl font-bold">테스트 모달</h2>
            <p className="mt-4">모달이 잘 작동합니다! 🎉</p>
            <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              닫기
            </button>
          </div>,''
        )}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        모달 열기
      </button>
      </div>
      
    </nav>
  );
}
