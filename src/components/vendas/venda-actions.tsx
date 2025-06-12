"use client"

import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/src/components/ui/dropdown-menu"
import { Button } from "@/src/components/ui/button"
import { Eye, MoreHorizontal } from "lucide-react"
import type { Venda } from "@/src/types"

interface VendaActionsProps {
  venda: Venda
}

export function VendaActions({ venda }: VendaActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link href={`/dashboard/vendas/${venda.id}`}>
          <DropdownMenuItem>
            <Eye className="mr-2 h-4 w-4" />
            Ver Detalhes
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
