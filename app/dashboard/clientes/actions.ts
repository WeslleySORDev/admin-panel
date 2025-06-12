"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

// Tipos
export interface Cliente {
  id: string
  nome: string
  email: string
  telefone: string
  endereco: string
  cidade: string
  estado: string
  cep: string
  totalCompras: number
  status: "Ativo" | "Inativo"
}

// Dados mockados para simulação
let clientes: Cliente[] = [
  {
    id: "1",
    nome: "João Silva",
    email: "joao.silva@email.com",
    telefone: "(11) 98765-4321",
    endereco: "Rua das Flores, 123",
    cidade: "São Paulo",
    estado: "SP",
    cep: "01234-567",
    totalCompras: 1249.8,
    status: "Ativo",
  },
  {
    id: "2",
    nome: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    telefone: "(11) 91234-5678",
    endereco: "Av. Paulista, 1000",
    cidade: "São Paulo",
    estado: "SP",
    cep: "01310-100",
    totalCompras: 3450.5,
    status: "Ativo",
  },
  {
    id: "3",
    nome: "Pedro Santos",
    email: "pedro.santos@email.com",
    telefone: "(21) 99876-5432",
    endereco: "Rua da Praia, 50",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    cep: "22021-001",
    totalCompras: 789.9,
    status: "Ativo",
  },
  {
    id: "4",
    nome: "Ana Costa",
    email: "ana.costa@email.com",
    telefone: "(31) 98765-1234",
    endereco: "Av. Afonso Pena, 1500",
    cidade: "Belo Horizonte",
    estado: "MG",
    cep: "30130-004",
    totalCompras: 1567.8,
    status: "Inativo",
  },
  {
    id: "5",
    nome: "Carlos Mendes",
    email: "carlos.mendes@email.com",
    telefone: "(41) 99988-7766",
    endereco: "Rua XV de Novembro, 300",
    cidade: "Curitiba",
    estado: "PR",
    cep: "80020-310",
    totalCompras: 678.5,
    status: "Ativo",
  },
]

// Funções de ação do servidor
export async function getClientes() {
  // Em um ambiente real, você buscaria do banco de dados
  return clientes
}

export async function getCliente(id: string) {
  // Em um ambiente real, você buscaria do banco de dados
  return clientes.find((c) => c.id === id) || null
}

export async function createCliente(formData: FormData) {
  // Simulando um pequeno atraso para parecer uma operação de banco de dados
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const newCliente: Cliente = {
    id: (clientes.length + 1).toString(),
    nome: formData.get("nome") as string,
    email: formData.get("email") as string,
    telefone: formData.get("telefone") as string,
    endereco: formData.get("endereco") as string,
    cidade: formData.get("cidade") as string,
    estado: formData.get("estado") as string,
    cep: formData.get("cep") as string,
    totalCompras: 0,
    status: formData.get("status") as "Ativo" | "Inativo",
  }

  clientes.push(newCliente)

  revalidatePath("/dashboard/clientes")
  redirect("/dashboard/clientes")
}

export async function updateCliente(id: string, formData: FormData) {
  // Simulando um pequeno atraso para parecer uma operação de banco de dados
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const index = clientes.findIndex((c) => c.id === id)

  if (index !== -1) {
    clientes[index] = {
      ...clientes[index],
      nome: formData.get("nome") as string,
      email: formData.get("email") as string,
      telefone: formData.get("telefone") as string,
      endereco: formData.get("endereco") as string,
      cidade: formData.get("cidade") as string,
      estado: formData.get("estado") as string,
      cep: formData.get("cep") as string,
      status: formData.get("status") as "Ativo" | "Inativo",
    }
  }

  revalidatePath("/dashboard/clientes")
  redirect("/dashboard/clientes")
}

export async function deleteCliente(id: string) {
  // Simulando um pequeno atraso para parecer uma operação de banco de dados
  await new Promise((resolve) => setTimeout(resolve, 1000))

  clientes = clientes.filter((c) => c.id !== id)

  revalidatePath("/dashboard/clientes")
}
