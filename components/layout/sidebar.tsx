"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { NAV_ITEMS } from "@/constants"
import { SidebarNav } from "./sidebar-nav"

interface SidebarProps {
  onLogout: () => void
}

export function Sidebar({ onLogout }: SidebarProps) {
  return (
    <aside className="hidden lg:flex flex-col w-64 border-r bg-background">
      <div className="p-6">
        <h1 className="text-xl font-bold">Loja Admin</h1>
      </div>
      <SidebarNav items={NAV_ITEMS} className="px-4 py-2" />
      <div className="mt-auto p-4">
        <Button variant="outline" className="w-full justify-start" onClick={onLogout}>
          <LogOut className="mr-2 h-4 w-4" /> Sair
        </Button>
      </div>
    </aside>
  )
}
