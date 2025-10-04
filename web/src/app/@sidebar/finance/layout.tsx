export default function SidebarFinanceLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex w-[212px]">
        <div className="flex-1 p-4">{children}</div>
      </div>
    );
}