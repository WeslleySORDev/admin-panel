"use client";

import { notFound } from "next/navigation";
import ProdutoForm from "../produto-form";
import { useProducts } from "@/src/contexts/ProductContext";

interface ProdutoEditPageProps {
  params: {
    id: string;
  };
}

export default async function ProdutoEditPage({
  params,
}: ProdutoEditPageProps) {
  const { products } = useProducts();
  const product = products.find((p) => p.id === params.id) || null;

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Editar Produto</h1>
        <p className="text-muted-foreground">
          Atualize as informações do produto.
        </p>
      </div>

      <ProdutoForm produto={product} />
    </div>
  );
}
