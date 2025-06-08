import { Bubbles, ChevronUp, Settings, User2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "./ui/sidebar";
import UserDropdownMenuItems from "./user-dropdown-menu";
import ToggleDarkMode from "./toggle-dark-mode";

export default function AppSidebarFooter() {
  const footerMenuItems = [
    {
      title: "Support",
      url: "/support",
      icon: Bubbles,
    },
    {
      title: "Settings",
      url: "/setting",
      icon: Settings,
    },
  ];
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <ToggleDarkMode />
        </SidebarMenuItem>

        {footerMenuItems.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}

        <SidebarSeparator />

        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <User2 />
                Username
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              className="w-[--radix-popper-anchor-width]"
            >
              <UserDropdownMenuItems />
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
