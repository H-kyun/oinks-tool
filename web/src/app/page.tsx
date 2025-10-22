import SidebarMainNav from "@/components/sidebar/MainNav";
import RoutHeader from "./Header";

export default function Home() {
  return (
    <div className="flex flex-1">
        <aside className="flex h-full overflow-hidden">  {/* 그대로 유지 */}
            <SidebarMainNav/>
        </aside>
        {/*mian*/}
        <main className="flex-1 w-full h-full overflow-y-auto contentsCard">
          <div className="flex flex-col flex-1 ">
            <RoutHeader/>
            <div className="flex h-[400px] pl-[20px] pr-[40px]">
              <div className="flex-2 rounded-[20px] bg-[var(--bg-primary)] m-[5px] border-2 borderLine">
                calendar
              </div>
              <div className="flex-1 rounded-[20px] bg-[var(--bg-primary)] m-[5px] border-2 borderLine">
                budget usable
              </div>
            </div>
            <div className="flex h-[400px] pl-[20px] pr-[40px] ">
              <div className="flex-1 rounded-[20px] bg-[var(--bg-primary)] m-[5px] border-2 borderLine">
                budget 현황
              </div>
              <div className="flex-1 rounded-[20px] bg-[var(--bg-primary)] m-[5px] border-2 borderLine">
                finance 총계 + 비율
              </div>
              <div className="flex-1 rounded-[20px] bg-[var(--bg-primary)] m-[5px] border-2 borderLine">
                finance 주요 지표
              </div>
            </div>
            
          </div>
        </main>
      </div>
  );
}
