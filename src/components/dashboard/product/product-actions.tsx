"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Button } from "@/src/components/ui/button";
import { Edit, MoreHorizontal, Trash2 } from "lucide-react";
import { useProducts } from "@/src/contexts/ProductContext";

interface ProductActionsProps {
  product: {
    id: string;
    name: string;
  };
}

export function ProductActions({ product }: ProductActionsProps) {
  const { deleteProduct } = useProducts();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link href={`/dashboard/produtos/${product.id}`}>
          <DropdownMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            Editar
          </DropdownMenuItem>
        </Link>
        <form action={deleteProduct.bind(null, product.id)}>
          <DropdownMenuItem
            className="text-destructive focus:text-destructive"
            onSelect={(e) => {
              e.preventDefault();
              if (
                confirm(`Deseja realmente excluir o produto "${product.name}"?`)
              ) {
                if (e.currentTarget instanceof HTMLElement) {
                  const form = e.currentTarget.closest("form");
                  form?.requestSubmit();
                } else {
                  console.warn(
                    "O currentTarget do evento não é um HTMLElement. Não foi possível encontrar o formulário."
                  );
                }
              }
            }}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Excluir
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
