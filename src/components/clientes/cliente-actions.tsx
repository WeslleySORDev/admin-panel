"use client"

import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/src/components/ui/dropdown-menu"
import { Button } from "@/src/components/ui/button"
import { Edit, MoreHorizontal, Trash2 } from "lucide-react"
import { deleteCliente } from "@/src/app/dashboard/clientes/actions"
import type { Cliente } from "@/src/types"

interface ClienteActionsProps {
  cliente: Cliente
}

export function ClienteActions({ cliente }: ClienteActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link href={`/dashboard/clientes/${cliente.id}`}>
          <DropdownMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            Editar
          </DropdownMenuItem>
        </Link>
        <form action={deleteCliente.bind(null, cliente.id)}>
          <DropdownMenuItem
            className="text-destructive focus:text-destructive"
            onSelect={(e) => {
              e.preventDefault()
              if (confirm(`Deseja realmente excluir o cliente "${cliente.nome}"?`)) {
                const form = e.currentTarget.closest("form")
                form?.requestSubmit()
              }
            }}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Excluir
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
