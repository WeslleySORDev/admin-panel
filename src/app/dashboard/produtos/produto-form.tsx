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
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CATEGORIAS_PRODUTO, statusOptions } from "@/src/constants";
import { ImagePlus } from "lucide-react";
import type { Product } from "@/src/types";
import { useProducts } from "@/src/contexts/ProductContext";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";

interface ProdutoFormProps {
  product?: Product;
}

const statusValues = statusOptions.map((status) => status.value);

const formSchema = z.object({
  name: z
    .string()
    .min(5, {
      message: "Nome precisa ter pelo menos 5 caracteres.",
    })
    .max(12, {
      message: "Nome precisa ter no máximo 12 caracteres.",
    }),
  description: z
    .string()
    .min(5, {
      message: "Descrição precisa ter pelo menos 5 caracteres.",
    })
    .max(20, {
      message: "Descrição precisa ter no máximo 20 caracteres.",
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

export default function ProdutoForm({ product }: ProdutoFormProps) {
  const { createProduct, updateProduct, products } = useProducts();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      stock: 0,
      price: 0,
      category: "Imobiliario",
      status: "Ativo",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categoriaOptions = CATEGORIAS_PRODUTO.map((categoria) => ({
    value: categoria,
    label: categoria,
  }));

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

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
      if (product) {
        updateProduct(product.id, product);
      } else {
        createProduct(product);
      }
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descrição</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display description.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preço(R$)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="shadcn"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="stock"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estoque</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Categoria</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
    </Form>
  );
}
