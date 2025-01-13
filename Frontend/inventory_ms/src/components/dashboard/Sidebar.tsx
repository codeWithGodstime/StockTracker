import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider
} from "@/components/ui/sidebar"
import { ShoppingCartIcon, LayoutDashboard, BarChart, UserCircle2Icon, BoxIcon, StoreIcon, SettingsIcon } from "lucide-react"
import { Link } from "react-router-dom"


const SidebarData = [
  {
    "content": "Dashboard",
    "url": "/dashboard",
    "icon": <LayoutDashboard />
  },
  {
    "content": "Inventory",
    "url": "/dashboard/inventory",
    "icon": <ShoppingCartIcon />
  },
  {
    "content": "Reports",
    "url": "/dashboard/reports",
    "icon": <BarChart />
  },
  {
    "content": "Suppliers",
    "url": "/dashboard/suppliers",
    "icon": <UserCircle2Icon />
  },
  {
    "content": "Orders",
    "url": "/dashboard/orders",
    "icon": <BoxIcon />
  },
  {
    "content": "Manage Store",
    "url": "/dashboard/manage/store",
    "icon": <StoreIcon />
  },
]

const SidebarComponent = () => {
  return (
    <>
      {/* <h2 className="text-2xl text-blue-500">Sidebase</h2> */}
      <SidebarProvider>
        <Sidebar className="bg-white">
          <SidebarHeader className="px-5" >
            <img src="/ManageHUB.png" className="" />
          </SidebarHeader>
          <SidebarContent className="mt-10">
            <SidebarMenu>
              {SidebarData.map((item) => (
                <SidebarMenuItem className="hover:bg-gray-100/90" key={item.content}>
                  <SidebarMenuButton asChild size='lg'>
                    <a href={item.url}>
                      {item.icon}
                      <span>{item.content}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="px-5">

            <div>
              <Link to="/settings">Settings</Link>
              <span><SettingsIcon /></span>
            </div>
            <Link to="/logout">Logout</Link>
          </SidebarFooter>
        </Sidebar>
      </SidebarProvider>
    </>
  )
}

export default SidebarComponent
