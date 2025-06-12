"use client"

import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/src/components/ui/dropdown-menu"
import { Button } from "@/src/components/ui/button"
import { Edit, MoreHorizontal, Trash2 } from "lucide-react"

interface ProdutoActionsProps {
  produto: {
    id: string
    nome: string
  }
}

export function ProdutoActions({ produto }: ProdutoActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link href={`/dashboard/produtos/${produto.id}`}>
          <DropdownMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            Editar
          </DropdownMenuItem>
        </Link>
        {/* <form action={deleteProduto.bind(null, produto.id)}>
          <DropdownMenuItem
            className="text-destructive focus:text-destructive"
            onSelect={(e) => {
              e.preventDefault()
              if (confirm(`Deseja realmente excluir o produto "${produto.nome}"?`)) {
                const form = e.currentTarget.closest("form")
                form?.requestSubmit()
              }
            }}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Excluir
          </DropdownMenuItem>
        </form> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
