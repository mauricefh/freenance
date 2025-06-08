import { Sidebar, SidebarSeparator } from "@/components/ui/sidebar";
import AppSidebarHeader from "./app-sidebar-header";
import AppSidebarContent from "./app-sidebar-content";
import AppSidebarFooter from "./app-sidebar-footer";

export default async function AppSidebar() {
  return (
    <Sidebar>
      <AppSidebarHeader />
      <SidebarSeparator />
      <AppSidebarContent />
      <AppSidebarFooter />
    </Sidebar>
  );
}
