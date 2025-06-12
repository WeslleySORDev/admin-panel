"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

// Tipos
export interface Produto {
  id: string
  nome: string
  descricao: string
  preco: number
  categoria: string
  estoque: number
  status: "Ativo" | "Inativo"
  imagem?: string
}

// Dados mockados para simulação
let produtos: Produto[] = [
  {
    id: "1",
    nome: "Camiseta Básica",
    descricao: "Camiseta básica de algodão, disponível em várias cores.",
    preco: 49.9,
    categoria: "Vestuário",
    estoque: 100,
    status: "Ativo",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    nome: "Calça Jeans",
    descricao: "Calça jeans tradicional com lavagem média.",
    preco: 129.9,
    categoria: "Vestuário",
    estoque: 50,
    status: "Ativo",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "3",
    nome: "Tênis Esportivo",
    descricao: "Tênis para corrida e caminhada com amortecimento.",
    preco: 199.9,
    categoria: "Calçados",
    estoque: 30,
    status: "Ativo",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "4",
    nome: "Mochila",
    descricao: "Mochila resistente à água com compartimento para notebook.",
    preco: 89.9,
    categoria: "Acessórios",
    estoque: 25,
    status: "Ativo",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "5",
    nome: "Relógio de Pulso",
    descricao: "Relógio analógico com pulseira de couro.",
    preco: 159.9,
    categoria: "Acessórios",
    estoque: 15,
    status: "Inativo",
    imagem: "/placeholder.svg?height=200&width=200",
  },
]

// Funções de ação do servidor
export async function getProdutos() {
  // Em um ambiente real, você buscaria do banco de dados
  return produtos
}

export async function getProduto(id: string) {
  // Em um ambiente real, você buscaria do banco de dados
  return produtos.find((p) => p.id === id) || null
}

export async function createProduto(formData: FormData) {
  // Simulando um pequeno atraso para parecer uma operação de banco de dados
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const newProduto: Produto = {
    id: (produtos.length + 1).toString(),
    nome: formData.get("nome") as string,
    descricao: formData.get("descricao") as string,
    preco: Number.parseFloat(formData.get("preco") as string),
    categoria: formData.get("categoria") as string,
    estoque: Number.parseInt(formData.get("estoque") as string),
    status: formData.get("status") as "Ativo" | "Inativo",
    imagem: "/placeholder.svg?height=200&width=200",
  }

  produtos.push(newProduto)

  revalidatePath("/dashboard/produtos")
  redirect("/dashboard/produtos")
}

export async function updateProduto(id: string, formData: FormData) {
  // Simulando um pequeno atraso para parecer uma operação de banco de dados
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const index = produtos.findIndex((p) => p.id === id)

  if (index !== -1) {
    produtos[index] = {
      ...produtos[index],
      nome: formData.get("nome") as string,
      descricao: formData.get("descricao") as string,
      preco: Number.parseFloat(formData.get("preco") as string),
      categoria: formData.get("categoria") as string,
      estoque: Number.parseInt(formData.get("estoque") as string),
      status: formData.get("status") as "Ativo" | "Inativo",
    }
  }

  revalidatePath("/dashboard/produtos")
  redirect("/dashboard/produtos")
}

export async function deleteProduto(id: string) {
  // Simulando um pequeno atraso para parecer uma operação de banco de dados
  await new Promise((resolve) => setTimeout(resolve, 1000))

  produtos = produtos.filter((p) => p.id !== id)

  revalidatePath("/dashboard/produtos")
}
