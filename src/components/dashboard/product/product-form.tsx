"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CATEGORIAS_PRODUTO, statusOptions } from "@/src/constants";
import type { Product } from "@/src/types";
import { useProducts } from "@/src/contexts/ProductContext";
import { useForm } from "react-hook-form";
import { Form } from "@/src/components/ui/form";
import { ProductImage } from "./product-image";
import { ProductNameAndDescription } from "./product-name-and-description";
import { ProductPriceAndStock } from "./product-price-and-stock";
import { ProductCategoryAndStatus } from "./product-category-and-status";

interface ProductFormProps {
  product?: Product;
}

const statusValues = statusOptions.map((status) => status.value);

const formSchema = z.object({
  name: z
    .string()
    .min(5, {
      message: "Nome precisa ter pelo menos 5 caracteres.",
    })
    .max(50, {
      message: "Nome precisa ter no máximo 50 caracteres.",
    }),
  description: z
    .string()
    .min(5, {
      message: "Descrição precisa ter pelo menos 5 caracteres.",
    })
    .max(50, {
      message: "Descrição precisa ter no máximo 50 caracteres.",
    }),
  price: z.number().min(0, "O preço não pode ser negativo.").default(0),
  category: z.enum(CATEGORIAS_PRODUTO, {
    errorMap: (issue, ctx) => {
      if (issue.code === z.ZodIssueCode.invalid_enum_value) {
        return {
          message: `A categoria deve ser uma das seguintes: ${CATEGORIAS_PRODUTO.join(
            ", "
          )}`,
        };
      }
      return { message: ctx.defaultError };
    },
  }),
  stock: z.number().min(0, "O estoque não pode ser negativo.").default(0),
  status: z.enum(statusValues as [string, ...string[]], {
    errorMap: (issue, ctx) => {
      if (issue.code === z.ZodIssueCode.invalid_enum_value) {
        return {
          message: `O status deve ser '${statusValues.join("' ou '")}'.`,
        };
      }
      return { message: ctx.defaultError };
    },
  }),
});

export default function ProductForm({ product }: ProductFormProps) {
  const { createProduct, updateProduct, products } = useProducts();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: product ? product.name : "",
      description: product ? product.name : "",
      stock: product ? product.stock : 0,
      price: product ? product.price : 0,
      category: product ? product.category : "Imobiliario",
      status: product ? product.status : "Ativo",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (product) {
        const updatedProduct: Product = {
          ...product,
          name: values.name,
          description: values.description,
          price: values.price,
          category: values.category,
          stock: values.stock,
          status: values.status as any,
          image: "/placeholder.svg?height=200&width=200",
        };
        updateProduct(product.id, updatedProduct);
        console.log("Produto atualizado com sucesso.");
        setIsSubmitting(false);
        router.push("/dashboard/produtos");
      } else {
        const newProduct: Product = {
          id: (products.length + 1).toString(),
          name: values.name,
          description: values.description,
          price: values.price,
          category: values.category,
          stock: values.stock,
          status: values.status as any,
          image: "/placeholder.svg?height=200&width=200",
        };
        createProduct(newProduct);
        console.log("Novo produto criado.");
        setIsSubmitting(false);
        router.push("/dashboard/produtos");
      }
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
      setIsSubmitting(false);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardContent className="pt-6">
            <section className="grid gap-6 md:grid-cols-2">
              <section className="space-y-4">
                <ProductNameAndDescription form={form} />
                <ProductPriceAndStock form={form} />
                <ProductCategoryAndStatus form={form} />
              </section>
              <ProductImage />
            </section>
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
    </Form>
  );
}
