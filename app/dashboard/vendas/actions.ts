"use server"

import { revalidatePath } from "next/cache"

// Tipos
export interface Venda {
  id: string
  cliente: string
  clienteId: string
  data: string
  valor: number
  formaPagamento: string
  status: "Pendente" | "Concluído" | "Cancelado" | "Em processamento"
  itens: VendaItem[]
}

export interface VendaItem {
  id: string
  produtoId: string
  produtoNome: string
  quantidade: number
  precoUnitario: number
  total: number
}

// Dados mockados para simulação
const vendas: Venda[] = [
  {
    id: "1001",
    cliente: "João Silva",
    clienteId: "1",
    data: "10/06/2025",
    valor: 149.9,
    formaPagamento: "Cartão de Crédito",
    status: "Concluído",
    itens: [
      {
        id: "1",
        produtoId: "1",
        produtoNome: "Camiseta Básica",
        quantidade: 2,
        precoUnitario: 49.9,
        total: 99.8,
      },
      {
        id: "2",
        produtoId: "4",
        produtoNome: "Mochila",
        quantidade: 1,
        precoUnitario: 89.9,
        total: 89.9,
      },
    ],
  },
  {
    id: "1002",
    cliente: "Maria Oliveira",
    clienteId: "2",
    data: "09/06/2025",
    valor: 199.9,
    formaPagamento: "PIX",
    status: "Concluído",
    itens: [
      {
        id: "3",
        produtoId: "3",
        produtoNome: "Tênis Esportivo",
        quantidade: 1,
        precoUnitario: 199.9,
        total: 199.9,
      },
    ],
  },
  {
    id: "1003",
    cliente: "Pedro Santos",
    clienteId: "3",
    data: "08/06/2025",
    valor: 259.8,
    formaPagamento: "Boleto",
    status: "Pendente",
    itens: [
      {
        id: "4",
        produtoId: "2",
        produtoNome: "Calça Jeans",
        quantidade: 2,
        precoUnitario: 129.9,
        total: 259.8,
      },
    ],
  },
  {
    id: "1004",
    cliente: "Ana Costa",
    clienteId: "4",
    data: "07/06/2025",
    valor: 349.7,
    formaPagamento: "Cartão de Débito",
    status: "Em processamento",
    itens: [
      {
        id: "5",
        produtoId: "5",
        produtoNome: "Relógio de Pulso",
        quantidade: 1,
        precoUnitario: 159.9,
        total: 159.9,
      },
      {
        id: "6",
        produtoId: "1",
        produtoNome: "Camiseta Básica",
        quantidade: 1,
        precoUnitario: 49.9,
        total: 49.9,
      },
      {
        id: "7",
        produtoId: "4",
        produtoNome: "Mochila",
        quantidade: 1,
        precoUnitario: 89.9,
        total: 89.9,
      },
    ],
  },
  {
    id: "1005",
    cliente: "Carlos Mendes",
    clienteId: "5",
    data: "06/06/2025",
    valor: 129.9,
    formaPagamento: "Dinheiro",
    status: "Cancelado",
    itens: [
      {
        id: "8",
        produtoId: "2",
        produtoNome: "Calça Jeans",
        quantidade: 1,
        precoUnitario: 129.9,
        total: 129.9,
      },
    ],
  },
]

// Funções de ação do servidor
export async function getVendas() {
  // Em um ambiente real, você buscaria do banco de dados
  return vendas
}

export async function getVenda(id: string) {
  // Em um ambiente real, você buscaria do banco de dados
  return vendas.find((v) => v.id === id) || null
}

export async function atualizarStatusVenda(
  id: string,
  status: "Pendente" | "Concluído" | "Cancelado" | "Em processamento",
) {
  // Simulando um pequeno atraso para parecer uma operação de banco de dados
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const index = vendas.findIndex((v) => v.id === id)

  if (index !== -1) {
    vendas[index] = {
      ...vendas[index],
      status,
    }
  }

  revalidatePath("/dashboard/vendas")
  revalidatePath(`/dashboard/vendas/${id}`)
}
