"use client"

import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { DataTable } from "@/src/components/ui/data-table";
import { StatusBadge } from "@/src/components/ui/status-badge";
import { PageHeader } from "@/src/components/layout/page-header";
import { ProdutoActions } from "@/src/components/produtos/produto-actions";
import { Plus, FileDown } from "lucide-react";
import { formatCurrency } from "@/src/lib/utils";
import type { Product } from "@/src/types";
import { useProducts } from "@/src/contexts/ProductContext";

export default function ProdutosPage() {
  const { products } = useProducts();

  const columns = [
    {
      key: "id",
      header: "ID",
      className: "w-[100px]",
    },
    {
      key: "name",
      header: "Nome",
    },
    {
      key: "category",
      header: "Categoria",
    },
    {
      key: "price",
      header: "Preço",
      className: "text-right",
      cell: (product: Product) => formatCurrency(product.price),
    },
    {
      key: "stock",
      header: "Estoque",
    },
    {
      key: "status",
      header: "Status",
      cell: (product: Product) => <StatusBadge status={product.status} />,
    },
    {
      key: "actions",
      header: "Ações",
      className: "text-right",
      cell: (product: Product) => <ProdutoActions product={product} />,
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Produtos"
        description="Gerencie os produtos da sua loja."
      >
        <Button variant="outline">
          <FileDown className="mr-2 h-4 w-4" /> Exportar
        </Button>
        <Link href="/dashboard/produtos/novo">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Novo Produto
          </Button>
        </Link>
      </PageHeader>

      <DataTable data={products} columns={columns} />
    </div>
  );
}
