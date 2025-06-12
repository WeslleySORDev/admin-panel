"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { InputField, TextareaField, SelectField } from "@/components/forms/form-field"
import { createProduto, updateProduto } from "./actions"
import { CATEGORIAS_PRODUTO } from "@/constants"
import { ImagePlus } from "lucide-react"
import type { Produto } from "@/types"

interface ProdutoFormProps {
  produto?: Produto
}

export default function ProdutoForm({ produto }: ProdutoFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const categoriaOptions = CATEGORIAS_PRODUTO.map((categoria) => ({
    value: categoria,
    label: categoria,
  }))

  const statusOptions = [
    { value: "Ativo", label: "Ativo" },
    { value: "Inativo", label: "Inativo" },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    try {
      if (produto) {
        await updateProduto(produto.id, formData)
      } else {
        await createProduto(formData)
      }
    } catch (error) {
      console.error("Erro ao salvar produto:", error)
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent className="pt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <InputField
                label="Nome do Produto"
                name="nome"
                placeholder="Digite o nome do produto"
                defaultValue={produto?.nome}
                required
              />

              <TextareaField
                label="Descrição"
                name="descricao"
                placeholder="Digite a descrição do produto"
                defaultValue={produto?.descricao}
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="Preço (R$)"
                  name="preco"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="0,00"
                  defaultValue={produto?.preco}
                  required
                />

                <InputField
                  label="Estoque"
                  name="estoque"
                  type="number"
                  min="0"
                  placeholder="0"
                  defaultValue={produto?.estoque}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <SelectField
                  label="Categoria"
                  name="categoria"
                  placeholder="Selecione uma categoria"
                  defaultValue={produto?.categoria || "Vestuário"}
                  options={categoriaOptions}
                />

                <SelectField
                  label="Status"
                  name="status"
                  placeholder="Selecione o status"
                  defaultValue={produto?.status || "Ativo"}
                  options={statusOptions}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Imagem do Produto</label>
                <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-md p-6 h-[300px]">
                  {produto?.imagem ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={produto.imagem || "/placeholder.svg"}
                        alt={produto.nome}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center">
                      <ImagePlus className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">Arraste uma imagem ou clique para fazer upload</p>
                      <p className="text-xs text-muted-foreground mt-1">PNG, JPG ou WEBP (máx. 2MB)</p>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="mt-4"
                        onClick={() => alert("Funcionalidade de upload não implementada neste exemplo")}
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
            <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting}>
              Cancelar
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Salvando..." : produto ? "Atualizar Produto" : "Criar Produto"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}
