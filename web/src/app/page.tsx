import RoutHeader from "./Header";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 ">
      <RoutHeader/>
      <div className="flex h-[400px] pl-[20px] pr-[40px]">
        <div className="flex-2 rounded-[20px] bg-[var(--bg-primary)] m-[5px]">
          calendar
        </div>
        <div className="flex-1 rounded-[20px] bg-[var(--bg-primary)] m-[5px]">
          budget usable 
        </div>
      </div>
      <div className="flex h-[400px] pl-[20px] pr-[40px] ">
        <div className="flex-1 rounded-[20px] bg-[var(--bg-primary)] m-[5px]">
          budget 현황
        </div>
        <div className="flex-1 rounded-[20px] bg-[var(--bg-primary)] m-[5px]">
          finance 총계 + 비율
        </div>
        <div className="flex-1 rounded-[20px] bg-[var(--bg-primary)] m-[5px]">
          finance 주요 지표
        </div>
      </div>
      
    </div>
  );
}
