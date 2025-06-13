"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Button } from "@/src/components/ui/button"
import { atualizarStatusVenda } from "@/src/app/dashboard/vendas/actions"
import { STATUS_VENDA } from "@/src/constants"
import type { Sale } from "@/src/types"

interface StatusUpdaterProps {
  sale: Sale
}

export function StatusUpdater({ sale }: StatusUpdaterProps) {
  return (
    <form
      action={async (formData: FormData) => {
        const status = formData.get("status") as "Pendente" | "Concluído" | "Cancelado" | "Em processamento"
        await atualizarStatusVenda(sale.id, status)
      }}
    >
      <div className="flex items-center gap-2">
        <Select name="status" defaultValue={sale.status}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecione o status" />
          </SelectTrigger>
          <SelectContent>
            {STATUS_VENDA.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button type="submit">Atualizar Status</Button>
      </div>
    </form>
  )
}
