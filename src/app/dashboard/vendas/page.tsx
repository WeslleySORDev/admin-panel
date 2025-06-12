import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { DataTable } from "@/src/components/ui/data-table"
import { StatusBadge } from "@/src/components/ui/status-badge"
import { PageHeader } from "@/src/components/layout/page-header"
import { VendaActions } from "@/src/components/vendas/venda-actions"
import { Plus, FileDown } from "lucide-react"
import { getVendas } from "./actions"
import { formatCurrency } from "@/src/lib/utils"
import type { Venda } from "@/src/types"

export default async function VendasPage() {
  const vendas = await getVendas()

  const columns = [
    {
      key: "id",
      header: "Pedido",
      className: "w-[100px]",
      cell: (venda: Venda) => `#${venda.id}`,
    },
    {
      key: "cliente",
      header: "Cliente",
    },
    {
      key: "data",
      header: "Data",
    },
    {
      key: "valor",
      header: "Valor",
      className: "text-right",
      cell: (venda: Venda) => formatCurrency(venda.valor),
    },
    {
      key: "formaPagamento",
      header: "Forma de Pagamento",
    },
    {
      key: "status",
      header: "Status",
      cell: (venda: Venda) => <StatusBadge status={venda.status} />,
    },
    {
      key: "actions",
      header: "Ações",
      className: "text-right",
      cell: (venda: Venda) => <VendaActions venda={venda} />,
    },
  ]

  return (
    <div className="space-y-6">
      <PageHeader title="Vendas" description="Gerencie as vendas da sua loja.">
        <Button variant="outline">
          <FileDown className="mr-2 h-4 w-4" /> Exportar
        </Button>
        <Link href="/dashboard/vendas/nova">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Nova Venda
          </Button>
        </Link>
      </PageHeader>

      <DataTable data={vendas} columns={columns} />
    </div>
  )
}
