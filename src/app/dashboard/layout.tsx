"use client"

import type React from "react"

import { useAuth } from "@/src/hooks/use-auth"
import { Sidebar } from "@/src/components/layout/sidebar"
import { MobileNav } from "@/src/components/layout/mobile-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated, isLoading, logout } = useAuth()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // O hook useAuth já redireciona para login
  }

  return (
    <div className="flex min-h-screen bg-muted/40">
      <Sidebar onLogout={logout} />
      <div className="flex-1 flex flex-col">
        <MobileNav onLogout={logout} />
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
