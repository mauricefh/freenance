import {
  ArrowLeftRight,
  Calendar,
  DollarSign,
  Home,
  Landmark,
} from "lucide-react";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

export default function AppSidebarContent() {
  const contentMenuItems = [
    {
      title: "Home",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Account",
      url: "/account",
      icon: Landmark,
    },
    {
      title: "Budget",
      url: "/budget",
      icon: DollarSign,
    },
    {
      title: "Transaction",
      url: "/transaction",
      icon: ArrowLeftRight,
    },
    {
      title: "Calendar",
      url: "/calendar",
      icon: Calendar,
    },
  ];
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {contentMenuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
                {item.title.toLowerCase() === "transaction" && (
                  <SidebarMenuBadge>24</SidebarMenuBadge>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
}
