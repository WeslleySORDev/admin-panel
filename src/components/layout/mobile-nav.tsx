"use client"

import { Button } from "@/src/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/src/components/ui/sheet"
import { Menu, LogOut } from "lucide-react"
import { NAV_ITEMS } from "@/src/constants"
import { SidebarNav } from "./sidebar-nav"

interface MobileNavProps {
  onLogout: () => void
}

export function MobileNav({ onLogout }: MobileNavProps) {
  return (
    <header className="lg:hidden flex items-center h-16 px-4 border-b bg-background">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="mr-4">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="p-6 border-b">
            <h1 className="text-xl font-bold">Loja Admin</h1>
          </div>
          <SidebarNav items={NAV_ITEMS} className="px-2 py-4" />
          <div className="p-4">
            <Button variant="outline" className="w-full justify-start" onClick={onLogout}>
              <LogOut className="mr-2 h-4 w-4" /> Sair
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <h1 className="text-lg font-medium">Loja Admin</h1>
    </header>
  )
}
