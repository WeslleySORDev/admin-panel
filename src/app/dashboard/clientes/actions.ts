"use server";

import { Customer } from "@/src/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Dados mockados para simulação
let costumers: Customer[] = [
  {
    id: "1",
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "(11) 98765-4321",
    address: "Rua das Flores, 123",
    city: "São Paulo",
    state: "SP",
    cep: "01234-567",
    totalPurchases: 1249.8,
    status: "Ativo",
  },
  {
    id: "2",
    name: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    phone: "(11) 91234-5678",
    address: "Av. Paulista, 1000",
    city: "São Paulo",
    state: "SP",
    cep: "01310-100",
    totalPurchases: 3450.5,
    status: "Ativo",
  },
  {
    id: "3",
    name: "Pedro Santos",
    email: "pedro.santos@email.com",
    phone: "(21) 99876-5432",
    address: "Rua da Praia, 50",
    city: "Rio de Janeiro",
    state: "RJ",
    cep: "22021-001",
    totalPurchases: 789.9,
    status: "Ativo",
  },
  {
    id: "4",
    name: "Ana Costa",
    email: "ana.costa@email.com",
    phone: "(31) 98765-1234",
    address: "Av. Afonso Pena, 1500",
    city: "Belo Horizonte",
    state: "MG",
    cep: "30130-004",
    totalPurchases: 1567.8,
    status: "Inativo",
  },
  {
    id: "5",
    name: "Carlos Mendes",
    email: "carlos.mendes@email.com",
    phone: "(41) 99988-7766",
    address: "Rua XV de Novembro, 300",
    city: "Curitiba",
    state: "PR",
    cep: "80020-310",
    totalPurchases: 678.5,
    status: "Ativo",
  },
];

// Funções de ação do servidor
export async function getClientes() {
  // Em um ambiente real, você buscaria do banco de dados
  return costumers;
}

export async function getCliente(id: string) {
  // Em um ambiente real, você buscaria do banco de dados
  return costumers.find((c) => c.id === id) || null;
}

export async function createCliente(formData: FormData) {
  // Simulando um pequeno atraso para parecer uma operação de banco de dados
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newCliente: Customer = {
    id: (costumers.length + 1).toString(),
    name: formData.get("nome") as string,
    email: formData.get("email") as string,
    phone: formData.get("telefone") as string,
    address: formData.get("endereco") as string,
    city: formData.get("cidade") as string,
    state: formData.get("estado") as string,
    cep: formData.get("cep") as string,
    totalPurchases: 0,
    status: formData.get("status") as "Ativo" | "Inativo",
  };

  costumers.push(newCliente);

  revalidatePath("/dashboard/clientes");
  redirect("/dashboard/clientes");
}

export async function updateCliente(id: string, formData: FormData) {
  // Simulando um pequeno atraso para parecer uma operação de banco de dados
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const index = costumers.findIndex((c) => c.id === id);

  if (index !== -1) {
    costumers[index] = {
      ...costumers[index],
      name: formData.get("nome") as string,
      email: formData.get("email") as string,
      phone: formData.get("telefone") as string,
      address: formData.get("endereco") as string,
      city: formData.get("cidade") as string,
      state: formData.get("estado") as string,
      cep: formData.get("cep") as string,
      status: formData.get("status") as "Ativo" | "Inativo",
    };
  }

  revalidatePath("/dashboard/clientes");
  redirect("/dashboard/clientes");
}

export async function deleteCliente(id: string) {
  // Simulando um pequeno atraso para parecer uma operação de banco de dados
  await new Promise((resolve) => setTimeout(resolve, 1000));

  costumers = costumers.filter((c) => c.id !== id);

  revalidatePath("/dashboard/clientes");
}
