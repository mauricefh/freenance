import { AppSidebarSearchBox } from "./app-sidebar-search-box";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
} from "./ui/sidebar";

export default function AppSidebarHeader() {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <div className="flex justify-between">
          <SidebarMenuItem className="text-2xl">Freenance</SidebarMenuItem>
          <SidebarTrigger className="self-end" />
        </div>
      </SidebarMenu>
      <SidebarMenu>
        <SidebarMenuItem>
          <AppSidebarSearchBox />
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
