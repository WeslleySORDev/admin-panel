"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/src/lib/utils"
import type { NavItem } from "@/src/types"

interface SidebarNavProps {
  items: NavItem[]
  className?: string
}

export function SidebarNav({ items, className }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex flex-col gap-1", className)}>
      {items.map((item) => {
        const IconComponent = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
              pathname === item.href
                ? "bg-muted text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-primary",
            )}
          >
            <IconComponent className="mr-2 h-4 w-4" />
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}
