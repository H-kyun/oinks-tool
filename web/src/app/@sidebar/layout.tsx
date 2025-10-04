import SidebarLayoutClient from "@/components/sidebar/SidebarLayoutClient";


export default async function SidebarMainLayout({
  children,
}: { children: React.ReactNode }) {

  return (
    <SidebarLayoutClient>
      {children}
    </SidebarLayoutClient>
  );
}
