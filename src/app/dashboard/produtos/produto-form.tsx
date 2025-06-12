"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import {
  InputField,
  TextareaField,
  SelectField,
} from "@/src/components/forms/form-field";
import { CATEGORIAS_PRODUTO } from "@/src/constants";
import { ImagePlus } from "lucide-react";
import type { Product } from "@/src/types";
import { useProducts } from "@/src/contexts/ProductContext";

interface ProdutoFormProps {
  product?: Product;
}

export default function ProdutoForm({ product }: ProdutoFormProps) {
  const { createProduct, updateProduct, products } = useProducts();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categoriaOptions = CATEGORIAS_PRODUTO.map((categoria) => ({
    value: categoria,
    label: categoria,
  }));

  const statusOptions = [
    { value: "Ativo", label: "Ativo" },
    { value: "Inativo", label: "Inativo" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const product: Product = {
      id: (formData.get("id") as string)
        ? (formData.get("id") as string)
        : (products.length + 1).toString(),
      name: formData.get("nome") as string,
      description: formData.get("descricao") as string,
      price: Number.parseFloat(formData.get("preco") as string),
      category: formData.get("categoria") as string,
      stock: Number.parseInt(formData.get("estoque") as string),
      status: formData.get("status") as "Ativo" | "Inativo",
      image: (formData.get("image") as string)
        ? (formData.get("image") as string)
        : "/placeholder.svg?height=200&width=200",
    };
    try {
      createProduct(product);
      // if (product) {
      //   updateProduct(product.id, product);
      // } else {
      //   createProduct(product);
      // }
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent className="pt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <InputField
                label="Nome do Produto"
                name="name"
                placeholder="Digite o nome do produto"
                defaultValue={product?.name}
                required
              />

              <TextareaField
                label="Descrição"
                name="description"
                placeholder="Digite a descrição do produto"
                defaultValue={product?.description}
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="Preço (R$)"
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="0,00"
                  defaultValue={product?.price}
                  required
                />

                <InputField
                  label="Estoque"
                  name="stock"
                  type="number"
                  min="0"
                  placeholder="0"
                  defaultValue={product?.stock}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <SelectField
                  label="Categoria"
                  name="category"
                  placeholder="Selecione uma categoria"
                  defaultValue={product?.category || "Vestuário"}
                  options={categoriaOptions}
                />

                <SelectField
                  label="Status"
                  name="status"
                  placeholder="Selecione o status"
                  defaultValue={product?.status || "Ativo"}
                  options={statusOptions}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Imagem do Produto</label>
                <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-md p-6 h-[300px]">
                  {product?.image ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center">
                      <ImagePlus className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Arraste uma imagem ou clique para fazer upload
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PNG, JPG ou WEBP (máx. 2MB)
                      </p>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="mt-4"
                        onClick={() =>
                          alert(
                            "Funcionalidade de upload não implementada neste exemplo"
                          )
                        }
                      >
                        Selecionar Arquivo
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? "Salvando..."
                : product
                ? "Atualizar Produto"
                : "Criar Produto"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
