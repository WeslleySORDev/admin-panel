import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { DataTable } from "@/src/components/ui/data-table"
import { StatusBadge } from "@/src/components/ui/status-badge"
import { PageHeader } from "@/src/components/layout/page-header"
import { ClienteActions } from "@/src/components/clientes/cliente-actions"
import { Plus, FileDown } from "lucide-react"
import { getClientes } from "./actions"
import { formatCurrency } from "@/src/lib/utils"
import type { Cliente } from "@/src/types"

export default async function ClientesPage() {
  const clientes = await getClientes()

  const columns = [
    {
      key: "id",
      header: "ID",
      className: "w-[100px]",
    },
    {
      key: "nome",
      header: "Nome",
    },
    {
      key: "email",
      header: "Email",
    },
    {
      key: "telefone",
      header: "Telefone",
    },
    {
      key: "totalCompras",
      header: "Total de Compras",
      cell: (cliente: Cliente) => formatCurrency(cliente.totalCompras),
    },
    {
      key: "status",
      header: "Status",
      cell: (cliente: Cliente) => <StatusBadge status={cliente.status} />,
    },
    {
      key: "actions",
      header: "Ações",
      className: "text-right",
      cell: (cliente: Cliente) => <ClienteActions cliente={cliente} />,
    },
  ]

  return (
    <div className="space-y-6">
      <PageHeader title="Clientes" description="Gerencie os clientes da sua loja.">
        <Button variant="outline">
          <FileDown className="mr-2 h-4 w-4" /> Exportar
        </Button>
        <Link href="/dashboard/clientes/novo">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Novo Cliente
          </Button>
        </Link>
      </PageHeader>

      <DataTable data={clientes} columns={columns} />
    </div>
  )
}
