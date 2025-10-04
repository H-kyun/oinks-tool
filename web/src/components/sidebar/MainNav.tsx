"use client";
import { setSidebarPref } from "@/app/_core/_server/sidebar-actions";
import { useAppDispatch, useAppSelector } from "@/app/_core/_store/hooks";
import { setSidebar } from "@/app/_core/_store/sidebarSlice";
import { CalendarDays, ChartLine, Wallet, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const open = useAppSelector((s) => s.sidebar.open);

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
    <nav className="flex flex-col w-[50px] h-screen items-center pt-[6px]">
      {/* main */}
      <div className="sideBarItemCenter">
        <Link
          href={"/"}
          className={["sideBarItem sideBarItemCenter mb-[5px]",pathname === "/" ? "bg-[var(--bg-primary)]":""].join(" ")}
          title={"main"}
        >
          O
         </Link>
      </div>

      {/*User*/}
      <div className="flex flex-col flex-1">
        {links.map((link) => {
          const Icon = link.icon
          return(
          <div className="sideBarItemCenter rounded-[13px]" key={link.href}>
            <Link
              href={link.href}
              className={["sideBarItem mb-[5px] rounded-[13px]", pathname.includes(link.href)?"hidden":"block sideBarItemCenter"].join(" ")}
              title={link.label}
            >
              <Icon className="w-[18px] h-[18px] text-[var(--text-primary)]" />
            </Link>
            <button
              aria-hidden="true"
              className={["sideBarItemFocused mb-[5px] bg-[var(--bg-icon)] rounded-[13px] ", pathname.includes(link.href)?"block sideBarItemCenter":"hidden"].join(" ")}
              onClick={() => {
                setToggle(!open)
              }}>
                <Icon className="w-[20px] h-[20px] text-[var(--text-primary)]" strokeWidth={2.5} />
            </button>

          </div>
        )})}
      </div>

      {/*User*/}
      <div>
        <div className="sideBarItemCenter">
          <Link
            href={"/"}
            className="sideBarItem sideBarItemCenter my-[12px]"
            title={"user"}
          >
            User
          </Link>
        </div>
      </div>
    </nav>
  );
}
