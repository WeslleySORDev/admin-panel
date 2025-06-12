import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { StatusBadge } from "@/components/ui/status-badge"
import { PageHeader } from "@/components/layout/page-header"
import { ProdutoActions } from "@/components/produtos/produto-actions"
import { Plus, FileDown } from "lucide-react"
import { getProdutos } from "./actions"
import { formatCurrency } from "@/lib/utils"
import type { Produto } from "@/types"

export default async function ProdutosPage() {
  const produtos = await getProdutos()

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
      key: "categoria",
      header: "Categoria",
    },
    {
      key: "preco",
      header: "Preço",
      className: "text-right",
      cell: (produto: Produto) => formatCurrency(produto.preco),
    },
    {
      key: "estoque",
      header: "Estoque",
    },
    {
      key: "status",
      header: "Status",
      cell: (produto: Produto) => <StatusBadge status={produto.status} />,
    },
    {
      key: "actions",
      header: "Ações",
      className: "text-right",
      cell: (produto: Produto) => <ProdutoActions produto={produto} />,
    },
  ]

  return (
    <div className="space-y-6">
      <PageHeader title="Produtos" description="Gerencie os produtos da sua loja.">
        <Button variant="outline">
          <FileDown className="mr-2 h-4 w-4" /> Exportar
        </Button>
        <Link href="/dashboard/produtos/novo">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Novo Produto
          </Button>
        </Link>
      </PageHeader>

      <DataTable data={produtos} columns={columns} />
    </div>
  )
}
