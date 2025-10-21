import SidebarBudget from "@/components/sidebar/budget/SidebarBudget";
import SidebarMainNav from "@/components/sidebar/MainNav";

export default function BudgetLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex flex-1">
        <aside className="flex h-full overflow-hidden">
            <SidebarMainNav/>
            <SidebarBudget/>
        </aside>
        {/*mian*/}
        <main className="flex-1 w-full h-full overflow-y-auto">
          {children}
        </main>
      </div>
    );
}